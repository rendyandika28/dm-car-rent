<script setup lang="ts">
import type { StyleValue } from "vue";

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  path: {
    type: String as PropType<"circle" | "arrow">,
    default: "circle",
  },
  btnColor: {
    type: String,
    default: "#3563E9",
  },
  noCta: {
    type: Boolean,
    default: false,
  },
});

const backgroundPath = computed<StyleValue>(() => {
  const baseColor = props.color;

  if (props.path === "arrow") {
    return {
      backgroundColor: props.color,
      backgroundImage: `linear-gradient(135deg, ${props.color} 25%, transparent 5%), linear-gradient(225deg, ${props.color} 25%, transparent 5%), linear-gradient(45deg,${props.color} 25%, transparent 5%), linear-gradient(315deg, ${props.color} 25%, #ffffff11 25%)`,
      backgroundPosition: "0 40px, 0 0, 0 40px, 0 0",
      backgroundSize: "80px 80px",
      backgroundRepeat: "repeat",
    };
  }

  return {
    background: baseColor,
    backgroundImage: `repeating-radial-gradient(circle farthest-corner at 30% 80%,transparent -20px 5%,#FFFFFF11 5% 10%)`,
  };
});
</script>
<template>
  <div class="banner" :style="backgroundPath">
    <div class="banner__wrapper">
      <h3 class="banner__title">The Best Platform for Car Rental</h3>
      <h4 class="banner__desc">
        Ease of doing a car rental safely and reliably. Of course at a low
        price.
      </h4>
      <button
        v-if="!noCta"
        class="button-cta"
        :style="{ backgroundColor: props.btnColor }"
      >
        Rental Car
      </button>
    </div>
    <div class="banner__image">
      <img src="/car.png" alt="car" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  @apply p-4 pb-1 rounded-[0.625rem] w-full text-white min-h-[14.5rem] flex flex-col justify-between;
  @apply md:p-6 md:pb-2 md:min-h-fit;

  &__wrapper {
    @apply max-w-[15.5rem] flex flex-col gap-2;
    @apply md:gap-4 md:max-w-[17.75rem];
  }

  &__title {
    @apply font-semibold;
    font-size: 1rem;
    letter-spacing: -3%;
    @media screen and (min-width: 768px) {
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  &__desc {
    @apply font-medium;
    font-size: 0.75rem;
    letter-spacing: -2%;
    @media screen and (min-width: 768px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
  &__image {
    @apply flex justify-center;
    img {
      @apply max-w-[12.25rem] w-full;
      @apply md:max-w-[25.375rem];
    }
  }

  & button {
    @apply w-fit mt-2;
  }
}
</style>