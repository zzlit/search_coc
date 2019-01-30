import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.less'

class BuildTown extends Component {
  static options = {
    addGlobalClass: true
  }

  static defaultProps = {}

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    let { current } = this.state
    const tabList = [{ title: '标签页1' }, { title: '标签页2' }]
    return (
      <View className='troops-com'>
        <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={current} index={0} >
            <View className='font-14'>标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={current} index={1}>
            <View className='font-14'>标签页二的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default BuildTown
