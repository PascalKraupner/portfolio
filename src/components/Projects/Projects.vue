<script lang="ts" setup>
import Heading from "../../components/Headings/Heading.vue";
import Section from "../../components/Section.vue";
import PrimaryButton from "../../components/Buttons/PrimaryButton.vue";
import ProjectCard from "./ProjectCard/ProjectCard.vue";
const projects = [
  {
    id: 1,
    name: "Find Similar Games",
    livePreviewLink: "https://find-similar-games.pascalkraupner.dev/",
    githubRepositoryLink:
      "https://github.com/PascalKraupner/find-similar-games",
    cardImage: {
      src: "/img/projects/find_similar_games.jpg",
      alt: "find similar games project screenshot",
    },
    shortDescription: `In diesem Projekt habe ich eine kleine Laravel-Anwendung entwickelt, die die Suche nach Videospielen ermöglicht und da­r­auf­hin ähnliche Spiele anzeigt. Dabei habe ich Livewire und Alpine.js genutzt, um mich mit diesen Technologien vertraut zu machen.`,
    technologyStack: ["laravel", "tailwind", "livewire", "alpine"],
  },
];
</script>

<template>
  <Section id="projects">
    <Heading :level="2" :size="1" text="Projects" :cursor="true" />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-16 place-items-center"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
    <!--
    TODO: Implement dedicated projects detail page
            <div class="flex justify-center mb-20">
                <PrimaryButton text="Alle Projekte" href="/projects" icon="diagram-project" />
            </div>
    -->
  </Section>
</template>
