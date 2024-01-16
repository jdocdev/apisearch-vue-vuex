<template>
    <div class="filter container d-flex justify-content-center">
        <!-- Filtro por Categoría -->
        <select class="form-select m-3" v-model="selectedCategory" @change="filter">
            <option value="">Todas las categorías</option>
            <option v-for="category in uniqueCategories" :key="category" :value="category">{{ category }}</option>
        </select>

        <!-- Filtro por Auth -->
        <select class="form-select m-3" v-model="selectedAuth" @change="filter">
            <option value="">Todos los tipos de Auth</option>
            <option value="No Auth">No Auth</option>
            <option v-for="authType in filteredAuthTypes" :key="authType" :value="authType">{{ authType }}</option>
        </select>
    </div>
</template>
  
<script>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const selectedCategory = ref("");
        const selectedAuth = ref("");

        // Obtener la lista de categorías desde el getter uniqueCategories
        const uniqueCategories = ref(store.getters.uniqueCategories);

        // Obtener la lista de tipos de Auth desde el getter uniqueAuthTypes
        const uniqueAuthTypes = ref(store.getters.uniqueAuthTypes);

        // Filtrar tipos de Auth para excluir la opción vacía
        const filteredAuthTypes = ref(uniqueAuthTypes.value.filter(authType => authType !== ""));

        // Observar cambios en las entradas y actualizar categorías y tipos de Auth únicos
        watch(() => store.state.entries, (newEntries) => {
            uniqueCategories.value = Array.from(new Set(newEntries.map(entries => entries.Category)));
            uniqueAuthTypes.value = Array.from(new Set(newEntries.map(entries => entries.Auth)));
            filteredAuthTypes.value = uniqueAuthTypes.value.filter(authType => authType !== "");
        });

        // Observar cambios en las selecciones y llamar a la acción FilterCharacteristics
        watch([selectedCategory, selectedAuth], ([newCategory, newAuth]) => {
            store.dispatch('FilterCharacteristics', { category: newCategory, auth: newAuth });
        });

        return {
            selectedCategory,
            selectedAuth,
            uniqueCategories,
            filteredAuthTypes
        };
    }
}
</script>
  
  

<style></style>