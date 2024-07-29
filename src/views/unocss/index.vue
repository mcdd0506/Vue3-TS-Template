<template>
  <div>
    <h1>unocss</h1>
    <div class="box"></div>
    <hr />
    <div class="box2">小橘猫</div>
    <hr />
    <div w100 h100 bg-red mt10 py20>小橘猫</div>
    <hr />
    <div class="wrap" w200 h100 flex flex-col items-center justify-center gap10>
      <div w20 h20 bg-blue></div>
      <div w20 h20 bg-blue></div>
      <div w20 h20 bg-blue></div>
    </div>
    <hr />
    <div i-ep:dish></div>
    <i w100 h100 block i-ep:switch-button></i>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: salmon;
}

.box2 {
  @apply w-100 h-100 bg-red-900 text-30 text-blue hover:text-black;
}

.wrap {
  border: 1px solid #ddd;
}
</style>
