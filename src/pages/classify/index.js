import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: '分类'
  }

  render () {
    return (
      <View className='index'>
        分类
      </View>
    )
  }
}

export default Index;

