<template>
  <div class="header__top container">
    <div class="header__top__search">
      <router-link class="button" aria-label="Homepage" to="/">
        <svg aria-hidden="true" class="icon" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M15.055 30.391a15.034 15.034 0 1110.627-4.403 14.936 14.936 0 01-10.627 4.403zm0-25.743a10.706 10.706 0 107.56 3.135 10.638 10.638 0 00-7.56-3.135z"></path><path d="M33.44 35.906a2.16 2.16 0 01-1.526-.633l-9.284-9.285a2.16 2.16 0 013.052-3.056l9.288 9.288a2.16 2.16 0 01-1.53 3.686z"></path></g></svg>
        Search
      </router-link>
    </div>
    <div class="header__top__actions">
      <router-link class="button button-learn" aria-label="Homepage" to="/">Learn</router-link>
      <router-link class="button button-donate" aria-label="Homepage" to="/">Donate</router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
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
      color: #000;
      .icon {
        margin-right: 0.6rem;
        width: 1.5rem;
        height: 1.5rem;
      }
      &:hover {
        background: #ececec;
        color: #000;
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
        background: #fff;
        color: #000;
        border-left: 1px solid #ccc;
        &:hover {
          background: #ececec;
          color: #000;
        }
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          height: .25rem;
          background-color: #2f8375;
          display: block;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
      &-donate {
        background: #cf1b46;
        color: #fff;
        &:hover {
          background: #367d91;
          color: #fff;
        }
      }
    }
  }
}

</style>