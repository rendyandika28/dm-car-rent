<script setup lang="ts"></script>
<template>
  <div class="bg-primary-gray min-h-screen">
    <app-header />
    <main>
      <slot />
    </main>
    <app-footer />
  </div>
</template>
<style lang="scss" scoped></style>