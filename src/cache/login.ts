import { localCache } from './index'
import type { IToken } from '@/types/login'

export const K_TOKEN = 'token'

export function setToken(token: IToken) {
  localCache.set(K_TOKEN, token)
}

export function getToken(): IToken {
  return localCache.get(K_TOKEN)
}

export function removeToken() {
  return localCache.remove(K_TOKEN)
}
