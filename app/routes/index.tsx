import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  Content,
  Introduction,
  Presentation,
  PreviousKnowledge
} from '~/components'

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
      <SwiperSlide>
        <Content />
      </SwiperSlide>
      <SwiperSlide>
        <Introduction />
      </SwiperSlide>
      <SwiperSlide>
        <PreviousKnowledge />
      </SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  )
}

export default App
