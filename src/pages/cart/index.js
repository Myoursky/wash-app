import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: '购物车'
  }

  render () {
    return (
      <View className='index'>
        购物车
      </View>
    )
  }
}

export default Index;

