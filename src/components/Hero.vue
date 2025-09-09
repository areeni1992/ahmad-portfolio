<template>
  <div class="hero-section container mx-auto">
    <div class="flex justify-between align-middle items-center">
      <div class="content space-y-10 h-140 py-20">
        <h1 class="text-7xl font-bold">Hello, I'm AHMAD</h1>
        <p class="text-gray-600">
          I'm a Freelance UI/UX Designer and Developer based in London,
          England.<br />
          I strives to build immersive and beautiful web applications through<br />
          carefully crafted code and user-centric design.
        </p>
        <button
          class="py-4 px-10 rounded border bg-purple-500 text-white hover:bg-white hover:border-purple-500 hover:border hover:text-black transition-all cursor-pointer"
        >
          Say Hello!
        </button>
        <div class="counter container mx-auto mt-15 flex rounded overflow-hidden">
            <div class="box bg-purple-100 px-10 py-3 justify-center">
                <div class="number text-3xl text-center font-bold">15 Y.</div>
                <div class="text text-gray-500">Experience</div>
            </div>
            <div class="box bg-purple-100 px-10 py-3 mx-2 justify-center">
                <div class="number text-3xl text-center font-bold">250+</div>
                <div class="text text-gray-500">Project Completed</div>
            </div>
            <div class="box bg-purple-100 px-10 py-3 justify-center">
                <div class="number text-3xl text-center font-bold">58</div>
                <div class="text text-gray-500">Happy Client</div>
            </div>
        </div>
    </div>
      <div class="image flex justify-center items-center align-middle">
        <div class="box rounded-2xl bg-white m-10 mr-0 w-130 h-140 shadow">
          <img
            src="/ahmad_personal.png"
            class="w-fit h-full mx-auto"
            alt="ahmad_personal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
