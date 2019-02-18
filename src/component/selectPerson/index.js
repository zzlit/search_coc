import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
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
      <View className='operate'>
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
        <View className='item'>
          <Text className='font-18'>荆棘。</Text>
          <Text className='font-14'>#L9J888CRP</Text>
          <Text className='font-14'>水手公园</Text>
          <Text className='font-14'>12</Text>
          <Text className='font-14'>8</Text>
        </View>
      </View>
    )
  }
}
