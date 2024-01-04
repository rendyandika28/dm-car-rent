<script setup lang="ts">
import type { Car } from "~/types/responses/car_response_type";
import { watchDebounced } from "@vueuse/core";

const { getCars } = useCar();
const { favoriteCars, querySearch } = storeToRefs<any>(useCarStore());

const params = ref({
  page: 1,
  q: "",
});

const lastPage = ref<number>(0);

const searchRef = ref<Ref<any>>(querySearch);

const cars = ref<Car[]>([]);

const { data: rawCars, status, pending, execute } = await getCars(params);

watchDebounced(
  searchRef,
  () => {
    cars.value = [];
    if (searchRef.value !== "") {
      if (params.value.q == searchRef.value) {
        execute();
      } else {
        params.value.q = searchRef.value;
      }
    }
  },
  {
    debounce: 500,
  }
);

watch(
  status,
  () => {
    if (status.value === "success") {
      cars.value = [...cars.value, ...rawCars.value.data];
      lastPage.value = rawCars?.value.meta?.last_page;

      // Set favorite cars
      const allCars = [...cars.value];

      favoriteCars.value.forEach((favCar: string) => {
        const foundCars = allCars.filter((car) => car.id === favCar);
        if (foundCars) {
          foundCars.map((car) => (car.isFavorite = true));
        }
      });
    }
  },
  { immediate: false }
);
</script>
<template>
  <section v-if="searchRef !== ''" class="main-condition">
    <sections-list-car
      title="Search result"
      has-horizontal-layout-card
      :cars="cars"
      :loading="pending"
    />
  </section>
</template>
<style lang="scss" scoped>
.main-condition {
  @apply px-6 py-8 pb-12 -mt-36;
  @apply md:mt-0 md:px-16;
}
</style>
