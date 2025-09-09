<script setup>
import MobileMenu from './MobileMenu.vue';
</script>
<template>
    <div class="desktop hidden lg:block">
        <div class="navbar container mx-auto py-5 flex justify-between items-center">
          <div class="logo">
            <a href="#" class="flex items-center space-x-2">
              <img src="/icons/logo.png" width="90px" alt="logo" />
              <span class="text-lg font-bold tracking-widest">AHMAD</span>
            </a>
          </div>
          <div class="nav">
            <ul class="flex justify-center align-middle items-center space-x-10">
              <li>
                <a
                  class="font-medium hover:text-indigo-600 transition-colors"
                  href="#"
                  >Home</a
                >
              </li>
              <li>
                <a class="font-medium hover:text-indigo-600 transition-colors" href=""
                  >About</a
                >
              </li>
              <li>
                <a class="font-medium hover:text-indigo-600 transition-colors" href=""
                  >Process</a
                >
              </li>
              <li>
                <a class="font-medium hover:text-indigo-600 transition-colors" href=""
                  >Porfolio</a
                >
              </li>
              <li>
                <a class="font-medium hover:text-indigo-600 transition-colors" href=""
                  >Blog</a
                >
              </li>
              <li>
                <a class="font-medium hover:text-indigo-600 transition-colors" href=""
                  >Services</a
                >
              </li>
              <li>
                <button class="px-10 py-4 rounded text-white bg-purple-500">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
    </div>
  <MobileMenu class="block lg:hidden" />
</template>
