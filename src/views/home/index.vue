<template>
  <div>
    <h1>Home</h1>
    <h3>{{ num }}</h3>
    <h3>{{ doubleNum }}</h3>
    <button @click="appStore.addNum()">num+1</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const { num, doubleNum } = storeToRefs(appStore)
</script>
