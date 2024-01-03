<script setup lang="ts"></script>
<template>
  <div class="home">
    <div class="home__banner">
      <Banner color="#54A6FF" />
      <Banner color="#3563E9" path="arrow" btn-color="#54A6FF" />
    </div>

    <div class="home__popular">
      <sections-list-car title="Popular Car" link="/" scrollable-list />
    </div>

    <div class="home__recommendation">
      <sections-list-car
        title="Recommendation Car"
        has-horizontal-layout-card
      />
      <div class="flex justify-center">
        <button class="button-cta mt-9">Show more car</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  @apply px-6 py-8 pb-12 -mt-36;
  @apply md:mt-0 md:px-16;

  &__banner {
    @apply gap-8 flex flex-row overflow-scroll no-scrollbar;

    & .banner {
      @apply flex-none;
      @apply xl:flex-auto;
    }
  }

  &__recommendation {
    @apply mt-11;
  }
}
</style>