import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  render () {
    return (
      <View className='index'>
        我的
      </View>
    )
  }
}

export default Index;

