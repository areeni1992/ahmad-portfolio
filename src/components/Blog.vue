<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const modules = [Pagination];
</script>

<template>
  <div class="head text-center py-20">
    <h2 class="text-5xl font-bold">Blog</h2>
    <p class="text-gray-500 my-10">
      There are many variations of passages of Lorem Ipsum available,<br />
      but the majority have suffered alteration.
    </p>
  </div>
  <div class="slider container mx-auto">
    <Swiper
      :slides-per-view="3"
      :space-between="30"
      :autoHeight="true"
      :breakpoints="{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }"
      :modules="modules"
      :pagination="{ el: '.swiper-pagination', clickable: true }"
    >
      <swiper-slide class="shadow hover:shadow-lg rounded overflow-hidden">
        <a
          class="card group rounded-2xl shadow hover:shadow hover:shadow-lg cursor-pointer transition-all delay-100 overflow-hidden"
        >
          <img
            src="/images/blog/1.png"
            class="w-full group-hover:scale-105 transition-all delay-100"
            alt=""
          />
          <div class="contnet p-5 space-y-7">
            <span class="text-gray-500 text-sm"
              >22 Oct, 2020 / 246 Comments</span
            >
            <p class="font-bold">
              Lorem ipsum dolor sit consea. Nulla purus arcu
            </p>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide class="shadow hover:shadow-lg rounded overflow-hidden">
        <a
          class="card group rounded-2xl shadow cursor-pointer transition-all delay-100 overflow-hidden"
        >
          <img
            src="/images/blog/1.png"
            class="w-full group-hover:scale-105 transition-all delay-100"
            alt=""
          />
          <div class="contnet p-5 space-y-7">
            <span class="text-gray-500 text-sm"
              >22 Oct, 2020 / 246 Comments</span
            >
            <p class="font-bold">
              Lorem ipsum dolor sit consea. Nulla purus arcu
            </p>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide class="shadow hover:shadow-lg rounded overflow-hidden">
        <a
          class="card group rounded-2xl shadow cursor-pointer transition-all delay-100 overflow-hidden"
        >
          <img
            src="/images/blog/2.png"
            class="w-full group-hover:scale-105 transition-all delay-100"
            alt=""
          />
          <div class="contnet p-5 space-y-7">
            <span class="text-gray-500 text-sm"
              >22 Oct, 2020 / 246 Comments</span
            >
            <p class="font-bold">
              Lorem ipsum dolor sit consea. Nulla purus arcu
            </p>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide class="shadow hover:shadow-lg rounded overflow-hidden">
        <a
          class="card group rounded-2xl shadow cursor-pointer transition-all delay-100 overflow-hidden"
        >
          <img
            src="/images/blog/3.png"
            class="w-full group-hover:scale-105 transition-all delay-100"
            alt=""
          />
          <div class="contnet p-5 space-y-7">
            <span class="text-gray-500 text-sm"
              >22 Oct, 2020 / 246 Comments</span
            >
            <p class="font-bold">
              Lorem ipsum dolor sit consea. Nulla purus arcu
            </p>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide class="shadow hover:shadow-lg rounded overflow-hidden">
        <a
          class="card group rounded-2xl shadow cursor-pointer transition-all delay-100 overflow-hidden"
        >
          <img
            src="/images/blog/4.png"
            class="w-full group-hover:scale-105 transition-all delay-100"
            alt=""
          />
          <div class="contnet p-5 space-y-7">
            <span class="text-gray-500 text-sm"
              >22 Oct, 2020 / 246 Comments</span
            >
            <p class="font-bold">
              Lorem ipsum dolor sit consea. Nulla purus arcu
            </p>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide class="shadow hover:shadow-lg rounded overflow-hidden">
        <a
          class="card group rounded-2xl shadow cursor-pointer transition-all delay-100 overflow-hidden"
        >
          <img
            src="/images/blog/1.png"
            class="w-full group-hover:scale-105 transition-all delay-100"
            alt=""
          />
          <div class="contnet p-5 space-y-7">
            <span class="text-gray-500 text-sm"
              >22 Oct, 2020 / 246 Comments</span
            >
            <p class="font-bold">
              Lorem ipsum dolor sit consea. Nulla purus arcu
            </p>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide class="shadow hover:shadow-lg rounded overflow-hidden">
        <a
          class="card group rounded-2xl shadow cursor-pointer transition-all delay-100 overflow-hidden"
        >
          <img
            src="/images/blog/3.png"
            class="w-full group-hover:scale-105 transition-all delay-100"
            alt=""
          />
          <div class="contnet p-5 space-y-7">
            <span class="text-gray-500 text-sm"
              >22 Oct, 2020 / 246 Comments</span
            >
            <p class="font-bold">
              Lorem ipsum dolor sit consea. Nulla purus arcu
            </p>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide class="shadow hover:shadow-lg rounded overflow-hidden">
        <a
          class="card group rounded-2xl shadow cursor-pointer transition-all delay-100 overflow-hidden"
        >
          <img
            src="/images/blog/4.png"
            class="w-full group-hover:scale-105 transition-all delay-100"
            alt=""
          />
          <div class="contnet p-5 space-y-7">
            <span class="text-gray-500 text-sm"
              >22 Oct, 2020 / 246 Comments</span
            >
            <p class="font-bold">
              Lorem ipsum dolor sit consea. Nulla purus arcu
            </p>
          </div>
        </a>
      </swiper-slide>
      <div class="swiper-pagination absolute right-4 bottom-4"></div>
    </Swiper>
  </div>
</template>
