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
      header: { 'content-type': contentType, 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZjNTBhZDUwLWU5ZWYtNDBlYi1hYzYyLWEzYWQ2OTQ2ZmJiNyIsImlhdCI6MTU0ODkyNzAzOCwic3ViIjoiZGV2ZWxvcGVyL2M0NGUzYTBiLTIzNGItZjI3OS1jYTAzLTA2MjhmYzc5MTA5OCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjAuMC4wLjAiXSwidHlwZSI6ImNsaWVudCJ9XX0.gakPQu8g_Xvvg94L3Qv3QuPzjXtWw2D9bH2o6cn1ZUl2mS0qg1KF4tA4laQj0wyLox4a2TDKw_b41JZ9CfHYog'}
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
