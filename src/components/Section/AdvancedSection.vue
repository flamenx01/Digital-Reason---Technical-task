<template>
    <div v-if="pageSection.page_section_layout == 'content'" class="advanced_container">
      <div v-html="pageSection.page_section_content" />
    </div>
    <div v-else-if="pageSection.page_section_layout == 'image'" class="image">
      <div class="image-wrapper" :title="pageSection.page_section_alt" :style="{'background-image': `url(${pageSection.page_section_image})`}">
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
   pageSection : { 
      type: Object, default: () => {
        return {}
      }
   },
});


</script>

<style lang="scss">
  .page-section.advanced-section {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    .left, .right {
      width: 50%;
      min-height: 30em;
      &.advanced_container {
        position: relative;
        display: flex;
        height: 100%;
      }
      &.image {
        display: flex;
        height: 100%;
        .image-wrapper {
          background-position: 50%;
          background-size: cover;
          width: 100%;
          height: 100%;
          min-height: 18em;
          
        }
      }
    }
  }
</style>