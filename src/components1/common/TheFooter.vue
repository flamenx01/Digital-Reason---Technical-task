<template>
  <footer>
    <div class="footer container">
      Copyright {{year}} © 			
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
const date = new Date();
const year = ref(date.getFullYear());

</script>

<style lang="scss" scoped>
  .footer {
    background-color: $grey-color;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
  }

</style>