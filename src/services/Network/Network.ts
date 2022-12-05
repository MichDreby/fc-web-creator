import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const Network = new (class {
  private axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
  })

  private request = async <T>(
    url: string,
    method: AxiosRequestConfig['method'],
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> =>
    this.axiosInstance.request({
      ...config,
      url,
      method,
      data,
    })

  public get = async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => this.request<T>(url, 'GET', null, config)

  public post = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => this.request<T>(url, 'POST', data, config)

  public patch = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => this.request<T>(url, 'PATCH', data, config)

  public delete = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => this.request<T>(url, 'DELETE', data, config)
})()
