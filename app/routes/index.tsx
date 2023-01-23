import { Keyboard, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  Content,
  Introduction,
  Presentation,
  PreviousKnowledge,
  StructureAndMethod
} from '~/components'

const App = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true
      }}
      keyboard={{
        enabled: true
      }}
      modules={[Keyboard, Pagination]}
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
      <SwiperSlide>
        <StructureAndMethod />
      </SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  )
}

export default App
