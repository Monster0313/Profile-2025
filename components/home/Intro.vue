<template>
  <div class="p-5 pb-80 rounded-lg text-primary-50">
    <div class="text-center">
      <h1 class="text-primary-200 text-4xl pb-4 font-semibold">
        {{ t("about.title") }}
      </h1>
    </div>
    <div class="mt-5 text-lg flex justify-center items-center gap-16">
      <div class="relative shrink-0">
        <div class="flip-profile w-72 h-72">
          <div class="flip-profile-inner relative w-full h-full">
            <div class="flip-profile-front w-full h-full">
              <img
                src="/assets/image/Profile.jpg"
                width="288"
                height="288"
                class="rounded-full w-full h-full object-cover"
              />
            </div>
            <div class="flip-profile-back w-full h-full">
              <img
                src="/assets/image/ProfileBack.png"
                width="288"
                height="288"
                class="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div class="relative">
          <img
            src="/assets/image/arrow.svg"
            class="absolute left-20 scale-y-[-1] rotate-[30deg] translate-y-7"
          />
          <div
            class="absolute left-60 top-8 min-w-[560px] bg-primary-700 p-4 rounded-lg text-primary-50 flex flex-col gap-2.5"
          >
            <p v-for="line in tm('about.intro')">
              {{ rt(line) }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start gap-3">
        <p class="text-2xl font-bold">{{ t("about.name") }}</p>
        <p>Frontend Developer / Freelance Photographer</p>
        <NuxtLink
          to="https://github.com/monster0313"
          class="flex items-center gap-2"
        >
          <Icon name="mdi:github" size="32" />
          <p class="text-lg">@Monster0313</p>
        </NuxtLink>
        <NuxtLink
          to="https://bento.me/monster-gallery"
          class="flex items-center gap-2"
        >
          <Icon name="material-symbols:camera" size="32" />
          <p class="text-lg">@Monster-Gallery</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n();
</script>

<style>
.flip-profile {
  perspective: 1000px;
}

.flip-profile-inner {
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-profile:hover .flip-profile-inner {
  transform: rotateY(180deg);
}

.flip-profile-front,
.flip-profile-back {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
}

.flip-profile-back {
  transform: rotateY(180deg);
}
</style>
