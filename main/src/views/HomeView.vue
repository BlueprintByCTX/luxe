<script setup lang="ts">
import Countdown from '@/components/CountdownTimer.vue'
import { onMounted, ref } from 'vue'

const expired = ref(false)
const countDownString = '2025-01-19 16:30:00'
const countDownDate = new Date(countDownString).getTime()

function isExpired(): boolean {
  // Get today's date and time
  const now = new Date().getTime()

  // Find the distance between now and the count down date
  const distance = countDownDate - now

  // If the count down is over, write some text
  if (distance < 0) {
    return true
  } else {
    return false
  }
}

onMounted(() => {
  // Set the date we're counting down to

  if (isExpired()) {
    mounted.value = true
    expired.value = true
    setTimeout(() => {
      window.location.href = 'https://magazine.ceylon.luxe'
    }, 5000)
  } else {
    expired.value = false
    setInterval(() => {
      if (isExpired()) {
        mounted.value = true
        expired.value = true

        setTimeout(() => {
          window.location.href = 'https://magazine.ceylon.luxe'
        }, 5000)
      }
    }, 1000)
  }
})

import { Fireworks } from '@fireworks-js/vue'
import { watch } from 'vue'
import type { FireworksOptions } from '@fireworks-js/vue'

const fw = ref<InstanceType<typeof Fireworks>>()
const options = ref<FireworksOptions>({
  opacity: 1,
  hue: {
    min: 90,
    max: 240,
  },
})
const mounted = ref(false)

async function startFireworks() {
  if (!fw.value) return
  fw.value.start()
}

watch(fw, () => startFireworks())
</script>

<template>
  <div class="relative flex flex-col items-center">
    <div class="fixed -z-10 h-full w-full flex-1 bg-[#5e807f2a]">
      <img
        alt="Background"
        src="../assets/imgs/bg.jpeg"
        class="h-full w-full object-cover opacity-10"
      />
    </div>

    <img
      alt="Ceylon LUXE"
      src="../assets/imgs/logoc.png"
      class="mb-24 mt-32 w-[20rem] md:w-[26rem]"
    />

    <div class="flex flex-col border-[3px] border-[#5E807F] lg:flex-row">
      <h1 v-if="!expired" class="cs bg-[#5E807F] text-white">Coming</h1>
      <h1 v-if="!expired" class="cs bg-transparent text-[#5E807F]">Soon</h1>
      <h1 v-if="expired" class="cs bg-[#5E807F] text-white">It's</h1>
      <h1 v-if="expired" class="cs bg-transparent text-[#5E807F]">Out!</h1>
    </div>

    <Countdown :deadline="countDownString" v-if="!expired" class="pb-36 pt-12" />

    <div
      v-if="expired"
      class="my-12 mb-36 fill-[#5E807F] px-10 text-center text-lg text-[#5E807F] md:text-2xl"
    >
      <span class="font-bold"> Check Out Now at </span>
      <a href="https://magazine.ceylon.luxe"
        >magazine.ceylon.luxe
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mb-0.5 inline-block h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.975 14.51a1.05 1.05 0 0 0 0-1.485 2.95 2.95 0 0 1 0-4.172l3.536-3.535a2.95 2.95 0 1 1 4.172 4.172l-1.093 1.092a1.05 1.05 0 0 0 1.485 1.485l1.093-1.092a5.05 5.05 0 0 0-7.142-7.142L9.49 7.368a5.05 5.05 0 0 0 0 7.142c.41.41 1.075.41 1.485 0zm2.05-5.02a1.05 1.05 0 0 0 0 1.485 2.95 2.95 0 0 1 0 4.172l-3.5 3.5a2.95 2.95 0 1 1-4.171-4.172l1.025-1.025a1.05 1.05 0 0 0-1.485-1.485L3.87 12.99a5.05 5.05 0 0 0 7.142 7.142l3.5-3.5a5.05 5.05 0 0 0 0-7.142 1.05 1.05 0 0 0-1.485 0z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  </div>
  <Fireworks
    onclick="window.location.href = 'https://magazine.ceylon.luxe'"
    ref="fw"
    class="cursor-pointer"
    v-if="mounted"
    :autostart="false"
    :options="options"
    :style="{
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      position: 'fixed',
      background: '#0000000',
    }"
  />
</template>

<style>
.cs {
  @apply p-4 pt-8 text-center font-relineRosery text-7xl uppercase tracking-wider md:p-8 md:pt-14 md:text-9xl;
}
</style>
