<template>
  <div>
    <h2>Home</h2>
    <!--Use tailwind animations youtube: https://www.youtube.com/watch?v=z9sHOXheE_M -->
    <div class="w-4/5 mx-auto text-center py-12">
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

    <div class="flex w-4/5 mx-auto text-center py-24">
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
