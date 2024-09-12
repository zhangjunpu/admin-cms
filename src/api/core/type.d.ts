import type { AxiosResponse, InternalAxiosRequestConfig, AxiosRequestConfig } from 'axios'

export type InterceptorRequest = (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
export type InterceptorResponse = (res: AxiosResponse) => AxiosResponse
export type InterceptorError = (err: any) => any

export interface IResp<T = any> {
  code: number
  data: T
  msg: ''
}
