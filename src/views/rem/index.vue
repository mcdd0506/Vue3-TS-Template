<template xmlns:i-ep="http://www.w3.org/1999/xhtml">
  <div>
    <h1>rem 适配与 unocss 使用</h1>
    <p>unocss icon 使用</p>
    <div i-ep:dish />
    <p>rem 适配</p>
    <div class="box"></div>
    <div mt20 w375 h375 bg-amber></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.box {
  width: 750px;
  height: 100px;
  background-color: brown;
}
</style>
