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
    </Swiper>
  )
}

export default App
