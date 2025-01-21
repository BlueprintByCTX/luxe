<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import { RouterView } from 'vue-router'
import { Smoothie } from 'vue-smoothie'
</script>

<template>
  <Smoothie id="smoothie" class="h-full">
    <RouterView />
  </Smoothie>
</template>
