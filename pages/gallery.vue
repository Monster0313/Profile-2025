<template>
  <div class="mt-10 mb-16">
    <div class="flex flex-col justify-center items-center">
      <p class="text-center text-4xl font-semibold text-primary-200">
        {{ t("gallery.title") }}
      </p>
      <div class="max-w-[1080px] text-center text-primary-50 mt-8 text-lg">
        <p>照片均由我拍攝，如需使用請聯繫我，請勿自行加工、二次調色。</p>
        <p>
          若您為照片中的角色可以自行取用，取用範圍僅限於個人用途，不可用於商業用途。
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        <NuxtLink
          v-for="(image, index) in gallery"
          :key="index"
          :to="image.imgUrl"
          class="relative h-fit"
        >
          <img :src="image.imgUrl" class="w-full" />
          <div
            class="absolute top-0 left-0 w-full h-full font-semibold cursor-pointer bg-primary-800/80 group flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-primary-200 text-2xl mb-2">
              {{ image.title }}
            </p>
            <p class="text-primary-50 text-xl">{{ image.name }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getGallery } from "~/assets/js/gallery";

const { t } = useI18n();

interface GalleryItem {
  imgUrl: string;
  title: string;
  name: string;
}

const gallery = ref<GalleryItem[]>([]);
const loadGallery = () => {
  gallery.value = getGallery();
};

loadGallery();
</script>
