import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { requestLogin } from '@/api/login'
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
      console.log(res, 'login success')
      token.id = res.id
      token.name = res.name
      token.token = res.token
      // 本地缓存
    } catch (err) {
      console.error(err)
    }
  }

  return { token, loginAction }
})
