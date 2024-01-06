<template>
  <div v-if="currentPage" class="page">
    <div v-if="pageSections.length">
      <div
        v-for="p in pageSections"
        :id="p.page_section_id"
        :key="p.page_section_id"
        :class="[ p.page_section_type]"
        class="page-section">
          <advanced-section 
            v-if="p.page_section_type == 'advanced-section'" 
            :page-section="p.left" 
            class="left" />
          <advanced-section 
            v-if="p.page_section_type == 'advanced-section'"  
            :page-section="p.right" 
            class="right" />
          <div 
            v-if="p.page_section_type == 'title-section'" />
          <div 
            v-if="p.page_section_type == 'help-section'" />
          <div 
            v-if="p.page_section_type == 'about-section'" />
          <div v-else class="container">
            <h2 v-if="p.page_section_title">{{ p.page_section_title }}</h2>
            <div v-html="p.page_section_content" />
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import AdvancedSection from '@/components/Section/AdvancedSection.vue';

const currentPage = computed(() => {
  return true;
})

const pageSections = computed(() => {
  return [
    {
      page_section_id: 0,
      page_section_title: 'Wibble',
      page_section_content: '<p>this is content</p>',
      page_section_type: '',
    },
    {
      page_section_id: 1,
      page_section_title: 'AdvancedTest',
      page_section_type: 'advanced-section',
      left: {
        page_section_layout: 'content',
        page_section_content: '<p>this is advanced content</p>'
      },
      right: {
        page_section_layout: 'image',
        page_section_image: 'https://picsum.photos/1500/900',
        page_section_alt: '<p>this is advanced content</p>'
      },
    }
  ];
});
</script>

<style lang="scss">
.page-section {
  .container {
    position: relative;
    img {
      max-width: 100%;
    }
    img.center {
      margin: 50px auto;
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
}
.container {
  padding: 4rem 2rem;
  max-width: 60rem;
  margin: 0 auto;
}
</style>