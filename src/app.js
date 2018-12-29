import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/classify/index',
      'pages/store/index',
      'pages/cart/index',
      'pages/mine/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ff5d00',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white',
      backgroundColor: '#f0f1f2',
      enablePullDownRefresh: true
    },
    "tabBar": {
      "color": "#808080",
      "selectedColor": "#ff9008",
      "list": [
        {
          "pagePath": "pages/index/index",
          "text": "首页",
          iconPath: './images/home.png',
          selectedIconPath: './images/home-active.png',
        },
        {
          "pagePath": "pages/classify/index",
          "text": "分类",
          iconPath: './images/classify.png',
          selectedIconPath: './images/classify-active.png',
        },
        {
          "pagePath": "pages/store/index",
          "text": "企业",
          iconPath: './images/store.png',
          selectedIconPath: './images/store-active.png',
        },
        {
          "pagePath": "pages/cart/index",
          "text": "购物车",
          iconPath: './images/cart.png',
          selectedIconPath: './images/cart-active.png',
        },
        {
          "pagePath": "pages/mine/index",
          "text": "我的",
          iconPath: './images/mine.png',
          selectedIconPath: './images/mine-active.png',
        }
      ]
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
