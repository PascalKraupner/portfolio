<script lang="ts" setup>
import BaseButton from "./BaseButton.vue";
defineProps<{
  text: string;
  propClass?: string;
  href?: string;
  icon?: string;
}>();
</script>
<template>
  <BaseButton :text="text" :href="href" :icon="icon" :class="propClass" type="primary" />
</template>
