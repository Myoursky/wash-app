import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, Image } from '@tarojs/components'
import img1 from './../images/1.jpg';
import img2 from './../images/2.jpg';
import img3 from './../images/3.jpg';
import img4 from './../images/4.jpg';
import img5 from './../images/5.jpg';
import './swiper.less';

class Index extends Component {
  render () {
    return (
      <Swiper
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <Image src={img1} className='img' />
        </SwiperItem>
        <SwiperItem>
          <Image src={img2} className='img' />
        </SwiperItem>
        <SwiperItem>
          <Image src={img3} className='img' />
        </SwiperItem>
        <SwiperItem>
          <Image src={img4} className='img' />
        </SwiperItem>
        <SwiperItem>
          <Image src={img5} className='img' />
        </SwiperItem>
      </Swiper>
    )
  }
}

export default Index;

