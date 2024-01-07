<template>
  <the-header />
  <router-view></router-view>
  <the-footer />
</template>

<script setup>
import theHeader from '@/components/Common/TheHeader.vue';
import theFooter from '@/components/Common/TheFooter.vue';
</script>

<style lang="scss">
  @import '@/assets/css/main.scss';
</style>