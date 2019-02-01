import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { image_url, Troops } from '../../service/config'
import './index.less'

class Troop extends Component {
  static options = {
    addGlobalClass: true
  }

  static defaultProps = {
    data: []
  }

  render () {
    let troops = this.props.data
    return (
      <View className='troops-com flex-center-column'>
      {
        troops.length !== 0 &&
        troops.map((item, index) => {
          return (
            <View className='box' key={index}>
              {/* <Image className='head-style' src={`${image_url}spells/${item.name.substring(0, item.name.indexOf(' '))}.png`} /> */}
              <Text className='font-14'>{Troops[item.name]}</Text>
              <Text className='font-14'>{item.level}</Text>
            </View>
          )
        })
      }
      </View>
    )
  }
}

export default Troop
