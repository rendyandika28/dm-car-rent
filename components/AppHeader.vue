<script setup lang="ts">
const currentPath = computed<string>(() => useRoute().path);
const { querySearch, isSelectFavorites } = storeToRefs<any>(useCarStore());

const query = computed({
  get: () => querySearch.value,
  set: (val) => {
    querySearch.value = val;
  },
});
</script>
<template>
  <header :class="currentPath === '/' ? 'pb-[9.25rem]' : 'pb-8'">
    <nuxt-link to="/">
      <h1 class="logo">DM</h1>
    </nuxt-link>
    <div class="search-wrapper">
      <Icon class="search-icon" name="ep:search" color="#596780" size="24" />
      <input
        placeholder="Search something here"
        v-model="query"
        type="search"
        name="cars"
        id="cars"
      />
    </div>
    <div class="favorite-wrapper">
      <button class="favorite" @click="isSelectFavorites = !isSelectFavorites">
        <Icon
          name="ant-design:heart-filled"
          :color="isSelectFavorites ? '#ED3F3F' : '#596780'"
          size="24"
        />
      </button>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  @apply border flex items-center justify-between px-6 pt-8 flex-wrap bg-white;
  @apply md:px-[3.75rem] md:pt-0 md:flex-nowrap md:h-[7.75rem] md:gap-8 md:pb-0;
  h1.logo {
    @apply text-primary-500 font-bold w-[9.25rem] order-1;
    @apply md:text-center;
    font-size: 2rem;
    line-height: 3rem;
    letter-spacing: -3%;
  }

  .search-wrapper {
    @apply flex items-center px-6 w-full h-[2.75rem] rounded-[0.625rem] border border-gray-border order-3 mt-4;
    @apply md:order-2 md:mt-0 md:rounded-[4.375rem];

    .search-icon {
      @apply mr-2;
      @apply md:mr-5;
    }

    input {
      @apply flex-1 text-secondary;
      @apply focus:outline-none;
    }
  }

  .favorite-wrapper {
    @apply order-2;
    @apply md:order-3;
    button.favorite {
      @apply h-[2.75rem] w-[2.75rem] rounded-full border border-gray-border text-secondary;
    }
  }
}
</style>
