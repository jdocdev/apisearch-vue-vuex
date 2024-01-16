import { createStore } from 'vuex';

export default createStore({
  state: {
    entries: [],
    entriesFilter: []
  },
  getters: {
    uniqueCategories(state) {
      return Array.from(new Set(state.entries.map(entry => entry.Category)));
    },
    uniqueAuthTypes(state) {
      return Array.from(new Set(state.entries.map(entry => entry.Auth)));
    }
  },
  mutations: {
    setEntries(state, payload) {
      state.entries = payload;
    },
    setEntriesFilter(state, payload) {
      state.entriesFilter = payload;
    }
  },
  actions: {
    async getEntries({ commit }) {
      try {
        const response = await fetch('https://api.publicapis.org/entries');
        const data = await response.json();
        commit('setEntries', data.entries);
        commit('setEntriesFilter', data.entries);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    },

    FilterCharacteristics({ commit, state }, { category, auth }) {
      let results = state.entries;
    
      // Aplicar filtro por categoría si se selecciona una categoría
      if (category) {
        results = results.filter((entry) => entry.Category === category);
      }
    
      // Aplicar filtro por tipo de Auth
      if (auth !== undefined && auth !== "") {
        results = results.filter((entry) => {
          if (auth === "No Auth") {
            // Incluir elementos con Auth vacío o undefined
            return !entry.Auth || entry.Auth === "No Auth";
          } else {
            return entry.Auth === auth;
          }
        });
      }
    
      commit('setEntriesFilter', results);
    }
  },
  modules: {}
});
