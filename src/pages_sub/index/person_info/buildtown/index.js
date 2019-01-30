import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

class BuildTown extends Component {
  static options = {
    addGlobalClass: true
  }

  static defaultProps = {}

  render () {
    return (
      <View className='hometown-com'>
        <Text className='font-14'>ewqewq</Text>
      </View>
    )
  }
}

export default BuildTown
