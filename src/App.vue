<template>
  <div flex>
    <div class="nav" w120 flex flex-col gap10>
      <router-link
        class="link"
        flex-none
        :to="item.path"
        :key="item.path"
        v-for="item in routes.filter((item) => item.path !== '/')"
        >{{ item.path }}</router-link
      >
    </div>
    <div p15 flex-1>
      <!-- 路由出口 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from './router'
</script>

<style lang="scss" scoped>
.nav {
  height: 100vh;
  background: silver;
}

.link {
  width: 120px;
  height: 30px;
  line-height: 30px;
  color: white;
  text-align: center;
  background: sandybrown;
}

.router-link-active {
  background: saddlebrown !important;
}
</style>
