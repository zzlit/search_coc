import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
import { AtButton, AtSegmentedControl } from 'taro-ui'
import { request_url } from '../../service/config'
import api from '../../service/api'
import './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      flag: '',
      current: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  handleChange (e) {
    this.setState({
      flag: e.target.value
    })
  }

  handleClick (idnex) {
    this.setState({
      current: idnex
    })
  }

  toPersonInfo () {
    Taro.navigateTo({
      url: '/pages_sub/index/person_info/index'
    })
  }

  async toClanInfo () {
    // #20VRG8C0 bl
    let res = await api.get('v1/clans?name=%2320VRG8C0')
    console.log(res)
    // Taro.navigateTo({
    //   url: '/pages_sub/index/clan_info/index'
    // })
  }

  render () {
    let { flag, current } = this.state
    const tab = ['玩家', '部落']
    return (
      <View className='index'>
        <AtSegmentedControl
          values={tab}
          className='tab flex-center'
          fontSize='30'
          selectedColor=' #6A5ACD'
          onClick={this.handleClick.bind(this)}
          current={current}
        />
        {
          current === 0 &&
          <View className='content flex-center'>
            <Input
            value={flag}
            onInput={this.handleChange.bind(this)}
            className='input font-14 bg-fff relative'
            type='text'
            placeholder='请输入名称或者标签'
            placeholderStyle='color: #9B9B9B; font-size: 14px;'/>
            <AtButton type='primary' className='search-btn flex-center bg-6A5' onClick={this.toPersonInfo.bind(this)}>
              <Text className='font-14'>搜索</Text>
            </AtButton>
          </View>
        }
        {
          current === 1 &&
          <View className='content flex-center'>
            <Input
            value={flag}
            onInput={this.handleChange.bind(this)}
            className='input font-14 bg-fff relative'
            type='text'
            placeholder='请输入名称或者标签'
            placeholderStyle='color: #9B9B9B; font-size: 14px;'/>
            <AtButton type='primary' className='search-btn flex-center bg-6A5' onClick={this.toClanInfo.bind(this)}>
              <Text className='font-14'>搜索</Text>
            </AtButton>
          </View>
        }
      </View>
    )
  }
}

export default Index
