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
              class="w-6 h-6 text-pink-600 -rotate-6 animate-waving-hand"
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
    <!--  Animation tutorial: https://www.youtube.com/watch?v=lPJVi797Uy0 -->
    <!-- make sections easy: section*8>(h1>{Nice Curves})+p>lorem -->
    <div class="bg-gray-500 overflow-x-hidden">
      <section class="bg-blue-500">
        <h1>Nice Curves</h1>
        <p>
          Nisi eius iste delectus quia veritatis unde! Aut enim quod recusandae
          deserunt, eos commodi corporis rem. Tempora totam laboriosam, modi
          facere atque, fugiat autem deleniti consequuntur nesciunt cumque
          necessitatibus laborum.
        </p>
        <div class="curve"></div>
      </section>
      <section class="bubble">
        <h1>Nice Curves</h1>
        <p>
          Nisi eius iste delectus quia veritatis unde! Aut enim quod recusandae
          deserunt, eos commodi corporis rem. Tempora totam laboriosam, modi
          facere atque, fugiat autem deleniti consequuntur nesciunt cumque
          necessitatibus laborum.
        </p>
      </section>
      <section class="bg-gray-700">
        <h1>Nice Curves</h1>
        <p>
          Nisi eius iste delectus quia veritatis unde! Aut enim quod recusandae
          deserunt, eos commodi corporis rem. Tempora totam laboriosam, modi
          facere atque, fugiat autem deleniti consequuntur nesciunt cumque
          necessitatibus laborum.
        </p>
      </section>
      <section class="pink">
        <h1>Nice Curves</h1>
        <p>
          Nisi eius iste delectus quia veritatis unde! Aut enim quod recusandae
          deserunt, eos commodi corporis rem. Tempora totam laboriosam, modi
          facere atque, fugiat autem deleniti consequuntur nesciunt cumque
          necessitatibus laborum.
        </p>
        <div class="wave">
          <!-- generate shapes: https://www.shapedivider.app/ -->
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section class="pink blob">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(459.7837687046301 310.67639926515557)">
            <path
              id="blob1"
              d="M144 -147.5C172.5 -115.5 171.7 -57.7 175 3.3C178.3 64.3 185.7 128.7 157.2 153.7C128.7 178.7 64.3 164.4 -2.5 166.8C-69.3 169.3 -138.6 188.6 -170.3 163.6C-201.9 138.6 -196 69.3 -196.7 -0.7C-197.4 -70.7 -204.8 -141.4 -173.1 -173.4C-141.4 -205.4 -70.7 -198.7 -6.5 -192.2C57.7 -185.7 115.5 -179.5 144 -147.5"
              fill="#BB004B"
            ></path>
          </g>
          <g
            transform="translate(454.4644894623732 282.7206490703849)"
            style="visibility: hidden"
          >
            <path
              id="blob2"
              d="M150.7 -162.5C196 -141.6 233.9 -94.8 229.9 -50.4C225.9 -6.1 180.1 35.7 146.5 75.9C113 116.2 91.7 154.9 55 181.4C18.2 208 -34 222.4 -67.4 202.6C-100.8 182.9 -115.3 128.9 -150.2 80.8C-185.1 32.6 -240.3 -9.7 -239.1 -46.6C-237.9 -83.5 -180.3 -114.9 -131.1 -135.1C-81.8 -155.2 -40.9 -164.1 5.9 -171.1C52.7 -178.1 105.4 -183.3 150.7 -162.5"
              fill="#BB004B"
            ></path>
          </g>
        </svg>
      </section>
      <!-- generate shapes: https://app.haikei.app/ -->
      <div class="spacer layer1"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import KUTE from "kute.js";

export default defineComponent({
  setup() {
    onMounted(() => {
      const tween = KUTE.fromTo(
        '#blob1',
        { path: '#blob1' },
        { path: '#blob2' },
        { repeat: 999, duration: 3000, yoyo: true }
      );
      tween.start();
    });
  },
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
section {
  @apply relative flex flex-col items-center p-0;
  min-height: 400px;
  padding: 100px 20vw;
}
.curve {
  @apply absolute w-full;
  height: 250px;
  bottom: 0;
}
.curve::before {
  @apply bg-gray-500;
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 50%;
  width: 55%;
  height: 100%;
  transform: translate(85%, 60%);
}
.curve::after {
  @apply bg-blue-500;
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 50%;
  width: 55%;
  height: 100%;
  transform: translate(-4%, 40%);
}
.bubble::after {
  @apply bg-gray-700;
  content: "";
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  position: absolute;
  bottom: 0;
  height: 85%;
  width: 100%;
}
.wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 177px;
}

.wave .shape-fill {
  @apply fill-gray-700;
}

.pink {
  background-color: #ff0066;
  padding-bottom: 0;
}

.blob {
   padding: 0;
   margin-top: -50px;
}

.spacer {
  aspect-ratio: 900/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.layer1 {
  background-image: url("./assets/svg/layer1.svg");
}
</style>
