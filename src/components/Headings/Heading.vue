<script setup lang="ts">
import { computed } from "vue";
import BlinkingCursor from "../BlinkingCursor.vue";

const { level, size, text, cursor } = defineProps({
  level: Number,
  size: Number,
  text: String,
  cursor: {
    type: Boolean,
    default: false,
  },
});

const computedSize = computed(() => ({
  "text-4xl md:text-5xl": size === 1,
  "text-3xl md:text-4xl": size === 2,
  "text-2xl md:text-3xl": size === 3,
  "text-xl md:text-2xl": size === 4,
  "text-lg md:text-xl": size === 5,
  "text-base md:text-lg": size === 6,
}));
</script>

<template>
  <h1 v-if="level === 1" class="text-center mt-20 mb-5" :class="computedSize">
    {{ text }} <BlinkingCursor v-if="cursor" />
  </h1>
  <h2 v-if="level === 2" class="text-center mt-20 mb-5" :class="computedSize">
    {{ text }} <BlinkingCursor v-if="cursor" />
  </h2>
  <h3 v-if="level === 3" class="text-center mt-20 mb-5" :class="computedSize">
    {{ text }} <BlinkingCursor v-if="cursor" />
  </h3>
  <h4 v-if="level === 4" class="text-center mt-20 mb-5" :class="computedSize">
    {{ text }} <BlinkingCursor v-if="cursor" />
  </h4>
  <h5 v-if="level === 5" class="text-center mt-20 mb-5" :class="computedSize">
    {{ text }} <BlinkingCursor v-if="cursor" />
  </h5>
  <h6 v-if="level === 6" class="text-center mt-20 mb-5" :class="computedSize">
    {{ text }} <BlinkingCursor v-if="cursor" />
  </h6>
</template>
