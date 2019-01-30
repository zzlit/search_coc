import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
import { AtDrawer } from 'taro-ui'
import  Troops from './troops/index'
import './index.less'

class Search extends Component {

  config = {
    navigationBarTitleText: '查询'
  }

  constructor () {
    super(...arguments)
    this.state = {
      show: true,
      item: -1
    }
  }

  onClose () {
    console.log('colose', this.state.item)
  }

  itemClick (e) {
    console.log(e)
    this.setState({
      item: e,
      show: false
    })
  }

  render () {
    let { show, item } = this.state
    const drawerList = ['菜单1', '菜单2']
    return (
      <View className='index'>
        <AtDrawer 
          show={show} 
          mask
          onClose={this.onClose.bind(this)}
          onItemClick={this.itemClick.bind(this)}
          items={drawerList}
        />
        {
          item === 0 && <Troops />
        }
      </View>
    )
  }
}

export default Search
