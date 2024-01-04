<script setup lang="ts">
import type { Car } from "~/types/responses/car_response_type";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "",
  },
  hasHorizontalLayoutCard: {
    type: Boolean,
    default: false,
  },
  scrollableList: {
    type: Boolean,
    default: false,
  },
  cars: {
    type: Array as PropType<Car[] | null>,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <section class="list-car">
    <div class="list-car__header">
      <h5 class="list-car__header-title" v-text="title"></h5>
      <nuxt-link v-if="link !== ''" :to="link" class="list-car__header-cta"
        >View All</nuxt-link
      >
    </div>
    <div
      class="list-car__items"
      :class="scrollableList && 'scrollable-list'"
      v-if="cars?.length"
    >
      <car-card v-for="car in cars" :key="car.id" :car="car" />
    </div>
    <p v-else-if="loading" class="text-secondary text-center p-8">
      Loading cars...
    </p>
    <p v-else class="text-secondary text-center p-8">There's no car found</p>
  </section>
</template>
<style lang="scss" scoped>
.list-car {
  @apply flex flex-col gap-7 my-7;
  &__header {
    @apply flex items-center justify-between font-semibold text-base px-5;
    h5 {
      @apply text-title-muted;
    }

    a {
      @apply text-primary-500;
    }
  }
  &__items {
    @apply grid grid-cols-1 gap-8;
    @apply sm:grid-cols-2;
    @apply lg:grid-cols-3;
    @apply xl:grid-cols-4;
  }
}

.scrollable-list.list-car__items {
  @media screen and (max-width: 1280px) {
    @apply flex flex-row overflow-scroll no-scrollbar;

    .car-card {
      @apply flex-none w-9/12 lg:w-7/12;

      &__info {
        @apply justify-around;
      }
    }
  }
}
</style>
