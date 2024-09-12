import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import type { InterceptorError, InterceptorRequest, InterceptorResponse } from './type'

class JRequest {
  instance: AxiosInstance

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(config)
    // 基本拦截器
    this.addBaseInterceptor()
  }

  // 公共拦截器
  private addBaseInterceptor() {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log(config, 'req base')
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        console.log(res, 'resp base')
        return res
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  }

  // 添加拦截器
  addRequestInterceptor(onFulfilled: InterceptorRequest, onRejected: InterceptorError) {
    this.instance.interceptors.request.use(onFulfilled, onRejected)
  }

  addResponseInterceptor(onFulfilled: InterceptorResponse, onRejected: InterceptorError) {
    this.instance.interceptors.response.use(onFulfilled, onRejected)
  }

  request<T = any>(config: AxiosRequestConfig) {
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(url: string, params?: any, config?: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'GET', url: url, params: params })
  }

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'POST', url: url, data: data })
  }
}

export default JRequest
