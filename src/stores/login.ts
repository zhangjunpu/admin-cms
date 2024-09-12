import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { requestLogin } from '@/api/login'
import { setToken } from '@/cache/login'
import router from '@/router'
import type { ILoginAccount, IToken } from '@/types/login'

export const useLoginStore = defineStore('login', () => {
  const token = reactive<IToken>({
    id: 0,
    name: '',
    token: '',
  })

  const loginAction = async (data: ILoginAccount) => {
    try {
      const res = await requestLogin(data)
      token.id = res.id
      token.name = res.name
      token.token = res.token
      // 本地缓存
      setToken(token)
      // 跳转
      router.push('/main')
    } catch (err) {
      console.error(err)
    }
  }

  return { token, loginAction }
})
