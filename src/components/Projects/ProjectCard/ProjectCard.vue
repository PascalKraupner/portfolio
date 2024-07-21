<script lang="ts" setup>
import Paragraph from "../../Paragraph.vue";
import ProjectCardTechnology from "./ProjectTechnology.vue";
const { project } = defineProps({
  project: {
    type: Object as () => Project,
    required: true,
  },
});
</script>
<template>
  <article
    class="flex flex-col max-w-3xl bg-secondary shadow-lg shadow-default border border-default rounded-lg hover:scale-105 hover:shadow-primary-color hover:shadow transition-transform ease-in-out duration-500"
  >
    <div>
      <a target="_blank" :href="project.livePreviewLink"
        ><img
          class="w-full max-w-full rounded-t-lg"
          :src="project.cardImage.src"
          :alt="project.cardImage.alt"
        />
      </a>
      <div class="px-4 border-t border-default">
        <div class="flex justify-between items-center my-5">
          <h3
            class="text-xl font-semibold5 hover:text-primary-color transition duration-500"
          >
            <a :href="project.livePreviewLink">{{ project.name }}</a>
          </h3>
          <div>
            <a
              target="_blank"
              :href="project.livePreviewLink"
              class="hover:text-primary-color transition duration-500 mx-2"
            >
              <i
                class="ml-1 mr-2 text-base fa-solid fa-arrow-up-right-from-square"
              ></i>
              <span>Live-Preview</span>
            </a>
            |
            <a
              target="_blank"
              :href="project.githubRepositoryLink"
              class="hover:text-primary-color transition duration-500 mx-2"
              ><i class="ml-1 mr-2 text-base fa-brands fa-github"></i>
              <span>Quellcode</span>
            </a>
          </div>
        </div>

        <div class="flex flex-wrap">
          <span
            v-for="(technology, index) in project.technologyStack"
            :key="index"
          >
            <ProjectCardTechnology :technology="technology" />
          </span>

          <Paragraph class="my-5 leading-6">
            <a
              class="hover:text-secondary-color transition duration-500"
              :href="project.livePreviewLink"
            >
              {{ project.shortDescription }}
            </a>
          </Paragraph>
        </div>
      </div>
    </div>
  </article>
</template>
