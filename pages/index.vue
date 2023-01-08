<template>
  <div>
    <h2>Home</h2>
    <!--Use tailwind animations youtube: https://www.youtube.com/watch?v=z9sHOXheE_M -->
    <div class="w-4/5 mx-auto text-center py-5">
      <!--Use tailwind transition on only color with a duration of 500ms -->
      <a
        href=""
        class="bg-blue-500 text-white py-4 px-8 rounded text-xl hover:bg-blue-300 transition-color duration-500"
      >
        Transition
      </a>

      <!--Use tailwind transition with delay of 300ms -->
      <a
        href=""
        class="ml-5 bg-red-500 text-white py-4 px-8 rounded text-xl hover:bg-red-300 transition-color duration-500 delay-300"
      >
        Delay
      </a>
    </div>

    <div class="flex w-4/5 mx-auto text-center py-5">
      <!--Use tailwind animation on images (bounce,pulse,spin,ping) -->
      <img
        class="mx-5 animate-pulse max-w-xs"
        src="https://cdn.pixabay.com/photo/2023/01/02/13/03/architect-7692052_960_720.jpg"
        alt="random image from pixabay"
      />
      <!--Use tailwind transformation on images (scale,rotate,skew) -->
      <img
        class="mx-5 max-w-xs transform transition-all hover:scale-125"
        src="https://cdn.pixabay.com/photo/2023/01/02/13/03/architect-7692052_960_720.jpg"
        alt="random image from pixabay"
      />
      <!--Use tailwind translating on images (translate) -->
      <img
        class="mx-5 max-w-xs transform transition-all hover:translate-y-4"
        src="https://cdn.pixabay.com/photo/2023/01/02/13/03/architect-7692052_960_720.jpg"
        alt="random image from pixabay"
      />
    </div>

    <div class="grid gap-8 items-start justify-center bg-black px-5 py-10">
      <!--Use tailwind Glowing Background Gradient Effects with Tailwind CSS -->
      <!--Use a relative container to have a absolute background -->
      <div class="relative group">
        <!--A blurry background with inset -->
        <div
          class="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt-bg"
        ></div>
        <button
          class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
        >
          <span class="flex items-center space-x-5">
            <!--Use Hero svg https://heroicons.com/ -->
            <!--Use rotate and color -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-pink-600 -rotate-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
            <span class="pr-6 text-gray-100">Labs release 2023.01</span>
          </span>

          <span
            class="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200"
            >See whats new &rarr;</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
