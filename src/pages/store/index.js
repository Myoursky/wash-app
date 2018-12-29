import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: '企业'
  }

  render () {
    return (
      <View className='index'>
        企业
      </View>
    )
  }
}

export default Index;

