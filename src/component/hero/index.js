import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { image_url, Hero } from '../../service/config'
import './index.less'

class Heros extends Component {
  static options = {
    addGlobalClass: true
  }

  static defaultProps = {
    data: []
  }

  render () {
    let { data } = this.props
    return (
      <View className='hero-com flex-center-column'>
      {
        data.length !== 0 &&
        data.map((item, index) => {
          return (
            <View className='box' key={index}>
              <Image className='head-style' src={`${image_url}hero/hero_1.png`} />
              <Text className='font-14'>{Hero[item.name]}</Text>
              <Text className='font-14'>{item.level}</Text>
            </View>
          )
        })
      }
      </View>
    )
  }
}

export default Heros
