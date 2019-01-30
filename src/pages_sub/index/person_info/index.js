import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
import { AtSegmentedControl } from 'taro-ui'
import HomeTown from './hometown/index'
import BuildTown from './buildtown/index'
import './index.less'

class Info extends Component {

  config = {
    navigationBarTitleText: ''
  }

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  handleClick (index) {
    this.setState({
      current: index
    })
  }

  render () {
    let { current } = this.state
    let tab = ['家乡', '建筑大师基地']
    return (
      <View className='index'>
        <AtSegmentedControl
          values={tab}
          className='segmented flex-center'
          fontSize='30'
          selectedColor=' #6A5ACD'
          onClick={this.handleClick.bind(this)}
          current={current}
        />
        {
          current === 0 ? <View className='font-14'>
            <HomeTown />
          </View> : null
        }
        {
          current === 1 ? <View className='font-14'>
            <BuildTown />
          </View> : null
        }
      </View>
    )
  }
}

export default Info
