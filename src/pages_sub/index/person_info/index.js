import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
import { AtAccordion } from 'taro-ui'
import Hero from '../../../component/hero/index'
import Troops from '../../../component/troops/index'
import Spells from '../../../component/spells/index'
import Achievements from '../../../component/achievements/index'
// import { playerInfo } from '../../../utils/json'
import {image_url} from '../../../service/config'
import api from '../../../service/api'
import './index.less'

class Info extends Component {

  config = {
    navigationBarTitleText: ''
  }

  constructor () {
    super(...arguments)
    this.state = {
      info: {}
    }
  }

  componentWillPreload (params) {
    return this.getPersonInfo(params.tag)
  }

  componentDidMount () {
    this.getPersonInfo()
  }

  async getPersonInfo (tag) {
    Taro.showLoading({
      title: '正在加载',
      mask: true
    })
    // let {statusCode, data} = await api.get(`players/${tag}`)
    let {statusCode, data} = await api.get(`players/YRY20V0P`)
    this.setState({
      info: statusCode * 1 === 200 ? data : {}
    }, () => { Taro.hideLoading() })
  }

  render () {
    let { info } = this.state
    return (
      <View className='index'>
        <View className='content'>
          <Image src={`${image_url}base_camp/th_${info.townHallLevel}.png`} className="th-image" />
          <Text className='font-16'>{info.name}</Text>
          <View className="level flex-center">
            <Image src={`${image_url}achivements/exp.png`} className="exp-image" />
            <Text className='font-14'>{info.expLevel}</Text>
          </View>
        </View>
        <Text className='font-14'>角色：{info.role}</Text>
        <Text className='font-14'>标签：{info.tag}</Text>
        <Text className='font-14'>大本营星星等级：{info.townHallWeaponLevel}</Text>
        <Text className='font-14'>夜世界大本营等级：{info.builderHallLevel}</Text>
        <Text className='font-14'>夜世界杯数：{info.versusTrophies}</Text>
        <Text className='font-14'>夜世界最高杯：{info.bestVersusTrophies}</Text>
        <Text className='font-14'>夜世界总进攻获胜：{info.versusBattleWins}</Text>
        <Text className='font-14'>攻击获胜：{info.attackWins}</Text>
        <Text className='font-14'>防守获胜：{info.defenseWins}</Text>
        <Text className='font-14'>捐兵：{info.donations}</Text>
        <Text className='font-14'>收兵：{info.donationsReceived}</Text>
        <Text className='font-14'>当前杯数：{info.trophies}</Text>
        <Text className='font-14'>最高杯数：{info.bestTrophies}</Text>
        <Text className='font-14'>战争星星：{info.warStars}</Text>
        {/* <Image src={info.league['iconUrls'].small} /> */}
        {/* <AtAccordion title='英雄'>
          <Hero data={info.heroes} />
        </AtAccordion>
        <AtAccordion title='军队'>
          <Troops data={info.troops} />
        </AtAccordion>
        <AtAccordion title='法术'>
          <Spells data={info.spells} />
        </AtAccordion>
        <AtAccordion title='成就'>
          <Achievements data={info.achievements} />
        </AtAccordion> */}
      </View>
    )
  }
}

export default Info
