<script lang="ts" setup>
import BaseButton from "./BaseButton.vue";
defineProps<{
  text: string;
  href: string;
  icon?: string;
}>();
</script>
<template>
  <BaseButton :text="text" :href="href" :icon="icon" type="primary" />
</template>
