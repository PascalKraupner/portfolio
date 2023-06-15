<script lang="ts" setup>
defineProps<{
  text: string;
  href: string;
  icon?: string;
  type: string;
}>();
</script>

<template>
  <a
    :href="href"
    class="inline-flex items-center justify-center py-2 px-4 rounded-md transition-colors duration-500"
    :class="[
      type == 'primary' ? 'bg-primary-color hover:bg-primary-color-darker' : '',
      type == 'secondary'
        ? 'bg-secondary-color hover:bg-secondary-color-darker'
        : '',
    ]"
  >
    <i v-if="icon" class="fas mr-2" :class="[`fa-${icon}`]"></i>
    <span>{{ text }}</span>
  </a>
</template>
