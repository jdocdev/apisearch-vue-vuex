<template>
    <section>
        <div class="container d-flex flex-wrap justify-content-center">
            <div class="entries__item m-3" v-for="entrie in entries" :key="entrie.API">
                <CardEntries :entrie="entrie" />
            </div>
        </div>
    </section>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CardEntries from '@/components/CardEntries.vue';

export default {
    setup() {
        const store = useStore();
        const entries = computed(() => {
            return store.state.entriesFilter;
        });
        onMounted(() => {
            store.dispatch('getEntries');
        });
        return {
            entries
        };
    },
    components: { CardEntries }
}

</script>

<style>

</style>