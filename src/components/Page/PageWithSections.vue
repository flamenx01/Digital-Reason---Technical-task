<template>
  <div v-if="currentPage" class="page">
    <div v-if="pageSections.length">
      <section
        v-for="p in pageSections"
        :id="p.page_section_id"
        :key="p.page_section_id"
        :class="[ p.page_section_type]"
        :style="{'background-image': getBackgroundImage(p)}"
        class="page-section">
          <advanced-section 
            v-if="p.page_section_type == 'advanced-section'" 
            :page-section="p.left" 
            class="left" />
          <advanced-section 
            v-if="p.page_section_type == 'advanced-section'"  
            :page-section="p.right" 
            class="right" />
          <title-section 
            v-else-if="p.page_section_type == 'title-section'"
            :page-section="p" />
          <div 
            v-else-if="p.page_section_type == 'help-section'" />
          <div 
            v-else-if="p.page_section_type == 'about-section'" />
          <div v-else class="page-section_container">
            <h2 v-if="p.page_section_title">{{ p.page_section_title }}</h2>
            <div v-html="p.page_section_content" />
          </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import AdvancedSection from '@/components/Section/AdvancedSection.vue';
import TitleSection from '@/components/Section/TitleSection.vue';
const currentPage = computed(() => {
  return true;
})

const pageSections = computed(() => {
  return [
    {
      page_section_id: 0,
      page_section_title: 'Get Online Week 2021',
      page_section_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      page_section_type: 'title-section',
      page_section_background_image: 'https://picsum.photos/1200/600',
    },
    {
      page_section_id: 1,
      page_section_title: 'AdvancedTest',
      page_section_type: 'advanced-section',
      left: {
        page_section_layout: 'content',
        page_section_title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        page_section_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      right: {
        page_section_layout: 'image',
        page_section_image: 'https://picsum.photos/1500/900',
        page_section_alt: 'image'
      },
    },
    {
      page_section_id: 2,
      page_section_title: 'Wibble',
      page_section_content: '<p>this is content</p>',
      page_section_type: '',
    },
  ];
});

function getBackgroundImage (pageSection) {
  console.log(pageSection.page_section_background_image);
  return pageSection.page_section_background_image ? `url(${pageSection.page_section_background_image})`: 'none';
}

</script>

<style lang="scss">
.page-section {
  background-position: 50%;
  background-size: cover;
  position: relative;
  width: 100%;
  &_container {
    position: relative;
      padding: 4rem 2rem;
      max-width: 60rem;
      margin: 0 auto;
  }
}
</style>