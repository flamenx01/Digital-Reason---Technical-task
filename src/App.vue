<template>
  <the-header />
  <router-view></router-view>
</template>

<script setup>
import theHeader from '@/components/Common/TheHeader.vue';
</script>

<style lang="scss">
.container {
  max-width: 120rem;
  padding-left: 5rem;
  padding-right: 5rem;
  @media (max-width: 45rem) {
    padding-left: 2.5rem;
    padding-right: 2.5rem; 
  }
}
.section > .container {
    padding-left: 5.0625rem;
    padding-right: 5.0625rem;
}

*{
  font-family: Rubik,Helvetica Neue,Helvetica,Arial,sans-serif;
  margin: 0px;
  padding: 0px;
}
</style>