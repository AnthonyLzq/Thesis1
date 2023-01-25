import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Keyboard, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  ConclusionsAndFutureWork,
  Content,
  IntroductionAndObjectives,
  Presentation,
  PreviousKnowledge,
  References,
  Results,
  StructureAndMethod
} from '~/components'
import type { Data } from '~/utils'
import { fetchData } from '~/utils'

export const loader: LoaderFunction = async () => {
  return fetchData()
}

const App = () => {
  const data = useLoaderData<Data>()

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
        <IntroductionAndObjectives />
      </SwiperSlide>
      <SwiperSlide>
        <PreviousKnowledge />
      </SwiperSlide>
      <SwiperSlide>
        <StructureAndMethod />
      </SwiperSlide>
      <SwiperSlide>
        <Results data={data} />
      </SwiperSlide>
      <SwiperSlide>
        <ConclusionsAndFutureWork />
      </SwiperSlide>
      <SwiperSlide>
        <References />
      </SwiperSlide>
    </Swiper>
  )
}

export default App
