<template>
  <div class="title-section container">
    <div class="title-section__content">
      <h1 class="title-section__title">
        {{ pageSection.page_section_title }}
      </h1>
      <p class="title-section__text">
        {{ pageSection.page_section_text }}
      </p>
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
.title-section {
  display: flex;
  align-items: center;
  padding-bottom: 5.0625rem;
  padding-top: 5.0625rem;
  &__title {
    background-color: #367d91;
    color: #fff;
    padding: 1.5rem;
    display: inline-block;
    font-size: 3.375em;
    line-height: 1.1;
  }
  &__text {
    background-color: #fff;
    color: #2f8375;
    padding: 1.5rem;
    max-width: 40rem;
    font-size: 1.5em;
    line-height: 1.3;
  }
}

</style>