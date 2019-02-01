import Taro from '@tarojs/taro'
import { request_url } from './config'

export default {
  baseOptions(params, method = 'GET') {
    let { url, data } = params
    // console.log('params', params)
    let contentType = 'application/json'
    contentType = params.contentType || contentType
    let option = {
      isShowLoading: false,
      loadingText: '正在加载',
      url: url.indexOf('http://') === -1 && url.indexOf('https://') === -1 ? request_url + url : url,
      data: data,
      method: method,
      header: { 'content-type': contentType, 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImYxYTU5NTllLWU3ZWYtNDJjMy1iNWMyLTIxY2FmZjVkZTAwNSIsImlhdCI6MTU0ODk4NDE4Miwic3ViIjoiZGV2ZWxvcGVyL2M0NGUzYTBiLTIzNGItZjI3OS1jYTAzLTA2MjhmYzc5MTA5OCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjExNS4yMzYuMTkxLjU5Il0sInR5cGUiOiJjbGllbnQifV19.Dk8m2UfzsU7-kWLjtAfDn6xBq_L7r4zUIogXj2L6XNVXju5qXEahkdPZeY1EV1-weZ97lfr87QtO9y_yFaYq8w'}
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
