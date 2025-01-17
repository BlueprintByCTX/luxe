<script setup lang="ts">
import FooterBar from '@/components/FooterBar.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const isModalVisible = ref(false)
let op: ReturnType<typeof setTimeout>

let scrollUp = false
let prevScrollY = 0

const handleScroll = () => {
  const scrollY = window.scrollY

  if (scrollY <= 5 && scrollUp) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  scrollUp = scrollY < prevScrollY
  prevScrollY = scrollY

  if (scrollY <= 5) {
    scrollUp = false
  }

  const opacity = Math.min(scrollY / 1000, 1)

  const fadewobg = document.querySelectorAll<HTMLElement>('.fadewobg')
  fadewobg.forEach((el) => {
    el.style.opacity = opacity.toString()
  })

  const fadewbg = document.querySelectorAll<HTMLElement>('.fadewbg')
  fadewbg.forEach((el) => {
    el.style.opacity = (1 - opacity).toString()
  })

  document.getElementById('bg')!.style.transform = `translateY(${-scrollY / 2}px)`
}

onMounted(() => {
  op = setTimeout(() => {
    document.getElementById('bg')!.classList.remove('opacity-0')
  }, 100)
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  clearTimeout(op)
  window.removeEventListener('scroll', handleScroll)
})

function showModal() {
  isModalVisible.value = true
}

