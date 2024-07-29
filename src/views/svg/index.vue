<template>
  <div>
    <h1>svg</h1>
    <img :src="svgs[index % 2]" alt="" />
    <!-- <div v-html="bagIcon"></div> -->
    <!-- <bagIcon /> -->
    <button @click="index += 1">index++</button>
  </div>
</template>

<script setup lang="ts">
import bagIcon from '@/assets/svg/bag.svg'
import binIcon from '@/assets/svg/bin.svg'

const svgs = [bagIcon, binIcon]
const index = ref(1)
</script>

<!-- <style scoped lang="scss"></style> -->
