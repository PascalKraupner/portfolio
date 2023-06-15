<script lang="ts" setup>
import { technologies } from "../../../data/technologies.js";
const props = defineProps({
  technology: {
    type: String,
    required: true,
  },
});

const technology: any = technologies.find(
  (technology: any) => technology.key === props.technology
);
</script>
<template>
  <div
    v-if="technology"
    class="flex gap-1 items-center text-blue-700 bg-blue-100 mr-1 mb-2 text-xs px-2 py-1 rounded max-w-max font-semibold tracking-wider uppercase"
  >
    <img class="w-3" :src="technology.icon.src" :alt="technology.icon.alt" />
    <span>{{ technology.name }}</span>
  </div>
</template>
