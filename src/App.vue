<template>
  <div>
    <h1 class="text-center py-4 fw-bold">Find your free API</h1>
    <FilterCharacteristics />
    <ListEntries/>
  </div>
</template>

<script>
import FilterCharacteristics from './components/FilterCharacteristics.vue';
import ListEntries from './components/ListEntries.vue';

export default {
  name: 'App',
  components: {
    ListEntries,
    FilterCharacteristics
}
}
</script>

<style lang="scss">

</style>
