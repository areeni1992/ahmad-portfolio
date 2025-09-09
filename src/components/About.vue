<template>
  <div
    class="about container mx-auto p-20 grid grid-cols-2 gap-5 rounded-2xl overflow-hidden shadow-2xl bg-white"
  >
    <div
      class="image relative w-[424px] h-[504px] bg-gray-100 rounded-2xl"
    >
      <img src="/ahmad_personal.png" class="size-full" alt="" />
      <ul class="social rounded flex justify-between items-center absolute bottom-[-25px] left-10 right-10 z-10 bg-white shadow-lg p-5">
        <li class="p-4 rounded border border-white hover:border-purple-400 transition-all duration-300"><a href="#"><img src="/icons/facebook.png" alt=""></a></li>
        <li class="p-4 rounded border border-white hover:border-purple-400 transition-all duration-300"><a href="#"><img src="/icons/basket.png" alt=""></a></li>
        <li class="p-4 rounded border border-white hover:border-purple-400 transition-all duration-300"><a href="#"><img src="/icons/instagram.png" alt=""></a></li>
        <li class="p-4 rounded border border-white hover:border-purple-400 transition-all duration-300"><a href="#"><img src="/icons/linkedin.png" alt=""></a></li>
        <li class="p-4 rounded border border-white hover:border-purple-400 transition-all duration-300"><a href="#"><img src="/icons/behance.png" alt=""></a></li>
      </ul>
    </div>
    <div class="content space-y-7 p-15">
      <h2 class="text-5xl font-bold">
        I am Professional User Experience Designer
      </h2>
      <p class="text-gray-600 text-md">
        I design and develop services for customers specializing<br />
        creating stylish, modern websites, web services and online<br />
        stores. My passion is to design digital user experiences. <br /><br />I
        design and develop services for customers specializing <br />creating
        stylish, modern websites, web services.
      </p>
      <div class="btns space-x-5">
        <button
          class="py-4 px-10 rounded border bg-purple-500 text-white hover:bg-white hover:border-purple-500 hover:border hover:text-black transition-all cursor-pointer"
        >
          My Project
        </button>
        <button class="py-4 px-10 border border-white rounded hover:border-purple-500 hover:text-purple-500 cursor-pointer">Download CV</button>
      </div>
    </div>
  </div>
</template>
