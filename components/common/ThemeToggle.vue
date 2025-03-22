<script setup>
const colorMode = useColorMode();

const theme = ref(colorMode.preference);
const handleThemeChange = () => {
  if (theme.value === "dark") {
    colorMode.preference = "light";
    theme.value = "light";
  } else {
    colorMode.preference = "dark";
    theme.value = "dark";
  }
};
onMounted(() => {
  theme.value = "dark";
});
</script>

<template>
  <button class="p-2 cursor-pointer" @click="handleThemeChange">
    {{ theme === "dark" ? "🌙" : "☀️" }}
  </button>
</template>
