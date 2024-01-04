<script setup lang="ts">
import type { Car } from "~/types/responses/car_response_type";

const { getCars, getPopularCars } = useCar();
const { favoriteCars } = storeToRefs<any>(useCarStore());

const params = ref({
  page: 1,
  q: "",
});

const lastPage = ref<number>(0);

const { data: popularCars } = await getPopularCars();
const { data: rawCars, status, pending } = await getCars(params);

const cars = ref<Car[]>([]);

// watch cars parasm
watch(
  status,
  () => {
    if (status.value === "success") {
      cars.value = [...cars.value, ...rawCars.value.data];
      lastPage.value = rawCars?.value.meta?.last_page;

      // Set favorite cars
      const allCars = [...cars.value, ...popularCars.value];

      favoriteCars.value.forEach((favCar: string) => {
        const foundCars = allCars.filter((car) => car.id === favCar);
        if (foundCars) {
          foundCars.map((car) => (car.isFavorite = true));
        }
      });
    }
  },
  { immediate: true }
);

const isLastPageCars = computed<boolean>(
  () => params.value.page < lastPage.value
);

const loadMoreCars = () => {
  if (isLastPageCars) {
    params.value.page++;
  }
};
</script>
<template>
  <div class="home">
    <div class="home__banner">
      <Banner color="#54A6FF" :car="popularCars[0]" />
      <Banner
        color="#3563E9"
        path="arrow"
        btn-color="#54A6FF"
        :car="popularCars[1]"
      />
    </div>

    <div class="home__popular">
      <sections-list-car
        title="Popular Car"
        link="/"
        scrollable-list
        :cars="popularCars"
      />
    </div>

    <div class="home__recommendation">
      <sections-list-car
        title="Recommendation Car"
        has-horizontal-layout-card
        :cars="cars"
      />
      <div class="flex justify-center">
        <button
          v-if="isLastPageCars"
          @click="loadMoreCars"
          class="button-cta mt-9 min-w-40"
        >
          <spinner v-if="pending" />
          <span v-else>Show more car</span>
        </button>
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
