import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { image_url, Spells } from '../../service/config'
import './index.less'

class Spell extends Component {
  static options = {
    addGlobalClass: true
  }

  static defaultProps = {
    data: []
  }

  render () {
    let spell = this.props.data
    return (
      <View className='spells-com flex-center-column'>
      {
        spell.length !== 0 &&
        spell.map((item, index) => {
          return (
            <View className='box' key={index}>
              <Image className='head-style' src={`${image_url}spells/${item.name.substring(0, item.name.indexOf(' '))}.png`} />
              <Text className='font-14'>{Spells[item.name]}</Text>
              <Text className='font-14'>{item.level}</Text>
            </View>
          )
        })
      }
      </View>
    )
  }
}

export default Spell
