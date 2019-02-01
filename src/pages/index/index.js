import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
import { AtButton, AtSegmentedControl } from 'taro-ui'
import api from '../../service/api'
import './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      playerInfo: {},
      playerFlag: '',
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

  handlePlayerId (e) {
    this.setState({
      playerFlag: e.target.value
    })
  }

  async toPersonInfo () {
    // Taro.showLoading({
    //   title: '正在搜索',
    //   mask: true
    // })
    let search = await Taro.request({
      url: 'https://api.clashofstats.com/search/players?q=%E8%8D%86%E6%A3%98%E3%80%82&page=0&nameEquality=false',
      method: 'GET'
    })
    console.log(search)
    // let res = await api.get(`v1/players/%23${this.state.playerFlag}`)
    // if (res.statusCode * 1 === 200) {
    //   Taro.hideLoading()
    //   this.setState({
    //     playerInfo: res.data
    //   }, () => {
    //     this.$preload('personInfo', this.state.playerInfo)
    //     Taro.navigateTo({
    //       url: '/pages_sub/index/person_info/index'
    //     })
    //   })
    // }
  }

  async toClanInfo() {
    // let res = await api.get('v1/clans?name=')
    Taro.navigateTo({
      url: '/pages_sub/index/clan_info/index'
    })
  }

  render () {
    let { flag, playerFlag, current } = this.state
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
              value={playerFlag}
              onInput={this.handlePlayerId.bind(this)}
              className='input font-14 bg-fff relative'
              type='text'
              placeholder='请输入名称或者标签'
              placeholderStyle='color: #9B9B9B; font-size: 14px;'
            />
            <AtButton
              type='primary'
              className='search-btn flex-center bg-6A5'
              onClick={this.toPersonInfo.bind(this)}
              disabled={!playerFlag}
            >
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
              placeholderStyle='color: #9B9B9B; font-size: 14px;'
            />
            <AtButton
              type='primary'
              className='search-btn flex-center bg-6A5'
              onClick={this.toClanInfo.bind(this)}
              disabled={!flag}
            >
              <Text className='font-14'>搜索</Text>
            </AtButton>
          </View>
        }
      </View>
    )
  }
}

export default Index
