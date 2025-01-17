<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center relative">
    <div class="bg-[#5e807f2a] -z-10 w-full h-full fixed flex-1">
      <img src="../assets/imgs/bg.jpeg" class="w-full h-full object-cover opacity-10" />
    </div>

    <img src="../assets/imgs/logoc.png" class="w-[20rem] md:w-[26rem] mt-12" />

    <div class="flex lg:flex-row flex-col border-[3px] border-[#5E807F]">
      <h1 class="bg-[#5E807F] text-white cs">It's</h1>
      <h1 class="bg-transparent text-[#5E807F] cs">Out!</h1>
    </div>

    <div class="my-12 mb-36 text-[#5E807F] fill-[#5E807F] text-2xl">
      <span class="font-bold"> Check Out Now at </span>
      <a href="https://magazine.ceylon.luxe"
        >magazine.ceylon.luxe
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block mb-0.5 h-5 w-5"
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
</template>

<style>
.cs {
  @apply text-center tracking-wider text-7xl md:text-9xl p-4 pt-8 md:p-8 md:pt-14 uppercase font-relineRosery;
}
</style>
