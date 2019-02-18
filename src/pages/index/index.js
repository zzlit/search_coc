import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text, Picker } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
import { AtButton, AtSegmentedControl } from 'taro-ui'
import { SelectPerson } from '../../component/selectPerson'
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
      playersList: [],
      playerFlag: '',
      selectShow: true,
      flag: '',
      current: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  handleChangeClans (e) {
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
    Taro.showLoading({
      title: '正在搜索',
      mask: true
    })
    let res = await api.get(`search/players?q=${encodeURI(this.state.playerFlag)}&page=0&nameEquality=false`)
    console.log(res)
    let {statusCode, data} = res
    if (statusCode * 1 === 200) {
      Taro.hideLoading()
      // this.setState({
      //   playerInfo: res.data
      // }, () => {
      //   this.$preload('personInfo', this.state.playerInfo)
      //   Taro.navigateTo({
      //     url: '/pages_sub/index/person_info/index'
      //   })
      // })
      this.setState({
        playersList: data.items,
        selectShow: true
      })
    }
  }

  choosePerson (id) {
    console.log(id)
  }

  toHide () {
    this.setState({
      selectShow: false
    })
  }

  async toClanInfo() {
    Taro.navigateTo({
      url: '/pages_sub/index/clan_info/index'
    })
  }

  render () {
    let { flag, playerFlag, playersList, current, selectShow } = this.state
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
          current === 0 && <View className='content flex-center'>
            <Input
              value={playerFlag}
              onInput={this.handlePlayerId.bind(this)}
              className='input font-14 bg-fff relative'
              type='text'
              placeholder='请直接输入玩家名称或者玩家标签'
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
          current === 1 && <View className='content flex-center'>
            <Input
              value={flag}
              onInput={this.handleChangeClans.bind(this)}
              className='input font-14 bg-fff relative'
              type='text'
              placeholder='请直接输入部落名称或者部落标签'
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
        {
          selectShow && <SelectPerson list={playersList} onChoose={this.choosePerson.bind(this)} onHide={this.toHide.bind(this)} />
        }
      </View>
    )
  }
}

export default Index
