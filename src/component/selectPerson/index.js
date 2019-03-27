import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { image_url } from '../../service/config'
import './index.less'

export default class SelectPerson extends Component {
  static options = {
    addGlobalClass: true
  }

  static defaultProps = {
    list: [],
    onChoose: () => {}
  }

  toPersonInfo (flag) {
    this.props.onChoose(flag)
  }

  render () {
    let { list } = this.props
    return (
      <View className='operate bg-fff relative'>
      {
        list.map((item, index) => {
          return (
            <View className='item flex-center' key={index} onClick={this.toPersonInfo.bind(this, item.tag)}>
              <Image src={`${image_url}base_camp/th_${item.townHallLevel}.png`} className='th-image' />
              {/* <Image src={`${image_url}base_camp/bh_${item.builderHallLevel}.png`} className='bh-image' /> */}
              <View className='info'>
                <Text className='font-18 color-101'>{item.name}</Text>
                <Text className='font-14 color-b0b'>{item.tag}</Text>
                <Text className='font-14 color-b0b block'>{item.clanName ? item.clanName : ''}</Text>
              </View>
            </View>
          )
        })
      }
      </View>
    )
  }
}
