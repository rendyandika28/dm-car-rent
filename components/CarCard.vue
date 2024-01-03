<script setup lang="ts"></script>
<template>
  <div class="car-card">
    <div class="car-card__header">
      <div class="car-card__header-title">
        <h5>Koenigsegg</h5>
        <h6>Sport</h6>
      </div>
      <button class="car-card__header-favorite">
        <Icon name="ant-design:heart-filled" color="red" size="24" />
      </button>
    </div>

    <div class="car-card__content">
      <img src="/car.png" alt="car" />
    </div>

    <div class="car-card__info">
      <div class="car-card__info-item">
        <Icon name="ph:gas-pump-fill" color="#90A3BF" size="24" />
        <h6>90L</h6>
      </div>
      <div class="car-card__info-item">
        <Icon
          name="icon-park-outline:steering-wheel"
          color="#90A3BF"
          size="24"
        />
        <h6>Manual</h6>
      </div>
      <div class="car-card__info-item">
        <Icon name="ph:users-fill" color="#90A3BF" size="24" />
        <h6>2 People</h6>
      </div>
    </div>

    <div class="car-card__footer">
      <div class="car-card__footer-price">
        <h6>$99.00/</h6>
        <span>&nbsp;day</span>
      </div>
      <button class="button-cta">Rent Now</button>
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
    @apply py-16;
    img {
      @apply max-w-[232px] m-auto w-full;
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
    @apply flex items-center justify-between mt-6;

    &-price {
      @apply flex font-bold items-end;

      h6 {
        font-size: 1.25rem;
      }

      span {
        @apply text-title-muted;
        font-size: 0.875rem;
      }
    }

    button {
      border-radius: 0.25rem;
    }
  }
}
</style>