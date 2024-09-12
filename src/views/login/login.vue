<template>
  <div class="container fl-c">
    <div class="panel">
      <h2 class="title">后台管理系统</h2>

      <el-form class="form" ref="formRef" :model="formInfo" :rules="rules">
        <el-form-item label="账号" prop="name">
          <el-input v-model="formInfo.name" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formInfo.password" type="password" />
        </el-form-item>
      </el-form>

      <el-button class="btn" type="primary" @click="handleLogin">登录</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import type { ILoginAccount } from '@/types/login'
import { useLoginStore } from '@/stores/login'

const store = useLoginStore()

const formRef = ref<FormInstance>()
const formInfo = reactive<ILoginAccount>({
  name: '',
  password: '',
})
const rules: FormRules = {
  name: [{ message: '账号不能为空', trigger: 'blur', required: true }],
  password: [
    { message: '密码不能为空', trigger: 'blur', required: true },
    { message: '密码长度必须在6~16位之间', trigger: 'blur', min: 6, max: 16 },
  ],
}

const handleLogin = () => {
  formRef.value?.validate((valid) => {
    console.log(valid)
    store.loginAction({ name: formInfo.name, password: formInfo.password })
  })
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .panel {
    width: 300px;
    .title {
      text-align: center;
    }
    .form {
      margin-top: 40px;
    }
    .btn {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
