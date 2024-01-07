<template>
  <page-with-sections :page="page"/>
</template>

<script setup>
import { ref } from 'vue'
import pageWithSections from 'HOMEFOLDER/components/page/pageWithSections.vue';

const page = ref({});
getHomepage();

async function getHomepage() {
  const response = await fetch(`/data/pages/home.json`);
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