import type { ILoginAccount, IToken } from '@/types/login'
import request from '.'

export function requestLogin(data: ILoginAccount) {
  return request.post<IToken>('/login', data)
}
