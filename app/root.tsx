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

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: remixImageStyles },
  { rel: 'stylesheet', href: swiperBundle },
  { rel: 'stylesheet', href: swiperCss },
  { rel: 'stylesheet', href: globalStyles },
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
  title: 'Tesis 1 - Anthony Luzquiños',
  viewport: 'width=device-width,initial-scale=1'
})

export default function App() {
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
