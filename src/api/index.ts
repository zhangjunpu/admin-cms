import { BASE_URL, TIMEOUT } from './core/config'
import JRequest from './core/request'
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import type { IResp } from './core/type'

const request = new JRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
})
request.addRequestInterceptor(
  (config: InternalAxiosRequestConfig) => {
    console.log(config, 'req')
    return config
  },
  (err: any) => {}
)
request.addResponseInterceptor(
  (resp: AxiosResponse<IResp>) => {
    console.log(resp, 'resp')
    const res = resp.data
    return res.data
  },
  (err: any) => {}
)

export default request
