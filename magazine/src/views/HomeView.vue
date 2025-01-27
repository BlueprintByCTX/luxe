<script setup lang="ts">
import BannerBar from '@/components/BannerBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import FooterBarOld from '@/components/FooterBarOld.vue'
import { Smoothie } from 'vue-smoothie'
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
  <Smoothie :weight="0.11" id="smoothie" class="h-full">
    <main class="absolute z-20 flex h-dvh w-full flex-col text-white">
      <BannerBar />
      <nav class="flex flex-col items-center justify-center">
        <!-- <img
          alt="Ceylon LUXE"
          src="../assets/imgs/logos/cluxe-white-logo.png"
          class="mb-7 mt-16 h-32 md:h-40"
        /> -->
        <img alt="Ceylon LUXE" src="../assets/imgs/logos/Lux Aniii.gif" class="mb-7 mt-16 h-32 md:h-40" />
        <div
          class="flex flex-col items-center space-x-4 font-recoleta font-normal uppercase tracking-wider md:flex-row">
          <div
            class="flex flex-row items-center space-x-4 font-recoleta text-xxs font-normal uppercase tracking-wider md:text-xs">
            <RouterLink class="link" to="/volumes">Volumes</RouterLink><span>•</span>
            <RouterLink class="link" to="/articles">Articles</RouterLink><span>•</span>
            <RouterLink class="link" to="/writers">Writers</RouterLink>
            <span class="hidden md:block">•</span>
          </div>
          <div
            class="flex flex-row items-center space-x-4 font-recoleta text-xxs font-normal uppercase tracking-wider md:text-xs">
            <RouterLink class="link" to="/awards">Awards</RouterLink>
            <span>•</span>
            <RouterLink class="link" to="/podcasts">Podcasts</RouterLink>
          </div>
        </div>
      </nav>

      <div class="fadewbg flex grow flex-col items-center justify-end">
        <img alt="The World In An Island" src="../assets/imgs/worldinanisland.png"
          class="mb-2 h-6 object-contain px-14 md:h-9" />
        <h1 class="font-cormorant text-sm md:text-base">Not just a <i>Magazine.</i></h1>
      </div>

      <div class="fadewbg flex flex-row items-end justify-between p-5">
        <p class="font-recoleta text-xs font-[50] md:text-sm">
          Image Courtesy of
          <a href="https://www.resplendentceylon.com/resort/kayaam-house/" class="italic hover:underline">Resplendent
            Ceylon - Kayaam House</a>
        </p>
        <a href="https://ceylontravelex.com" target="_blank"
          class="relative ml-20 transition-opacity duration-300 hover:opacity-60">
          <h1 class="absolute -top-1 left-0.5 font-recoleta text-xs">by</h1>
          <img alt="Ceylon Travelex" src="../assets/imgs/logos/ctx-white-logo.png" class="h-8 md:h-10" />
        </a>
      </div>
    </main>

    <img id="bg" alt="Image Courtesy of Resplendent Ceylon - Kayaam House" src="../../src/assets/imgs/home-bg.jpg"
      class="fixed -z-10 h-screen w-full object-cover transition-opacity duration-1000" />
    <div class="fadewobg fixed -z-10 h-screen w-full bg-[#dee5e5]" style="opacity: 0"></div>

    <img alt="Ceylon LUXE Lotus" src="../assets/imgs/logos/lotus.png" style="opacity: 0"
      class="fadewobg fixed z-30 m-7 h-11" />

    <main id="volumes" class="absolute top-[100dvh] flex w-full flex-col items-center justify-center bg-[#dee5e5]">
      <div
        class="m-12 flex max-w-5xl flex-col items-center gap-12 xs:m-16 sm:m-20 md:m-24 ml:flex-row lg:m-28 lg:gap-16 xl:m-32 xl:gap-32">
        <div class="flex flex-col items-center gap-2">
          <img alt="Emerald Isle Of The Indian Ocean: Vol. 01" v-on:click="showModal" src="../assets/imgs/vol1-cp.png"
            class="w-72 cursor-pointer object-contain md:w-80 lg:w-96 xl:w-96" />

          <button v-on:click="showModal"
            class="px-1.5 py-1 font-recoleta text-sm uppercase tracking-wider hover:bg-[#5E807F] hover:text-white">
            click to view
          </button>
        </div>

        <div class="flex flex-col items-center gap-5 lg:gap-8 xl:gap-12">
          <img alt="Editor's Note" src="../assets/imgs/en.png" class="w-56 object-contain lg:w-72 xl:w-96" />

          <p class="max-w-lg text-justify text-xxs text-[#5E807F] lg:text-xs">
            As the New Year pulls us towards a new season, we hope to make the best out of our
            experiences that last as long as our desires for travelling. We always believe that the
            world is our treasure, and we search for the elite adventures and rejuvenating getaways;
            discovering the hidden gems that are patiently waiting to be explored. Let us take you
            around the Island's paragon, because we believe that no one has unraveled the utmost
            potential of our diverse isle. Our close knit team has dedicated our research and
            designing to illustrate the most awaited escapade that everyone deserves, and explore
            the depths of its opulence.
          </p>

          <div class="flex items-center gap-5 lg:flex-row">
            <img alt="Editor: Sheneli Wickremasinghe" src="../assets/imgs/shen.png"
              class="w-28 object-contain xs:w-36 lg:w-44" />

            <div class="w-full border border-[#5E807F]">
              <h1 class="flex flex-col gap-0.5 bg-[#5E807F] p-2 text-white lg:gap-1">
                <b class="text-xs uppercase tracking-wide lg:text-sm">Sheneli Wickremasinghe</b>
                <span class="text-xxs italic lg:text-xs">Editor</span>
              </h1>
              <p class="p-2 text-xxs text-[#5E807F] lg:text-xs">
                Creative by nature, she is our team's main content writer and editor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p class="mb-12 font-recoleta text-lg text-[#5E807F] xs:mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32">
        Emerald Isle Of The Indian Ocean: Vol. 01
      </p>

      <div class="pattern flex w-full flex-col items-center">
        <div id="jobs"
          class="z-30 flex flex-col items-center gap-4 border-b-2 border-[#23705b1f] p-12 xs:p-16 sm:p-20 md:gap-6 md:p-24 lg:p-28 xl:p-32">
          <h1 class="text-sm text-[#5E807F] md:text-base">Jobs & Careers</h1>
          <h1 class="text-center font-recoleta text-3xl md:text-5xl">
            Already filled, but stay tuned!
          </h1>
          <h2 class="max-w-xl text-center font-cormorant text-lg md:text-xl">
            If you're passionate about what we do and would like to be a part of our team, we'd love
            to hear from you! Please don't hesitate to
            <a href="#contact"><i>reach out</i> to us for more information. </a>
          </h2>
        </div>
      </div>

      <FooterBar />
      <!-- <FooterBarOld /> -->
    </main>
  </Smoothie>
  <transition name="modal-fade">
    <div v-if="modal.isVisible" id="modal"
      class="fixed top-0 z-30 flex h-full w-full flex-col bg-[#dee5e5] bg-opacity-90">
      <button @click="modal.isVisible = false"
        class="absolute z-40 m-3 bg-[rgb(94,128,127)] p-3 text-white opacity-65 hover:opacity-100">
        Close
      </button>
      <iframe allowfullscreen class="fp-iframe h-full w-full"
        src="https://heyzine.com/flip-book/c47921a727.html"></iframe>
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
  @apply border border-transparent px-1.5 py-1 transition-colors duration-300 hover:border-white hover:bg-[#c2dbdb27];
}

.pattern {
  background-image: url('../assets/imgs/back-pattern.png');
  background-repeat: repeat;
  background-size: 500px 1500px;
  background-color: rgba(255, 255, 255, 0.95);
  background-blend-mode: lighten;
}
</style>
