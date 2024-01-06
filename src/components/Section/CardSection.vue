<template>
   <div class="card-section">
      <div>
         <h2>{{pageSection.page_section_title}}</h2>
         <p>{{pageSection.page_section_text}}</p>
      </div>
      <div class=grid>
         <div class="grid-item">
            <strong>Get Online Week</strong>
            <p>Lorem ipsum dolor sit amet</p>
            <a href="" class="btn btn--primary">Find out more</a>
         </div>
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
</style>