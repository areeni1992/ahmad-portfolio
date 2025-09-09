<!-- components/ScrollFade.vue -->
<template>
  <div
    ref="el"
    :class="[
      'transition-all duration-700 ease-in-out',
      hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from "vue";
import { useElementVisibility } from "@vueuse/core";

const el = ref(null);
const isVisible = useElementVisibility(el);
const isScrollingDown = ref(false);

let lastScrollY = window.scrollY;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isScrollingDown.value = currentScrollY > lastScrollY;
  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const hasAnimated = ref(false);

watchEffect(() => {
  if (isVisible.value && isScrollingDown.value && !hasAnimated.value) {
    hasAnimated.value = true;
  }
});
</script>
