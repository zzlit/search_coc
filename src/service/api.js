import Taro from '@tarojs/taro'
import { request_url } from './config'

export default {
  baseOptions(params, method = 'GET') {
    let { url, data } = params
    // console.log('params', params)
    let contentType = 'application/json'
    contentType = params.contentType || contentType
    let that = this
    let option = {
      isShowLoading: false,
      loadingText: '正在加载',
      url: url.indexOf('http://') === -1 && url.indexOf('https://') === -1 ? request_url + url : url,
      data: data,
      method: method,
      header: { 'content-type': contentType }
    }
    return Taro.request(option)
  },

  get(url, data = '') {
    let option = { url, data }
    return this.baseOptions(option)
  },

  post(url, data, contentType) {
    let params = { url, data, contentType }
    return this.baseOptions(params, 'POST')
  },

  put(url, data, contentType) {
    let params = { url, data, contentType }
    return this.baseOptions(params, 'PUT')
  }
}
