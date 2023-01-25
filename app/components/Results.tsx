import type { FC } from 'react'

import { Histogram } from './Histogram'
import type { Data } from '~/utils'
import { Equation } from 'react-equation'
import { CustomBarChart } from './CustomBarChart'

type ResultsProps = {
  data: Data
}

const Results: FC<ResultsProps> = props => {
  const { data } = props

  return (
    <main className='results'>
      <h1>Resultados</h1>
      <section>
        <article>
          <h2>Latencia</h2>
          <p>
            Como se detalló en la sección anterior, analizaremos 3 métricas de
            latencia, Latencia de Foto, Latencia MQTT y Latencia de Detección.
          </p>
          <article>
            <h3>Latencia de Foto</h3>
            <p>
              A pesar de haber implementado el script para tomar una foto usando
              la webcam en TS, la Latencia de Foto se mantuvo con valores
              consistentes, menores en su mayoría a 1.3s, tal como se muestra en
              la siguiente gráfica.
            </p>
            <Histogram
              data={data.takePhotoData}
              label='Latencia de Foto'
              titles={['Tiempo (s)', 'Frecuencia']}
            />
          </article>
          <article>
            <h3>Latencia MQTT</h3>
            <p>
              A pesar de que ambos sistemas están implementados usando TS y se
              están conectando a través de un Broker MQTT remoto, la Latencia
              MQTT es también bastante consistente y se mantuvo en promedio a
              2.47s, tal como se muestra en la siguiente gráfica.
            </p>
            <Histogram
              data={data.receivePhotoData}
              label='Latencia MQTT'
              titles={['Tiempo (s)', 'Frecuencia']}
            />
          </article>
          <article>
            <h3>Latencia de Detección</h3>
            <p>
              Nuevamente, a pesar de usar TS para la detección de rostros, la
              Latencia de Detección se sigue manteniendo consistente y se
              mantuvo en promedio a 2.16s.
            </p>
            <Histogram
              data={data.matchData.map(data => data.time)}
              label='Latencia MQTT'
              titles={['Tiempo (s)', 'Frecuencia']}
            />
          </article>
        </article>
        <article>
          <h2>Coeficiente de Identificación</h2>
          <p>
            De los 350 datos tomados como referencia para la identificación de
            rostros, se obtuvieron los siguientes resultados:
          </p>
          <ol>
            <li>
              339 de los 350 casos fueron casos de éxito, es decir, encontraron
              una coincidencia entre entre los rostros.
            </li>
            <li>
              11 de los 350 casos fueron casos de fracaso, es decir, no
              encontraron una coincidencia entre entre los rostros.
            </li>
            <li>
              El Coeficiente de Identificación resultante fue:{' '}
              <Equation value='Ci = 0.969' />.
            </li>
          </ol>
          <CustomBarChart
            label='Coeficiente de Identificación'
            labels={['Éxito', 'Fracaso']}
            data={data.matchData.map(data => data.match)}
            titles={['', 'Frecuencia']}
          />
        </article>
      </section>
    </main>
  )
}

export { Results }
