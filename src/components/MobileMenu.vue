<script setup>
import { ref } from "vue";

const show = ref(false);

// toggle mobile menu
const triggerMenu = () => {
  show.value = !show.value;
};
</script>

<template>
  <div class="mobile_menu container sm:block md:hidden py-5 bg-gray-700 w-full">
    <div class="flex justify-between mx-5">
      <span>
        <a href="/">
          <img src="/icons/logo.png" alt="Logo" class="h-10" />
        </a>
      </span>
      <span
        @click="triggerMenu"
        class="border border-gray-600 rounded w-10 flex justify-around items-center"
      >
        <img
          src="/icons/mobil_menu.png"
          alt="mobile_menu"
          class="w-fit h-fit bg-gray-500"
        />
      </span>
    </div>
    <header
      class="flex-col transition-all duration-300 ease-in-out"
      :class="
        show
          ? 'max-h-[500px] opacity-100 pointer-events-auto'
          : 'max-h-0 opacity-0 pointer-events-none'
      "
    >
      <nav class="text-left flex flex-col space-y-3 py-3">
        <a href="/" class="px-4 py-2 text-white">Home</a>
        <a href="/about" class="px-4 py-2 text-white"
          >About</a
        >
        <a href="/services" class="px-4 py-2 text-white"
          >Services</a
        >
        <a href="/pricing" class="px-4 py-2 text-white"
          >Pricing</a
        >
        <a href="/blog" class="px-4 py-2 text-white">Blog</a>
      </nav>
      <button
        class="border border-gray-400 ml-4 px-5 py-2 rounded-sm cursor-pointer mx-auto text-white"
      >
        CONTACT
      </button>
    </header>
  </div>
</template>
