<template>
  <h1>Page: {{id}}</h1>
  <page-with-sections />
</template>

<script setup>
import { useRoute } from 'vue-router'
import pageWithSections from '@/components/Page/pageWithSections.vue';
const route = useRoute();  
const id = route.params.id;
</script>

<style scoped>

</style>