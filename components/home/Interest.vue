<template>
  <div class="p-5 mb-16 text-primary-50">
    <div class="text-center mb-10">
      <h1 class="text-primary-200 text-4xl font-semibold">
        {{ t("interest.title") }}
      </h1>
    </div>
    <div class="w-full flex justify-center items-stretch gap-8">
      <div class="w-full max-w-72 min-h-32 bg-primary-700 rounded-lg text-lg">
        <div class="p-4">
          <h2
            class="text-primary-200 text-2xl font-semibold flex items-center gap-2.5"
          >
            <Icon name="material-symbols:camera" size="32" />
            <p>
              {{ t("interest.photography") }}
            </p>
          </h2>
          <ul class="flex flex-col gap-2.5 mt-4 list-disc list-inside">
            <li
              v-for="line in tm('interest.photographyDetail')"
              class="text-primary-50"
            >
              {{ rt(line) }}
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full max-w-72 min-h-32 bg-primary-700 rounded-lg text-lg">
        <div class="p-4">
          <h2
            class="text-primary-200 text-2xl font-semibold flex items-center gap-2.5"
          >
            <Icon name="ion:paw" size="32" />
            <p>
              {{ t("interest.travel") }}
            </p>
          </h2>
          <ul class="flex flex-col gap-2.5 mt-4 list-disc list-inside">
            <li
              v-for="line in tm('interest.travelDetail')"
              class="text-primary-50"
            >
              {{ rt(line) }}
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full max-w-72 min-h-32 bg-primary-700 rounded-lg text-lg">
        <div class="p-4">
          <h2
            class="text-primary-200 text-2xl font-semibold flex items-center gap-2.5"
          >
            <Icon name="solar:gamepad-minimalistic-bold" size="32" />
            <p>
              {{ t("interest.gaming") }}
            </p>
          </h2>
          <ul class="flex flex-col gap-2.5 mt-4 list-disc list-inside">
            <li
              v-for="line in tm('interest.gamingDetail')"
              class="text-primary-50"
            >
              {{ rt(line) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n();
</script>
