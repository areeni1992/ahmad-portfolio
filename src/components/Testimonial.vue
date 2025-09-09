<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

const modules = [Pagination, Autoplay];
</script>
<template>
  <div class="container mx-auto py-10">
    <div class="head text-center space-y-4">
      <h2 class="text-4xl font-bold">Testimonial</h2>
      <p class="text-gray-400">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.
      </p>
      <Swiper
        :slides-per-view="1"
        :autoplay="true"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }"
        :modules="modules"
        :pagination="{ el: '.swiper-pagination', clickable: true }"
      >
        <swiper-slide class="space-y-5">
          <p class="w-200 mx-auto font-semibold">
            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
            felis turpis, nec semper odio convallis at. Curabitur imperdiet
            semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.
            Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
            Morbi ornare elit at libero suscipit porta.”
          </p>
          <div class="person font-bold">Esther Howard</div>
          <span>Managing Director, ABC company</span>
        </swiper-slide>
        <swiper-slide class="space-y-5">
          <p class="w-200 mx-auto font-semibold">
            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
            felis turpis, nec semper odio convallis at. Curabitur imperdiet
            semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.
            Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
            Morbi ornare elit at libero suscipit porta.”
          </p>
          <div class="person font-bold">Esther Howard</div>
          <span>Managing Director, ABC company</span>
        </swiper-slide>
        <swiper-slide class="space-y-5">
          <p class="w-200 mx-auto font-semibold">
            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
            felis turpis, nec semper odio convallis at. Curabitur imperdiet
            semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.
            Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
            Morbi ornare elit at libero suscipit porta.”
          </p>
          <div class="person font-bold">Esther Howard</div>
          <span>Managing Director, ABC company</span>
        </swiper-slide>
      </Swiper>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<style>
:root {
  --swiper-pagination-color: #333;
  --swiper-pagination-bullet-size: 10px;
  --swiper-pagination-bullet-inactive-color: #aaa;
  --swiper-pagination-bullet-width: 10px;
  --swiper-pagination-bullet-height: 10px;
  --swiper-pagination-bullet-active-padding: 4px 15px;
}
.swiper-pagination-bullet {
  transition: all;
  transition-duration: 200ms;
}
.swiper-pagination-bullet-active {
  padding: var(--swiper-pagination-bullet-active-padding);
  border-radius: 10px;
  transition: all;
  transition-duration: 200ms;
}
</style>
