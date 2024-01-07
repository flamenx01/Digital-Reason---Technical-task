<template>
  <page-with-sections :page="page"/>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import pageWithSections from '@/components/page/pageWithSections.vue';
const route = useRoute();  
const page = ref([]);
getPageByID(route.params.id);

watch(route, () => {
  getPageByID(route.params.id);
});

async function getPageByID(id) {
  const response = await fetch(`/data/pages/${id}.json`);
  try {
    const result = await response.json();
    page.value = result;
  } catch (err) {
    page.value = {"sections": [
    {
      "page_section_id": "title",
      "page_section_title": "404 - Page not found",
      "page_section_text": "This page was not found",
      "page_section_type": "title-section",
      "page_section_background_image": ""
    }]}
  }
}
</script>

<style scoped>

</style>