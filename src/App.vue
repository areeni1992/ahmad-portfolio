<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import WorkProcess from "./components/WorkProcess.vue";
import Portfolio from "./components/Portfolio.vue";
import CallToAction from "./components/CallToAction.vue";
import WhatIDo from "./components/WhatIDo.vue";
import HappyCleints from "./components/HappyCleints.vue";
import Testimonial from "./components/Testimonial.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import ScrollFade from "./components/ScrollFade.vue";
</script>

<template>
  <div class="header relative h-[1500px]">
    <Header />
      <Hero />
    <ScrollFade class="absolute bottom-[-200px] left-0 right-0">
      <About class="rounded-2xl" />
    </ScrollFade>
  </div>

  <div class="bg-gray-100 p-30">
    <ScrollFade>
      <WorkProcess />
    </ScrollFade>
  </div>

  <ScrollFade>
    <Portfolio />
  </ScrollFade>

  <div class="bg-gray-800">
    <ScrollFade>
      <CallToAction />
    </ScrollFade>
  </div>

  <div class="bg-gray-200">
    <ScrollFade>
      <WhatIDo />
    </ScrollFade>
  </div>

  <ScrollFade>
    <HappyCleints />
  </ScrollFade>
  <div class="relative h-[1200px]">
    <ScrollFade>
      <Testimonial />
      <Contact class="absolute bottom-[-940px] left-0 right-0"/>
    </ScrollFade>
  </div>
  <footer class="bg-gray-700"><Footer /></footer>
</template>
<style scoped>
.header {
  background-image: linear-gradient(
    255deg,
    rgba(235, 203, 248, 0.6) 0.5%,
    #ffffff
  );
}
</style>
