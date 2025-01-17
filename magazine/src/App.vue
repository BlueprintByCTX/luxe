<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import { SmoothScroll } from './components/SmoothScroll'

const isDragging = ref(false)

onMounted(() => {
  if (window.matchMedia('(pointer: fine)').matches) {
    // Mouse or similar pointing device is available, no need for animation
    document.documentElement.style.overflow = 'hidden'

    const scrollbar = document.querySelector('.c-scrollbar') as HTMLElement
    const thumb = document.getElementById('c-scrollbar_thumb') as HTMLElement

    const updateThumbPosition = () => {
      const trackHeight =
        (document.documentElement.clientHeight * document.documentElement.clientHeight) /
        document.documentElement.scrollHeight

      const trackTop =
        (document.documentElement.scrollTop / document.documentElement.scrollHeight) *
        document.documentElement.clientHeight

      thumb.style.height = `${trackHeight}px`
      thumb.style.transform = `translateY(${trackTop}px)`
    }

    document.addEventListener('scroll', updateThumbPosition)

    // Show scrollbar on interaction
    const showScrollbar = () => scrollbar.classList.add('visible')
    const hideScrollbar = () => {
      if (!isDragging.value) {
        scrollbar.classList.remove('visible')
      }
    }

    document.addEventListener('scroll', showScrollbar)
    document.addEventListener('mousemove', hideScrollbar)
    document.addEventListener('touchstart', showScrollbar)

    // Dragging functionality
    let startY = 0
    let startScrollTop = 0

    thumb.addEventListener('mousedown', (e) => {
      isDragging.value = true
      startY = e.clientY
      startScrollTop = document.documentElement.scrollTop
      document.body.style.userSelect = 'none' // Disable text selection while dragging
    })

    document.addEventListener('mousemove', (e) => {
      if (!isDragging.value) return
      const deltaY = e.clientY - startY
      const scrollDelta =
        (deltaY / document.documentElement.clientHeight) * document.documentElement.scrollHeight
      document.documentElement.scrollTop = startScrollTop + scrollDelta
    })

    document.addEventListener('mouseup', () => {
      if (isDragging.value) {
        isDragging.value = false
        document.body.style.userSelect = '' // Re-enable text selection
      }
    })

    // Initial position
    updateThumbPosition()

    SmoothScroll(document, 50, 12)
  }
})
</script>

<template>
  <RouterView />
  <span class="c-scrollbar z-30">
    <span class="c-scrollbar_thumb z-30" id="c-scrollbar_thumb"></span>
  </span>
</template>

<style>
.c-scrollbar {
  position: fixed;
  right: 0;
  top: 0;
  width: 11px;
  height: 100vh;
  transform-origin: center right;
  transition: opacity 0.3s;
  opacity: 0; /* Hidden by default */
}

.c-scrollbar.visible,
.c-scrollbar:hover {
  opacity: 1; /* Show scrollbar on interaction or hover */
}

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #0c2e2c;
  opacity: 0.5;
  width: 7px;
  border-radius: 10px;
  margin: 2px;
  cursor: grab;
  transition: background-color 0.3s;
}

.c-scrollbar_thumb:active {
  cursor: grabbing;
  background-color: #b3d6d4; /* Darker color while dragging */
}
</style>
