<script setup lang="ts">
const { id } = defineProps<{
  id: string;
}>();
</script>

<template>
  <section class="max-w-screen-2xl m-auto" :id="id">
    <slot />
  </section>
</template>
