<template>
   <div class="card-section container">
      <div class="card-section_intro">
         <h2>{{pageSection.page_section_title}}</h2>
         <p class="large-text">{{pageSection.page_section_text}}</p>
      </div>
      <div class=grid>
         <div class="grid-item">
            <div class="grid-item__content">
               <strong>Get Online Week</strong>
               <p>Lorem ipsum dolor sit amet</p>
               <a href="" class="btn btn--alt-2">Find out more</a>
            </div>
         </div>
         <div class="grid-item">
            <div class="grid-item__content">
               <strong>Get Online Week</strong>
               <p>Lorem ipsum dolor sit amet</p>
               <a href="" class="btn btn--alt-2">Find out more</a>
            </div>
         </div>
         <div class="grid-item">
            <div class="grid-item__content">
               <strong>Get Online Week</strong>
               <p>Lorem ipsum dolor sit amet</p>
               <a href="" class="btn btn--alt-2">Find out more</a>
            </div>
         </div>
         <div class="grid-item">
            <div class="grid-item__content">
               <strong>Get Online Week</strong>
               <p>Lorem ipsum dolor sit amet</p>
               <a href="" class="btn btn--alt-2">Find out more</a>
            </div>
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

<style lang="scss" scoped>
   .card-section {
      background-color: $alt-color;
      &_intro {
         h2 {
            color: $light-text;
            }
         p {
            margin-top: 1.5rem;
            color: $light-text;
         }
      }
      .grid {
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
         margin-left: -2.25rem;
         .grid-item {
            margin-top: 2.25rem;
            background: $light-text;
            margin-left: 2.25rem;
            &__content {
               padding: 2.25rem;
               text-align: center;
               display: flex;
               flex-direction: column;
               strong {
                  font-size: 1.5rem;
                  margin-bottom: 1.5rem;
               }
               .btn {
                  margin-top: 1.5rem;
               }
            }
         }
         @media (max-width: 45rem) {
            margin-left: -1.5rem;
            .grid-item {
               width: 100%;
               margin-top: 1.5rem;
               margin-left: 1.5rem;
            }
         }
      }
   }
</style>