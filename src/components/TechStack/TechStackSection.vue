<script lang="ts" setup>
import Section from "../Section.vue";
import { computed } from "vue";
import { technologies } from "../../data/technologies.js";
const activeTechnologies = computed(() => {
  return technologies.filter((t) => t.active);
});
</script>
<template>
  <Section class="mt-20" id="tech-stack">
    <div class="flex flex-row flex-wrap justify-center gap-4 mb-20">
      <div
        v-for="technology in activeTechnologies"
        :key="technology.key"
        class="flex flex-col w-28 h-28 justify-center items-center bg-secondary shadow-lg shadow-default border border-default rounded-lg cursor-default hover:scale-110 hover:shadow-primary-color hover:shadow transition-transform ease-in-out duration-500"
      >
        <div class="flex flex-col items-center">
          <img
            class="h-8 w-auto"
            :src="technology.icon.src"
            :alt="technology.icon.alt"
          />
          <h6 class="text-sm mt-4">{{ technology.name }}</h6>
        </div>
      </div>
    </div>
  </Section>
</template>
