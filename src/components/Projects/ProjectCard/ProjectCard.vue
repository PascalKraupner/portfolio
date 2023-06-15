<script lang="ts" setup>
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
    class="flex flex-col max-w-lg bg-secondary shadow-lg shadow-default border border-default rounded-lg hover:scale-110 hover:shadow-primary-color hover:shadow transition-transform ease-in-out duration-500"
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
              class="hover:text-primary-color transition duration-500"
            >
              <i
                class="ml-1 mr-4 text-lg fa-solid fa-arrow-up-right-from-square"
              ></i>
            </a>
            <a
              target="_blank"
              :href="project.githubRepositoryLink"
              class="hover:text-primary-color transition duration-500"
              ><i class="ml-1 text-lg fa-brands fa-github"></i>
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

          <p class="my-5 leading-6">
            <a
              class="hover:text-secondary-color transition duration-500"
              :href="project.livePreviewLink"
            >
              {{ project.shortDescription }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
