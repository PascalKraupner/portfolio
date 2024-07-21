<script lang="ts" setup>
import Heading from "../../components/Headings/Heading.vue";
import Section from "../../components/Section.vue";
import ProjectCard from "./ProjectCard/ProjectCard.vue";
const projects = [
    {
        id: 1,
        name: "Enchantertain",
        livePreviewLink: "https://www.enchantertain.com/",
        githubRepositoryLink:
            "https://github.com/PascalKraupner/enchantertain",
        cardImage: {
            src: "/img/projects/enchantertain_preview.jpg",
            alt: "enchantertain preview",
        },
        shortDescription: `In diesem Projekt habe ich eine kleine Laravel-Anwendung entwickelt, mit der nach Filmen, Serien oder Spielen gesucht werden kann. Dank künstlicher Intelligenz werden passende Vorschläge für ähnliche Inhalte generiert. Die App ermöglicht es, Inhalte zu entdecken, die genau den Vorlieben und Interessen des Nutzers entsprechen. Mein Ziel ist es, das Projekt kontinuierlich zu verbessern und um neue Features zu erweitern.`,
        technologyStack: ["laravel", "tailwind", "livewire", "alpine"],
    },
];
</script>

<template>
    <Section id="projects">
        <Heading :level="2" :size="1" text="Projekte" :cursor="true" />

        <!-- set count var and try different values for number of cards and try mobile view, cards should
        looks always good -->

        <div class="grid grid-auto-fit-xl gap-8 my-16 place-items-center">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>

        <!--
    TODO: Implement dedicated projects detail page
            <div class="flex justify-center mb-20">
                <PrimaryButton text="Alle Projekte" href="/projects" icon="diagram-project" />
            </div>
    -->
    </Section>
</template>
