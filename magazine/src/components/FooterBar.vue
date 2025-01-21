<template>
  <footer id="contact" class="bg-[#567675] sticky w-full font-recoleta px-8 lx:px-16 xl:px-24">
    <div
      class="flex flex-col lx:flex-row items-center lx:items-end lx:justify-between text-white pt-16 gap-4"
    >
      <h1 class="text-center text-sm sm:text-base">
        Sign up to our newsletter for our latest news and special events
      </h1>
      <form
        @submit.prevent="console.log('implement me!')"
        class="text-right flex justify-center items-center"
      >
        <input
          type="email"
          placeholder="Email Address"
          class="bg-transparent placeholder:text-xxs sm:placeholder:text-xs text-xs sm:text-sm outline-none border-b-2 mr-4 w-56 h-8"
          required
        />
        <button
          type="submit"
          class="border uppercase py-2 px-5 sm:py-3 sm:px-6 tracking-wider text-xxs sm:text-xs hover:bg-white hover:text-[#5E807F] transition-colors duration-300"
        >
          Sign up to our newsletter
        </button>
      </form>
    </div>

    <div class="flex pt-24 pb-16">
      <img alt="Ceylon LUXE" src="../assets/imgs/logos/cluxe-white-logo.png" class="w-44" />
      <h1>Tel: +94 74 011 8464</h1>
    </div>
  </footer>
</template>
