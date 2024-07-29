<template>
  <div>
    <h1>Home</h1>
    <h3 class="num">{{ num }}</h3>
    <h3>{{ doubleNum }}</h3>
    <button @click="appStore.addNum()">num+1</button>
    <el-button type="primary">按钮</el-button>
    <el-input>输入框</el-input>
    <el-card></el-card>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const { num, doubleNum } = storeToRefs(appStore)
</script>
<style lang="scss" scoped>
.num {
  color: $red;

  @include wh(100, 100);
}
</style>
