<script setup lang="ts"></script>
<template>
  <div class="detail-car">
    <div class="detail-car__infos">
      <div class="detail-car__infos-images">
        <div class="showing">
          <img src="/car.png" alt="car" />
        </div>
        <div class="detail-car__infos-images-list">
          <button class="selected">
            <img src="/car.png" alt="car" />
          </button>
          <button>
            <img src="/View 2.png" alt="car" />
          </button>
          <button>
            <img src="/View 3.png" alt="car" />
          </button>
        </div>
      </div>
      <div class="detail-car__infos-specs">
        <div>
          <h2>Nissan GT - R</h2>
          <div class="detail-car__infos-specs-rating">
            <div class="flex gap-1">
              <Icon
                name="bi:star-fill"
                color="#FBAD39"
                class="size-4 md:size-4"
              />
              <Icon
                name="bi:star-fill"
                color="#FBAD39"
                class="size-4 md:size-4"
              />
              <Icon
                name="bi:star-fill"
                color="#FBAD39"
                class="size-4 md:size-4"
              />
              <Icon
                name="bi:star-fill"
                color="#FBAD39"
                class="size-4 md:size-4"
              />
              <Icon name="bi:star" color="#90A3BF" class="size-4 md:size-4" />
            </div>
            <span>440+ Reviewer</span>
          </div>
        </div>

        <p>
          NISMO has become the embodiment of Nissan's outstanding performance,
          inspired by the most unforgiving proving ground, the "race track".
        </p>

        <div
          class="grid grid-cols-2 xl:grid-cols-3 gap-x-11 gap-y-4 mb-0 md:mb-16"
        >
          <div class="detail-car__feat">
            <h5>Type Car</h5>
            <h5 class="font-semibold">Sport</h5>
          </div>
          <div class="detail-car__feat">
            <h5>Capacity</h5>
            <h5 class="font-semibold">2 Person</h5>
          </div>
          <div class="detail-car__feat">
            <h5>Gasoline</h5>
            <h5 class="font-semibold">70L</h5>
          </div>
          <div class="detail-car__feat">
            <h5>Steering</h5>
            <h5 class="font-semibold">Manual</h5>
          </div>
        </div>

        <div class="detail-car__infos-footer">
          <div class="flex flex-col">
            <div class="detail-car__infos-footer-price">
              <h6>$99.00/</h6>
              <span>&nbsp;days</span>
            </div>
            <span v-if="false" class="line-through">$80.00</span>
          </div>
          <button class="button-cta text-base px-10">Rent Now</button>
        </div>
      </div>
    </div>
    <div class="detail-car__recommendation">
      <sections-list-car
        title="Recommendation Car"
        has-horizontal-layout-card
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.detail-car {
  @apply px-6 py-8;
  @apply md:px-16;

  &__infos {
    @apply flex gap-8 flex-col lg:flex-row;
    &-images {
      @apply w-full;
      @apply lg:w-2/5;

      img {
        @apply w-full;
      }

      & .showing {
        @apply h-[22.5rem] bg-white rounded-xl grid place-items-center mb-6;
      }

      &-list {
        @apply grid grid-cols-3 gap-5 md:gap-6 place-items-center;

        button {
          @apply bg-transparent outline-none rounded-xl size-full;
        }
        & .selected {
          @apply border-2 border-blue-700;
          img {
            @apply scale-90;
          }
        }
      }
    }
    &-specs {
      @apply bg-white rounded-xl w-full p-6 text-secondary gap-8 flex flex-col;
      @apply lg:w-3/5;

      h2 {
        @apply font-bold text-xl md:text-3xl;
      }

      p {
        @apply text-xs md:text-xl leading-6 md:leading-10;
        letter-spacing: -0.02em;
      }

      &-rating {
        @apply flex items-center gap-2 mt-2;

        span {
          @apply font-medium text-xs md:text-sm;
        }
      }
    }

    &-footer {
      @apply flex items-center justify-between flex-wrap;

      &-price {
        @apply flex font-bold items-end;

        h6 {
          font-size: 2rem;
        }
      }

      span {
        @apply text-title-muted;
        font-size: 1rem;
      }

      button {
        border-radius: 0.25rem;
      }
    }
  }

  &__recommendation {
    @apply mt-16;
  }

  &__feat {
    @apply flex justify-between text-xs md:text-xl text-secondary leading-4 tracking-tight;
  }
}
</style>