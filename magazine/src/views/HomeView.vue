<script setup lang="ts">
import BannerBar from '@/components/BannerBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import FooterBarOld from '@/components/FooterBarOld.vue'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { modal } from '@/lib/state'

const observer = ref<MutationObserver>()
const scrollY = ref(0)

const handleScroll = () => {
  const opacity = Math.min(scrollY.value / 1000, 1)

  const fadewobg = document.querySelectorAll<HTMLElement>('.fadewobg')
  fadewobg.forEach((el) => {
    el.style.opacity = opacity.toString()
  })

  const fadewbg = document.querySelectorAll<HTMLElement>('.fadewbg')
  fadewbg.forEach((el) => {
    el.style.opacity = (1 - opacity).toString()
  })

  document.getElementById('bg')!.style.transform = `translateY(${-scrollY.value / 2}px)`
}

watch(scrollY, handleScroll)

onMounted(() => {
  handleScroll()

  const element = document.querySelector('#smoothie > div:nth-child(1) > div')! as HTMLElement
  let lastTransform = element.style.transform
  observer.value = new MutationObserver(() => {
    const currentTransform = element.style.transform.split(',')[1].trim()
    if (currentTransform.includes('e')) return
    if (currentTransform !== lastTransform) {
      const match = parseInt(currentTransform.match(/-?\d+/)![0])
      scrollY.value = match
      lastTransform = currentTransform
    }
  })

  observer.value.observe(element, { attributes: true, attributeFilter: ['style'] })
})

onUnmounted(() => {
  if (observer.value) observer.value.disconnect()
})

function showModal() {
  console.log('showModal')
  modal.isVisible = true
}
</script>
<template>
  <header class="flex flex-col absolute z-20 w-full h-dvh text-white">
    <BannerBar />
    <nav class="flex flex-col justify-center items-center">
      <img
        alt="Ceylon LUXE"
        src="../assets/imgs/logos/cluxe-white-logo.png"
        class="h-32 md:h-40 mt-16 mb-7"
      />
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
      <img
        alt="The World In An Island"
        src="../assets/imgs/worldinanisland.png"
        class="h-4 md:h-6 mb-3 px-14 object-contain"
      />
      <h1 class="font-cormorant text-sm md:text-base">Not just a <i>Magazine.</i></h1>
    </div>

    <div class="flex flex-row justify-between items-end p-5 fadewbg">
      <p class="font-recoleta text-xs md:text-sm font-[50]">
        Image Courtesy of
        <a
          href="https://www.resplendentceylon.com/resort/kayaam-house/"
          class="italic hover:underline"
          >Resplendent Ceylon - Kayaam House</a
        >
      </p>
      <a
        href="https://ceylontravelex.com"
        target="_blank"
        class="relative hover:opacity-60 transition-opacity ml-20"
      >
        <h1 class="absolute -top-1 left-0.5 text-xs font-recoleta">by</h1>
        <img
          alt="Ceylon Travelex"
          src="../assets/imgs/logos/ctx-white-logo.png"
          class="h-8 md:h-10"
        />
      </a>
    </div>
  </header>

  <img
    id="bg"
    alt="Image Courtesy of Resplendent Ceylon - Kayaam House"
    src="../../src/assets/imgs/home-bg.jpg"
    class="fixed transition-opacity duration-1000 w-full h-screen object-cover -z-10"
  />
  <div class="fadewobg fixed w-full h-screen bg-[#dee5e5] -z-10" style="opacity: 0"></div>

  <img
    alt="Ceylon LUXE Lotus"
    src="../assets/imgs/logos/lotus.png"
    style="opacity: 0"
    class="h-11 fixed z-30 m-7 fadewobg"
  />

  <main
    id="volumes"
    class="flex flex-col w-full justify-center items-center absolute top-[100dvh] bg-[#dee5e5]"
  >
    <div
      class="max-w-5xl m-12 xs:m-16 sm:m-20 md:m-24 lg:m-28 xl:m-32 flex flex-col items-center ml:flex-row gap-12 lg:gap-16 xl:gap-32"
    >
      <div class="flex flex-col items-center gap-2">
        <img
          alt="Emerald Isle Of The Indian Ocean: Vol. 01"
          v-on:click="showModal"
          src="../assets/imgs/vol1-cp.png"
          class="w-72 md:w-80 lg:w-96 xl:w-96 object-contain cursor-pointer"
        />

        <button
          v-on:click="showModal"
          class="text-sm hover:bg-[#5E807F] px-1.5 py-1 hover:text-white uppercase tracking-wider font-recoleta"
        >
          click to view
        </button>
      </div>

      <div class="flex flex-col items-center gap-5 lg:gap-8 xl:gap-12">
        <img
          alt="Editor's Note"
          src="../assets/imgs/en.png"
          class="w-56 lg:w-72 xl:w-96 object-contain"
        />

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
          <img
            alt="Editor: Sheneli Wickremasinghe"
            src="../assets/imgs/shen.png"
            class="w-28 xs:w-36 lg:w-44 object-contain"
          />

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
          Already filled, but stay tuned!
        </h1>
        <h2 class="font-cormorant text-lg md:text-xl text-center max-w-xl">
          If you're passionate about what we do and would like to be a part of our team, we'd love
          to hear from you! Please don't hesitate to
          <a href="#contact"><i>reach out</i> to us for more information. </a>
        </h2>
      </div>
    </div>

    <!-- <FooterBar /> -->
    <FooterBarOld />
  </main>
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
