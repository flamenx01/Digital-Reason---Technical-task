<template>
    <div v-if="pageSection.page_section_layout == 'content'" class="advanced_container">
      <div class="container">
        <h2>{{pageSection.page_section_title}}</h2>
        <p class="large-text">{{pageSection.page_section_content}}</p>
        <router-link v-if="pageSection.page_section_button" :to="pageSection.page_section_button_link" class="btn btn--white">{{ pageSection.page_section_button_text }}</router-link>
      </div>
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
      min-height: 18rem;
      &.advanced_container {
        position: relative;
        display: flex;
        height: 100%;
        padding-bottom: 2.25rem;
        padding-top: 2.25rem;
        background-color: $alt-color;
        .container {
          width: 100%;
          h2 {
            color: $light-text;
          }
          p {
            margin-top: 1.5rem;
            color: $light-text;
          }
          .btn {
            margin-top: 1.5rem;
            position: absolute;
          }
        }
      }
      &.image {
        display: flex;
        height: 100%;
        .image-wrapper {
          background-position: 50%;
          background-size: cover;
          width: 100%;
          height: 100%;
          min-height: 18rem;
          padding-bottom: 2.25rem;
          padding-top: 2.25rem;
        }
      }
    }
    @media (max-width: 65rem) {
      .left, .right {
        width: 100%;
      }
      .left.advanced_container {
        order: 1;
      }
    }
  }
</style>