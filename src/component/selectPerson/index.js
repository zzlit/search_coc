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
    onHide: () => {},
    onChoose: () => {}
  }

  onChoose (index) {
    this.props.onChoose(index)
  }

  onHide () {
    this.props.onHide(false)
  }

  render () {
    let { list: { name, className, tag, townHallLevel, builderHallLevel } } = this.props
    return (
      <View className='operate bg-fff relative'>
      {/*
        list.map((item, index) => {
          return (
            <View className='item' key={index}>
              <Text className='item font-14'>{name}</Text>
              <Text className='item font-14'>{clanName}</Text>
              <Text className='item font-14'>{tag}</Text>
              <Text className='item font-14'>{townHallLevel}</Text>
              <Text className='item font-14'>{builderHallLevel}</Text>
            </View>
          )
        })*/
      }
        <View className='item flex-center'>
          {/* <Image src={`${image_url}base_camp/th_${townHallLevel}.png`} className="th-image" /> */}
          {/* <Image src={`${image_url}base_camp/bh_${builderHallLevel}.png`} className="bh-image" /> */}
          <Image src={image_url + 'base_camp/th_12.png'} className="th-image" />
          <View className='info'>
            <Text className='font-18 color-101'>荆棘。</Text>
            <Text className='font-14 color-b0b'>#L9J888CRP</Text>
            {/* <Image src={image_url + 'base_camp/bh_8.png'} className="bh-image" /> */}
            <Text className='font-14 color-b0b block'>水手公园</Text>
          </View>
        </View>
      </View>
    )
  }
}
