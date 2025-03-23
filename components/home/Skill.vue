<template>
  <div class="p-5 mb-16 rounded-lg text-primary-50">
    <div class="text-center">
      <h1 class="text-primary-200 text-4xl font-semibold mb-10">
        {{ t("skill.title") }}
      </h1>
    </div>
    <div
      class="flex flex-col justify-center items-center gap-8 text-primary-200"
    >
      <div class="p-5 w-full rounded-lg bg-primary-800 max-w-[1080px]">
        <div class="flex justify-center items-center gap-1 mb-5">
          <Icon v-for="i in 5" name="ion:paw" size="28" />
        </div>
        <div
          class="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-5"
        >
          <div
            v-for="top in skills.top"
            :key="top.name"
            class="flex justify-start items-center gap-3 font-bold text-2xl p-4 rounded-lg bg-primary-600"
          >
            <Icon :name="top.icon" size="24" />
            <p>{{ top.name }}</p>
          </div>
        </div>
      </div>
      <div class="p-5 w-full rounded-lg bg-primary-800 max-w-[1080px]">
        <div class="flex justify-center items-center gap-1 mb-5">
          <Icon v-for="i in 4" name="ion:paw" size="28" />
        </div>
        <div
          class="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-5"
        >
          <div
            v-for="top in skills.middle"
            :key="top.name"
            class="flex justify-start items-center gap-3 font-bold text-2xl p-4 rounded-lg bg-primary-600"
          >
            <Icon :name="top.icon" size="24" />
            <p>{{ top.name }}</p>
          </div>
        </div>
      </div>
      <div class="p-5 w-full rounded-lg bg-primary-800 max-w-[1080px]">
        <div class="flex justify-center items-center gap-1 mb-5">
          <Icon v-for="i in 3" name="ion:paw" size="28" />
        </div>
        <div
          class="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-5"
        >
          <div
            v-for="top in skills.bottom"
            :key="top.name"
            class="flex justify-start items-center gap-3 font-bold text-2xl p-4 rounded-lg bg-primary-600"
          >
            <Icon :name="top.icon" size="24" />
            <p>{{ top.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const skills = {
  top: [
    {
      name: "Vue",
      icon: "logos:vue",
    },
    {
      name: "Nuxt",
      icon: "logos:nuxt-icon",
    },
    {
      name: "Tailwind CSS",
      icon: "logos:tailwindcss-icon",
    },
    {
      name: "Element Plus",
      icon: "logos:element",
    },
  ],
  middle: [
    {
      name: "TypeScript",
      icon: "logos:typescript-icon",
    },
    {
      name: "Webpack",
      icon: "logos:webpack",
    },
    {
      name: "Python",
      icon: "logos:python",
    },
    {
      name: "Linux",
      icon: "logos:linux-tux",
    },
  ],
  bottom: [
    {
      name: "Docker",
      icon: "logos:docker-icon",
    },
    {
      name: "Vitest",
      icon: "logos:vitest",
    },
    {
      name: "Vite",
      icon: "logos:vitejs",
    },
    {
      name: "React",
      icon: "logos:react",
    },
  ],
};
</script>
