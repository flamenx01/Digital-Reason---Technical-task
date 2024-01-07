<template>
  <div class="header__top container">
    <div class="header__top__search">
      <router-link class="button" aria-label="Homepage" to="/">
        <object class="icon" :data="searchIcon" width="24" height="24" />  
        <span>Search</span>
      </router-link>
    </div>
    <div class="header__top__actions">
      <router-link class="button button-learn" aria-label="Homepage" to="/">Learn</router-link>
      <router-link class="button button-donate" aria-label="Homepage" to="/">Donate</router-link>
    </div>
  </div>
</template>

<script setup>
import searchIcon from '@/assets/icons/search.svg';
</script>

<style lang="scss" scoped>
.header__top {
  display: flex;
  justify-content: space-between;
  &__search {
    .button {
      display: flex;
      position: relative;
      text-decoration: none;
      padding: 0.6rem 1.5rem;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      align-items: center;
      color: $dark-text;
      font-weight: 700;
      .icon {
        margin-right: 0.6rem;
        width: 1.5rem;
        height: 1.5rem;
      }
      &:hover {
        background: $grey-color;
        color: $dark-text;
      }
      @media (max-width: 45rem) {
        span {
          display: none;
        }
        .icon {
          margin-right: 0;
        }

      }
    }
  }
  &__actions {
    display: flex;
    justify-content: space-between;
    .button {
      position: relative;
      text-decoration: none;
      padding: 0.6rem 1.5rem;
      font-weight: 700;
      &-learn {
        background: $light-text;
        color: $dark-text;
        border-left: 1px solid #ccc;
        &:hover {
          background: $grey-color;
          color: $dark-text;
        }
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          height: .25rem;
          background-color: $alt-color;
          display: block;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
      &-donate {
        background: #cf1b46;
        color: $light-text;
        &:hover {
          background: $main-color;
          color: $light-text;
        }
      }
    }
  }
}

</style>