<script setup lang="ts">
import { ElMessage } from 'element-plus'
// import 'element-plus/theme-chalk/el-message.css'

const showMessage = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
</script>

<template>
  <div>
    <el-button type="primary" round @click="showMessage">Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
