<template>
  <div class="header_main container">
    <div class="header_branding">
      <router-link class="header_branding__logo" aria-label="Homepage" to="/">
        <img src="https://www.goodthingsfoundation.org/wp-content/uploads/2021/01/good-things-foundation-logo.png" alt="Branding Logo">
      </router-link >
    </div>
    <nav class="header_nav">
      <ul>
        <li v-for="item in store.menuItems" :key="item.ID">
          <router-link :to="item.url">{{item.title}}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { useThemeStore } from '@/stores/store';

const store = useThemeStore();
if (!store.menuItems.length) store.getMenu();
</script>

<style lang="scss">
.header_main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  .header_branding {
    &__logo {
      display: block;
      height: 3rem;
      img {
        height: 100%;
        width: auto;
        margin-right: 1rem;
        object-fit: contain;
      }
    }
  }
  .header_nav {
    display: flex;
    ul {
      display: flex;
      li {
        list-style: none;
        margin-left: 0;
        margin-top: 0;
        padding: 2.188rem 0.625rem;
        a {
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          color: #000;
          &:visited {
            color: #000;
          }
          &:hover {
            color: #367d91;
          }
        }
      }
    }
  }
}


</style>
