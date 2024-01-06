<template>
  <div class="header_nav">
    <ul>
      <li v-for="item in store.menuItems" :key="item.ID">
        <router-link :to="item.url">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useThemeStore } from '@/stores/store';

const store = useThemeStore();
if (!store.menuItems.length) store.getMenu();
</script>

<style scoped>

</style>
