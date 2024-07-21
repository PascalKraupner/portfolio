<script lang="ts" setup>
import SecondaryButton from "../Buttons/SecondaryButton.vue";
import Section from "../Section.vue";
import Heading from "../Headings/Heading.vue";
import { ref } from "vue";
import { technologies } from "../../data/technologies.js";
technologies.sort((a, b) => a.order - b.order);
let activeTechnologies = technologies.filter((t) => t.active);

const filteredTechnologies = ref([]);
const showMoreButtonContainer = ref(null);
const numberOfTechnologiesToShow = 12;
filteredTechnologies.value = activeTechnologies.slice(
  0,
  numberOfTechnologiesToShow
);
const showMoreTechnologies = (amount: number) => {
  filteredTechnologies.value = activeTechnologies.slice(0, amount);
  showMoreButtonContainer.value.style.display = "none";
};
</script>
<template>
  <Section class="my-20" id="tech-stack">
    <Heading :level=2 :size=3 text="Tech Stack" :cursor=true />
    <div
      class="flex flex-row flex-wrap justify-center gap-4 mb-20 transition-all"
    >
      <div
        v-for="technology in filteredTechnologies"
        :key="technology.key"
        class="flex flex-col w-28 h-28 justify-center items-center bg-secondary shadow-lg shadow-default border border-default rounded-lg cursor-default hover:scale-110 hover:shadow-primary-color hover:shadow transition-transform ease-in-out duration-500"
      >
        <div class="flex flex-col items-center">
          <img
            class="h-10 w-auto"
            :src="technology.icon.src"
            :alt="technology.icon.alt"
          />
          <h6 class="text-sm mt-4">{{ technology.name }}</h6>
        </div>
      </div>

      <div class="flex justify-center w-full" ref="showMoreButtonContainer">
        <SecondaryButton
          @click.prevent="showMoreTechnologies(24)"
          href="#"
          text="Mehr anzeigen"
          icon="arrow-right"
        />
      </div>
    </div>
  </Section>
</template>
