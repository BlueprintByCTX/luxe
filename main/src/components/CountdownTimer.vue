<script setup lang="ts">
import { Countdown } from 'vue3-flip-countdown'

defineProps({
  deadline: String,
})
</script>

<template>
  <Countdown
    v-bind="$props"
    :deadline="deadline"
    countdownSize="3rem"
    labelSize="1.2rem"
    :showLabels="true"
    mainColor="#8ca5a4"
    secondFlipColor="#9cb1b0"
    mainFlipBackgroundColor="#445d5d"
    secondFlipBackgroundColor="#516e6e"
    labelColor="#5E807F"
  />
</template>
