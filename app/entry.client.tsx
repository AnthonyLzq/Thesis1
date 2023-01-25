import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement
} from 'chart.js'
import 'chart.js/auto'
import Zoom from 'chartjs-plugin-zoom'
import Annotation from 'chartjs-plugin-annotation'

function hydrate() {
  startTransition(() => {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
      Zoom,
      Annotation
    )

    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    )
  })
}

if (typeof requestIdleCallback === 'function') {
  requestIdleCallback(hydrate)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1)
}
