<template>
  <div>
    <h1>mock</h1>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

axios
  .get('/api/home/getData', {
    params: {
      name: '小橘猫'
    }
  })
  .then((res) => {
    console.log('res.data', res.data)
  })

axios
  .post('/api/user/login', {
    account: '小黑猫'
  })
  .then((res) => {
    console.log('res.data', res.data)
  })
</script>
