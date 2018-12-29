import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { getData } from './../../redux/modules/data';

import './index.less'



class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentDidMount() {
    this.props.getData()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log(this.props.data);
    return (
      <View className='index'>
        123
      </View>
    )
  }
}

export default connect(state => ({
  data: state.data.data,
}), {
  getData
})(Index);