function closeModal() {
  isModalVisible.value = false
}
</script>
<template>
  <header class="flex flex-col absolute z-20 w-full h-dvh text-white">
    <nav class="flex flex-col justify-center items-center">
      <img src="../assets/imgs/logos/cluxe-white-logo.png" class="h-32 md:h-40 mt-16 mb-7" />
      <div
        class="flex flex-col md:flex-row items-center font-normal font-recoleta uppercase space-x-4 tracking-wider"
      >
        <div
          class="flex flex-row items-center font-normal font-recoleta uppercase text-xxs md:text-xs space-x-4 tracking-wider"
        >
          <RouterLink class="link" to="#volumes">Volumes</RouterLink><span>•</span>
          <RouterLink class="link" to="#volumes">Articles</RouterLink><span>•</span>
          <RouterLink class="link" to="#jobs">Jobs</RouterLink>
          <span class="hidden md:block">•</span>
        </div>
        <div
          class="flex flex-row items-center font-normal font-recoleta uppercase text-xxs md:text-xs space-x-4 tracking-wider"
        >
          <RouterLink class="link" to="#contact">Contact</RouterLink>
          <span>•</span>
          <RouterLink class="link" to="#about">About Us</RouterLink>
        </div>
      </div>
    </nav>

    <div class="flex flex-col grow justify-end items-center fadewbg">
      <img src="../assets/imgs/worldinanisland.png" class="h-4 md:h-6 mb-3 px-14 object-contain" />
      <h1 class="font-cormorant text-sm md:text-base">Not just a <i>Magazine.</i></h1>
    </div>

    <div class="flex flex-row justify-between items-end p-5 fadewbg">
      <p class="font-recoleta text-xs md:text-sm font-[50]">
        Image Courtesy of
        <a
          href="https://www.resplendentceylon.com/resort/kayaam-house/"
          class="italic hover:underline"
          >Kayam House</a
        >
      </p>
      <a
        href="https://ceylontravelex.com"
        target="_blank"
        class="relative hover:opacity-60 transition-opacity"
      >
        <h1 class="absolute -top-1 left-0.5 text-xs font-recoleta">by</h1>
        <img src="../assets/imgs/logos/ctx-white-logo.png" class="h-8 md:h-10" />
      </a>
    </div>
  </header>

  <img
    id="bg"
    src="../../src/assets/imgs/home-bg.jpg"
    class="fixed transition-opacity duration-1000 w-full h-screen object-cover -z-10"
  />
  <div class="fadewobg fixed w-full h-screen bg-[#dee5e5] -z-10" style="opacity: 0"></div>

  <img src="../assets/imgs/lotus.png" style="opacity: 0" class="h-11 fixed z-30 m-7 fadewobg" />

  <main
    id="volumes"
    class="flex flex-col w-full justify-center items-center absolute top-[100dvh] bg-[#dee5e5]"
  >
    <div
      class="max-w-5xl m-12 xs:m-16 sm:m-20 md:m-24 lg:m-28 xl:m-32 flex flex-col items-center ml:flex-row gap-12 lg:gap-16 xl:gap-32"
    >
      <div class="flex flex-col items-center gap-2">
        <img src="../assets/imgs/vol1-cp.png" class="w-72 md:w-80 lg:w-96 xl:w-96 object-contain" />

        <button
          v-on:click="showModal"
          class="text-sm hover:bg-[#5E807F] px-1.5 py-1 hover:text-white uppercase tracking-wider font-recoleta"
        >
          click to view
        </button>
      </div>

      <div class="flex flex-col items-center gap-5 lg:gap-8 xl:gap-12">
        <img src="../assets/imgs/en.png" class="w-56 lg:w-72 xl:w-96 object-contain" />

        <p class="text-justify text-xxs lg:text-xs text-[#5E807F] max-w-lg">
          As the New Year pulls us towards a new season, we hope to make the best out of our
          experiences that last as long as our desires for travelling. We always believe that the
          world is our treasure, and we search for the elite adventures and rejuvenating getaways;
          discovering the hidden gems that are patiently waiting to be explored. Let us take you
          around the Island's paragon, because we believe that no one has unraveled the utmost
          potential of our diverse isle. Our close knit team has dedicated our research and
          designing to illustrate the most awaited escapade that everyone deserves, and explore the
          depths of its opulence.
        </p>

        <div class="flex gap-5 lg:flex-row items-center">
          <img src="../assets/imgs/shen.png" class="w-28 xs:w-36 lg:w-44 object-contain" />

          <div class="w-full border border-[#5E807F]">
            <h1 class="text-white bg-[#5E807F] p-2 flex flex-col gap-0.5 lg:gap-1">
              <b class="text-xs lg:text-sm uppercase tracking-wide">Sheneli Wickremasinghe</b>
              <span class="text-xxs lg:text-xs italic">Editor</span>
            </h1>
            <p class="text-[#5E807F] text-xxs lg:text-xs p-2">
              Creative by nature, she is our team's main content writer and editor.
            </p>
          </div>
        </div>
      </div>
    </div>

    <p
      class="font-recoleta text-lg text-[#5E807F] mb-12 xs:mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32"
    >
      Emerald Isle Of The Indian Ocean: Vol. 01
    </p>

    <div class="flex flex-col items-center w-full pattern">
      <div
        id="jobs"
        class="flex flex-col items-center p-12 xs:p-16 sm:p-20 md:p-24 lg:p-28 xl:p-32 gap-4 md:gap-6 z-30 border-b-2 border-[#23705b1f]"
      >
        <h1 class="text-[#5E807F] text-sm md:text-base">Jobs & Careers</h1>
        <h1 class="font-recoleta text-3xl md:text-5xl text-center">
          No Vacancies yet, but stay tuned!
        </h1>
        <h2 class="font-cormorant text-ls md:text-xl text-center">
          If you're interested in joining our incredible small team, please don't hesitate to
          <a href="#contact"><i>contact us.</i></a>
        </h2>
      </div>
    </div>

    <FooterBar />
  </main>

  <transition name="modal-fade">
    <div
      v-if="isModalVisible"
      id="modal"
      class="fixed top-0 w-full h-full bg-[#dee5e5] bg-opacity-90 z-30 flex flex-col"
    >
      <button
        @click="closeModal"
        class="absolute m-3 p-3 bg-[rgb(94,128,127)] text-white z-40 opacity-65 hover:opacity-100"
      >
        Close
      </button>
      <iframe
        allowfullscreen
        class="fp-iframe w-full h-full"
        src="https://heyzine.com/flip-book/d4850e6824.html"
      ></iframe>
    </div>
  </transition>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 1s;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
</style>

<style>
.link {
  @apply hover:bg-[#c2dbdb27] hover:border-white border-transparent border px-1.5 py-1 transition-colors duration-300;
}

.pattern {
  background-image: url('../assets/imgs/back-pattern.png');
  background-repeat: repeat;
  background-size: 500px 1500px;
  background-color: rgba(255, 255, 255, 0.95);
  background-blend-mode: lighten;
}
</style>
