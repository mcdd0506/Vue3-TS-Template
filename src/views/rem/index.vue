<template>
  <div>
    <h1>rem适配</h1>

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
