import { Equation } from 'react-equation'
import { Image } from 'remix-image'

const ConclusionsAndFutureWork = () => {
  return (
    <main className='conclusions-and-future-work'>
      <h1>Conclusiones y Trabajo Futuro</h1>
      <section>
        <article>
          <h2>Conclusiones</h2>
          <p>
            En este capitulo presentamos las conclusiones obtenidas de acuerdo a
            los objetivos planteados inicialmente.
          </p>
          <ol>
            <li>
              Se demostró que es posible implementar un sistema de
              reconocimiento de rostros utilizando el protocolo MQTT para IoT.
              El cual demora (en promedio) 5.79 segundos en reportar el
              resultado de identificación de una persona.
            </li>
            <li>
              Se identificaron diferentes métodos de reconocimiento de rostros y
              se implementó uno de ellos en el sistema desarrollado.
            </li>
            <li>
              Se logró un tiempo de latencia promedio de 1.16 segundos para la
              toma de fotos y de 2.47 segundos para el envío de las mismas a
              través del protocolo MQTT, lo cual es optimizable mediante un
              preprocesamiento de las imágenes.
            </li>
            <li>
              Se logró un tiempo de latencia promedio de 2.16 segundos para la
              detección de rostros utilizando el modelo de ML implementado.
            </li>
            <li>
              Se logró una tasa de reporte del <Equation value='100%' /> en el
              sistema de reconocimiento de rostros, indicando que todas las
              personas detectadas fueron correctamente reportadas como conocidas
              o no conocidas.
            </li>
            <li>
              Se propone una estrategia de preprocesamiento para reducir la
              latencia en el envío de las fotos, para reducir la latencia en el
              envío de las fotos se podría hacer uso de técnicas de compresión
              de imágenes antes de enviarlas a través del protocolo MQTT. Esto
              permitiría reducir el tamaño de las imágenes y, por lo tanto,
              reducir el tiempo necesario para transmitirlas. Otra estrategia
              podría ser reducir la resolución de las imágenes antes de ser
              enviadas, ya que esto también ayudaría a reducir el tamaño de las
              imágenes y por ende el tiempo de envío.
            </li>
            <li>
              Se logró un Coeficiente de Identificación de{' '}
              <Equation value='0.969' />.
            </li>
            <li>
              Se logró notificar a un usuario sobre los resultados del proceso
              de identificación:
              <figure>
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/results.jpeg?alt=media'
                  alt='Resultados de la notificación de usuarios por WhatsApp.'
                  responsive={[
                    { size: { width: 680 } },
                    { maxWidth: 1280, size: { width: 600 } },
                    { maxWidth: 1130, size: { width: 520 } },
                    { maxWidth: 1080, size: { width: 460 } },
                    { maxWidth: 900, size: { width: 380 } },
                    { maxWidth: 680, size: { width: 300 } },
                    { maxWidth: 478, size: { width: 240 } }
                  ]}
                />
                <figcaption>
                  Resultados de la notificación de usuarios por <i>WhatsApp</i>.
                </figcaption>
              </figure>
            </li>
          </ol>
        </article>
        <article>
          <h2>Trabajos Futuros</h2>
          <ol>
            <li>
              Agregar un sistema de seguridad adicional para garantizar la
              privacidad de los usuarios. Actualmente el sistema no cuenta con
              ningún tipo de seguridad para la comunicación entre los servicios.
            </li>
            <li>
              Implementar una estrategia de preprocesamiento de imágenes para
              reducir la Latencia MQTT. Una de las posibles soluciones sería
              identificar el rostro de la persona en el micro computador antes
              de enviar la imagen, lo cual permitiría reducir la latencia MQTT.
            </li>
            <li>
              Implementar un sistema de reconocimiento de rostros en tiempo real
              para detectar personas en movimiento. Actualmente el sistema solo
              detecta rostros en imágenes estáticas, fotos tomadas por el micro
              computador, para ser precisos.
            </li>
            <li>Detallar la implementación del Servidor HTTP.</li>
          </ol>
        </article>
      </section>
    </main>
  )
}

export { ConclusionsAndFutureWork }
