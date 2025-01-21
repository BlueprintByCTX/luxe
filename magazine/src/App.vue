<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Smoothie } from 'vue-smoothie'
import { modal } from '@/lib/state'
</script>

<template>
  <Smoothie :weight="0.11" id="smoothie" class="h-full">
    <RouterView />
  </Smoothie>
  <transition name="modal-fade">
    <div
      v-if="modal.isVisible"
      id="modal"
      class="fixed top-0 w-full h-full bg-[#dee5e5] bg-opacity-90 z-30 flex flex-col"
    >
      <button
        @click="modal.isVisible = false"
        class="absolute m-3 p-3 bg-[rgb(94,128,127)] text-white z-40 opacity-65 hover:opacity-100"
      >
        Close
      </button>
      <iframe
        allowfullscreen
        class="fp-iframe w-full h-full"
        src="https://heyzine.com/flip-book/c47921a727.html"
      ></iframe>
    </div>
  </transition>
</template>
