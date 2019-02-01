import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
import { AtAccordion } from 'taro-ui'
import Hero from '../../../component/hero/index'
import Troops from '../../../component/troops/index'
import Spells from '../../../component/spells/index'
import Achievements from '../../../component/achievements/index'
import { playerInfo } from '../../../utils/json'
import './index.less'

class Info extends Component {

  config = {
    navigationBarTitleText: ''
  }

  constructor () {
    super(...arguments)
    this.state = {
      // info: {}
    }
  }

  // componentWillMount() {
  //   console.log('preload: ', this.$router.preload.personInfo)
  //   this.setState({
  //     info: this.$router.preload.personInfo
  //   })
  // }

  render () {
    // let { info } = this.state
    let info = playerInfo
    return (
      <View className='index'>
        <Text className='font-16'>姓名：{info.name}</Text>
        <Text className='font-14'>角色：{info.role}</Text>
        <Text className='font-14'>等级：{info.expLevel}</Text>
        <Text className='font-14'>标签：{info.tag}</Text>
        <Text className='font-14'>大本营等级：{info.townHallLevel}</Text>
        <Text className='font-14'>大本营星星等级：{info.townHallWeaponLevel}</Text>
        <Text className='font-14'>夜世界大本营等级：{info.builderHallLevel}</Text>
        <Text className='font-14'>夜世界杯数：{info.versusTrophies}</Text>
        <Text className='font-14'>夜世界最高杯：{info.bestVersusTrophies}</Text>
        <Text className='font-14'>夜世界总进攻获胜：{info.versusBattleWinCount}</Text>
        <Text className='font-14'>夜世界当前获胜（猜测没有的话就返回的是总获胜）：{info.versusBattleWins}</Text>
        <Text className='font-14'>攻击获胜：{info.attackWins}</Text>
        <Text className='font-14'>防守获胜：{info.defenseWins}</Text>
        <Text className='font-14'>捐兵：{info.donations}</Text>
        <Text className='font-14'>收兵：{info.donationsReceived}</Text>
        <Text className='font-14'>当前杯数：{info.trophies}</Text>
        <Text className='font-14'>最高杯数：{info.bestTrophies}</Text>
        <Text className='font-14'>战争星星：{info.warStars}</Text>
        {/* <Image src={info.league['iconUrls'].small} /> */}
        <AtAccordion title='英雄'>
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
        </AtAccordion>
      </View>
    )
  }
}

export default Info
