import type { FC } from 'react'
import type { Data } from '~/utils'

type ResultsProps = {
  data: Data
}

const Results: FC<ResultsProps> = props => {
  const { data } = props
  console.log('data', data)

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
          </article>
          <article>
            <h3>Latencia MQTT</h3>
            <p>
              A pesar de que ambos sistemas están implementados usando TS y se
              están conectando a través de un Broker MQTT remoto, la Latencia
              MQTT es también bastante consistente y se mantuvo en promedio a
              2.47s, tal como se muestra en la siguiente gráfica.
            </p>
          </article>
          <article>
            <h3>Latencia de Detección</h3>
            <p>
              Nuevamente, a pesar de usar TS para la detección de rostros, la
              Latencia de Detección se sigue manteniendo consistente y se
              mantuvo en promedio a 2.16s.
            </p>
          </article>
        </article>
        <article>
          <h2>Coeficiente de Identificación</h2>
          <p>
            De los 350 datos tomados como referencia para la identificación de
            rostros, se obtuvieron los siguientes resultados:
          </p>
        </article>
      </section>
    </main>
  )
}

export { Results }