<script setup lang="ts">
const config = useRuntimeConfig();
const siteTitle = config.public.siteTitle;

useHead({
  titleTemplate: (title) => (title ? `${title} - ${siteTitle}` : siteTitle),
});
</script>
<template>
  <NuxtLoadingIndicator color="#3563E9" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
