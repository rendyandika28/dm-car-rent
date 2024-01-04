<script setup lang="ts">
import type { Car } from "~/types/responses/car_response_type";

const instance = getCurrentInstance();
const hasHorizontalLayoutCard = computed<boolean>(
  () => instance?.parent?.props.hasHorizontalLayoutCard as boolean
);

const props = defineProps({
  car: {
    type: Object as PropType<Car | null>,
    default: () => [],
  },
});

const { toggleCarAsFavorite } = useCarStore();
const { favoriteCars } = storeToRefs<any>(useCarStore());
</script>
<template>
  <div class="car-card">
    <div class="car-card__header">
      <div class="car-card__header-title">
        <h5>{{ car?.name }}</h5>
        <h6>{{ car?.type }}</h6>
      </div>
      <button
        @click="toggleCarAsFavorite(car)"
        class="car-card__header-favorite"
      >
        <Icon
          :name="
            car?.isFavorite
              ? `ant-design:heart-filled`
              : `ant-design:heart-outlined`
          "
          :color="car?.isFavorite ? `#ED3F3F` : '#90A3BF'"
          size="24"
          :class="hasHorizontalLayoutCard && 'favorite-icon'"
        />
      </button>
    </div>

    <!-- Main card wrapper -->
    <div :class="hasHorizontalLayoutCard && 'horizontal-layout'">
      <div class="car-card__content">
        <img :src="car?.img" alt="car" />
        <div class="car-card__content-overlay"></div>
      </div>

      <div class="car-card__info">
        <div class="car-card__info-item">
          <Icon name="ph:gas-pump-fill" color="#90A3BF" size="24" />
          <h6>{{ car?.gasolineLiter }}L</h6>
        </div>
        <div class="car-card__info-item">
          <Icon
            name="icon-park-outline:steering-wheel"
            color="#90A3BF"
            size="24"
          />
          <h6>{{ car?.kindOfTransition }}</h6>
        </div>
        <div class="car-card__info-item">
          <Icon name="ph:users-fill" color="#90A3BF" size="24" />
          <h6>{{ car?.people }} People</h6>
        </div>
      </div>
    </div>

    <div class="car-card__footer">
      <div class="flex flex-col">
        <div class="car-card__footer-price">
          <h6>${{ car?.pricePerDay }}.00/</h6>
          <span>&nbsp;day</span>
        </div>
        <span v-if="false" class="line-through">$80.00</span>
      </div>
      <nuxt-link :to="`cars/${car?.id}`" class="button-cta">
        Rent Now
      </nuxt-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.car-card {
  @apply bg-white p-6;
  border-radius: 10px;
  &__header {
    @apply flex justify-between items-start;
    h5 {
      @apply text-title-secondary font-bold;
      font-size: 1.25rem;
    }

    h6 {
      @apply text-title-muted font-bold;
      font-size: 0.875rem;
    }
  }

  &__content {
    @apply py-16 relative;
    img {
      @apply max-w-[232px] m-auto w-full;
    }

    &-overlay {
      @apply absolute bottom-16 w-full h-11;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 100%
      );
    }
  }

  &__info {
    @apply flex justify-between flex-wrap gap-1;

    &-item {
      @apply flex gap-1 text-secondary items-center;

      h6 {
        @apply font-medium;
        font-size: 0.875rem;
      }
    }
  }

  &__footer {
    @apply flex items-center justify-between mt-6 flex-wrap;

    &-price {
      @apply flex font-bold items-end;

      h6 {
        font-size: 1.25rem;
      }
    }

    span {
      @apply text-title-muted;
      font-size: 0.875rem;
    }

    a {
      border-radius: 0.25rem;
    }
  }
}

.horizontal-layout {
  @media screen and (max-width: 640px) {
    @apply flex flex-row gap-4 justify-between;

    div.car-card__content {
      @apply flex-1;
      img {
        @apply max-w-[200px];
      }
    }
    div.car-card__info {
      @apply flex-col justify-start gap-5 pt-2;
    }
  }
}

.favorite-icon {
  @apply size-4 md:size-6;
}
</style>
