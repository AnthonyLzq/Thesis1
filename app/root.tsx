import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

import remixImageStyles from 'remix-image/remix-image.css'
import swiperBundle from 'swiper/swiper-bundle.css'
import swiperCss from 'swiper/swiper.min.css'

import Nunito300 from '@fontsource/nunito/300.css'
import Nunito400 from '@fontsource/nunito/400.css'
import Nunito500 from '@fontsource/nunito/500.css'
import Nunito600 from '@fontsource/nunito/600.css'
import Nunito700 from '@fontsource/nunito/700.css'
import NunitoSans300 from '@fontsource/nunito-sans/300.css'
import NunitoSans400 from '@fontsource/nunito-sans/400.css'
import NunitoSans600 from '@fontsource/nunito-sans/600.css'
import NunitoSans700 from '@fontsource/nunito-sans/700.css'

import globalStyles from './styles/global.css'
import presentationStyles from './styles/presentation.css'
import contentStyles from './styles/content.css'
import introductionStyles from './styles/introduction.css'
import previousKnowledgeStyles from './styles/previousKnowledge.css'
import structureAndMethodStyles from './styles/structureAndMethod.css'
import resultsStyles from './styles/results.css'

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/dracula.min.css'
  },
  { rel: 'stylesheet', href: remixImageStyles },
  { rel: 'stylesheet', href: swiperBundle },
  { rel: 'stylesheet', href: swiperCss },
  { rel: 'stylesheet', href: globalStyles },
  { rel: 'stylesheet', href: presentationStyles },
  { rel: 'stylesheet', href: contentStyles },
  { rel: 'stylesheet', href: introductionStyles },
  { rel: 'stylesheet', href: previousKnowledgeStyles },
  { rel: 'stylesheet', href: structureAndMethodStyles },
  { rel: 'stylesheet', href: resultsStyles },
  { rel: 'stylesheet', href: Nunito300 },
  { rel: 'stylesheet', href: Nunito400 },
  { rel: 'stylesheet', href: Nunito500 },
  { rel: 'stylesheet', href: Nunito600 },
  { rel: 'stylesheet', href: Nunito700 },
  { rel: 'stylesheet', href: NunitoSans300 },
  { rel: 'stylesheet', href: NunitoSans400 },
  { rel: 'stylesheet', href: NunitoSans600 },
  { rel: 'stylesheet', href: NunitoSans700 }
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Tesis I - Anthony Luzquiños',
  viewport: 'width=device-width,initial-scale=1',
  keywords:
    'Tesis, Seminario, IoT, Reconocimiento Facial, MQTT, Thesis, Seminar, Facial Recognition',
  description:
    'Seminario de Tesis I: Reconocimiento de Rostros en Tiempo Real y Comunicación usando protocolos IoT',
  'og:type': 'website',
  'og:url': 'https://thesis1.anthonylzq.dev',
  'og:title': 'Tesis I',
  'og:description':
    'Seminario de Tesis I: Reconocimiento de Rostros en Tiempo Real y Comunicación usando protocolos IoT',
  'og:locale': 'es_ES',
  'twitter:card': 'summary_large_image',
  'twitter:creator': '@AnthonyLzq',
  'twitter:url': 'https://thesis1.anthonylzq.dev',
  'twitter:title': 'Tesis I - Anthony Luzquiños',
  'twitter:description':
    'Seminario de Tesis I: Reconocimiento de Rostros en Tiempo Real y Comunicación usando protocolos IoT',
  'google-site-verification': 'YqTKhEaCZ570ZBFrWBJmMdNCq_q5pFNKVHDKwud4qdA'
})

const App = () => {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default App
