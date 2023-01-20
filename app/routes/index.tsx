import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Presentation } from '~/components'

const App = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='mySwiper'
    >
      <SwiperSlide>
        <Presentation />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  )
}

export default App
