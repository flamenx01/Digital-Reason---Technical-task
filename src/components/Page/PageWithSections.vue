<template>
  <div v-if="currentPage" class="page">
    <div v-if="currentPage.sections && currentPage.sections.length">
      <section
        v-for="(p, index) in pageSections"
        :id="p.page_section_id"
        :key="index"
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
          <form-section 
            v-else-if="p.page_section_type == 'form-section'"
            :page-section="p" />
          <card-section 
            v-else-if="p.page_section_type == 'card-section'"
            :page-section="p" />
          <div v-else class="container page-section_container">
            <h2 v-if="p.page_section_title">{{ p.page_section_title }}</h2>
            <p>{{p.page_section_content}}</p>
          </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import AdvancedSection from '@/components/Section/AdvancedSection.vue';
import TitleSection from '@/components/Section/TitleSection.vue';
import FormSection from '@/components/Section/FormSection.vue';
import CardSection from '@/components/Section/CardSection.vue';

const props = defineProps({
   page : { 
      type: Object, default: () => {
        return {}
      }
   },
});

const currentPage = ref(props.page);

watchEffect(() => {
  currentPage.value = props.page;
});

const pageSections = computed(() => {
  return currentPage.value && currentPage.value.sections ? currentPage.value.sections : [];
})

function getBackgroundImage (pageSection) {
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
    max-width: 60rem !important;
    margin: 0 auto;
    h2 {
      margin-bottom: 1.5rem;
    }
  }
}
</style>