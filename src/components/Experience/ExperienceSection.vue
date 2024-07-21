<script lang="ts" setup>
import Section from "../../components/Section.vue";
import Heading from "../Headings/Heading.vue";
const experiences = [
  {
    time: "11/2015 - 12/2016",
    position: "Minijob im Bereich Webentwicklung",
    company: "Werbeagentur Wolf & Biere ",
    description: `Bei der Werbeagentur Wolf & Biere habe ich als Webentwickler an der Entwicklung verschiedener Web-Oberflächen gearbeitet.
        Diese Web-Oberflächen dienten der Verwaltung von Informationen für Apps, die von der Werbeagentur entwickelt wurden.`,
  },
  {
    time: "01/2017 - 11/2019",
    position: "Webentwickler",
    company: "Freiberuflich",
    description: `Unter anderem unterstützte ich als freiberuflicher Webentwickler die
        Werbeagentur Wolf & Biere bei verschiedenen Projekten. Daneben habe ich auch kleinere Websites
        entwickelt und verschiedene Projekte umgesetzt. Ein Beispiel dafür ist die Erstellung eines
        maßgeschneiderten Vokabeltrainers für Lateinon und dessen Integration in eine bestehende
        WordPress-Umgebung. Zusätzlich leistete ich Unterstützung für die Mainwebsolutions bei verschiedenen Projekten.`,
  },
  {
    time: "07/2017 - 10/2019",
    position: "Studentische Hilfskraft",
    company: "Ruhr-Universität Bochum",
    description: `Zu meinem Tätigkeitsbereich gehörte unter anderem die Betreuung der EDV am
        Institut für Philosophie II. Durch meine Erfahrung im Bereich der Webentwicklung konnte ich dem
        Lehrstuhl bei der eigenständigen Entwicklung verschiedener Websites unterstützen. Ein Beispiel dafür
        ist die Erstellung eines maßgeschneiderten WordPress-Themes sowie die Integration und Anpassung
        spezifischer Plugins. Darüber hinaus habe ich für Prof. Dr. Albert Newen eine maßgeschneiderte
        Anwendung entwickelt, um seine Publikationen zu verwalten und übersichtlich nach verschiedenen
        Schwerpunkten auf einer speziellen Website zu präsentieren.`,
  },
  {
    time: "07/2019 - 05/2021",
    position: "Werksstudent",
    company: "Mainwebsolutions",
    description: `Als Werkstudent bei der Mainwebsolutions hatte ich die Gelegenheit, das
        Unternehmen, das ich bereits in meiner freiberuflichen Tätigkeit häufig unterstützt hatte, noch
        intensiver kennenzulernen. Ich konnte mich tiefer in die spannenden und anspruchsvollen Projekte
        einbringen und das Team der Mainwebsolutions besser kennenlernen.`,
  },
  {
    time: "Seit 05/2021",
    position: "Full-Stack Webentwickler",
    company: "Mainwebsolutions",
    description: `Dank meiner Erfahrungen und Leistungen als Werkstudent bei der Mainwebsolutions
        konnte ich schließlich als Full-Stack Webentwickler in dem Unternehmen fest angestellt werden.
        Ich konnte meine Fähigkeiten und Kenntnisse weiter ausbauen, indem ich an vielen herausfordernden Projekten mitwirkte.
        Die Arbeit als Full-Stack Webentwickler bei Mainwebsolutions ermöglicht es mir, mich in einem dynamischen Team weiterzuentwickeln und meine Fähigkeiten
        in den Bereichen Webentwicklung kontinuierlich zu verbessern, sowie neue Gebiete wie das Projektmanagement und DevOps kennenzulernen.
        Darüber hinaus konnte ich durch den regelmäßigen Kundenkontakt meine Fähigkeiten weiter ausbauen und ein tieferes Verständnis
        für die Anforderungen der Kunden entwickeln, um bestmögliche maßgeschneiderte Lösungen für sie zu entwickeln.`,
  },
];

experiences.reverse();
</script>

<template>
  <Section class="my-20" id="experience">
    <Heading :level="2" :size="2" text="Erfahrung" :cursor="true" />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16 place-items-start">
      <div class="flex gap-6 h-full" v-for="(experience, index) in experiences" :key="index">
        <div class="flex">
          <div class="z-10 bg-primary-color-darker h-10 w-10 rounded-full flex items-center justify-center">
            <i class="fa-solid fa-briefcase text-xl"></i>
          </div>
          <div class="bg-gray-800 relative right-5 w-[1px]"></div>
        </div>
        <div>
          <span class="text-sm bg-secondary px-2 py-1 text-primary-color rounded-xl inline-block mb-1 mt-1">{{
            experience.time }}</span>
          <div class="mb-2 mt-2">
            <h2 class="text-lg font-bold">{{ experience.position }}</h2>
            <p class="text-lg text-secondary-color">{{ experience.company }}</p>
          </div>
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </div>
  </Section>
</template>
