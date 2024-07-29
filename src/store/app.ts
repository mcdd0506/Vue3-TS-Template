// 引入 defineStore 创建 pinia 仓库
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// 导出 app 仓库函数
export const useAppStore = defineStore(
  'app',
  () => {
    // 数据
    const num = ref(20)

    // 改变数据函数
    const addNum = () => {
      num.value += 1
    }

    // 计算熟悉
    const doubleNum = computed(() => num.value * 2)

    // 把仓库数据和函数 return 出去
    return {
      num,
      addNum,
      doubleNum
    }
  },
  {
    // 持久化配置
    persist: {
      // sessionStorage 存储持久化数据
      storage: sessionStorage,
      paths: ['num']
    }
  }
)
