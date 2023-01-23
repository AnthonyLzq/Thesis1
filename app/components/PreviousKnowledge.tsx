import { Image } from 'remix-image'

const PreviousKnowledge = () => {
  return (
    <main className='previous-knowledge'>
      <h1>Conocimientos previos</h1>
      <section>
        <article>
          <h2>Reconocimiento Facial</h2>
          <p>
            La tecnología de Reconocimiento Facial es una tecnología biométrica,
            que se basa en la identificación de los rasgos faciales de una
            persona. Por lo general, se usa como una forma de seguridad, por
            ejemplo, para identificar a las personas en una multitud o para
            verificar la identidad de una persona que intenta acceder a un
            edificio, cuenta de correo, bancaria, etc.
            <br />
            <br />
            Comúnmente el proceso de Reconocimiento Facial consta de 4 pasos:
            <br />
            <ol>
              <li>
                Detección de rostros en una imagen. Esto se puede hacer usando
                una variedad de métodos, incluidas las cascadas de Haar, los
                patrones binarios locales (LBP) y el aprendizaje profundo.
                Podemos ver un ejemplo de esto en la siguiente figura:
                <figure>
                  <Image
                    src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/step1.png?alt=media'
                    alt='Paso 1 del proceso de Reconocimiento Facial'
                    responsive={[
                      { size: { width: 508, height: 288 } },
                      { maxWidth: 1120, size: { width: 380, height: 216 } },
                      { maxWidth: 900, size: { width: 360, height: 204 } },
                      { maxWidth: 600, size: { width: 300, height: 171 } },
                      { maxWidth: 540, size: { width: 290, height: 164 } },
                      { maxWidth: 512, size: { width: 280, height: 160 } },
                      { maxWidth: 500, size: { width: 270, height: 154 } },
                      { maxWidth: 460, size: { width: 260, height: 148 } },
                      { maxWidth: 428, size: { width: 240, height: 137 } },
                      { maxWidth: 400, size: { width: 220, height: 126 } },
                      { maxWidth: 386, size: { width: 210, height: 120 } },
                      { maxWidth: 368, size: { width: 200, height: 112 } },
                      { maxWidth: 360, size: { width: 190, height: 108 } },
                      { maxWidth: 348, size: { width: 180, height: 100 } }
                    ]}
                  />
                  <figcaption>Ejemplo de Identificación de Rostros.</figcaption>
                </figure>
              </li>
              <li>
                Análisis de rostros. Esto generalmente consiste en identificar
                las propiedades geométricas claves del rostro. El objetivo es
                identificar puntos de referencia que son esenciales para
                distinguir un rostro. Podemos ver un ejemplo de esto en la
                siguiente figura:
                <figure>
                  <Image
                    src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/step2.png?alt=media'
                    alt='Paso 1 del proceso de Reconocimiento Facial'
                    responsive={[
                      { size: { width: 508, height: 288 } },
                      { maxWidth: 1120, size: { width: 380, height: 216 } },
                      { maxWidth: 900, size: { width: 360, height: 204 } },
                      { maxWidth: 600, size: { width: 300, height: 171 } },
                      { maxWidth: 540, size: { width: 290, height: 164 } },
                      { maxWidth: 512, size: { width: 280, height: 160 } },
                      { maxWidth: 500, size: { width: 270, height: 154 } },
                      { maxWidth: 460, size: { width: 260, height: 148 } },
                      { maxWidth: 428, size: { width: 240, height: 137 } },
                      { maxWidth: 400, size: { width: 220, height: 126 } },
                      { maxWidth: 386, size: { width: 210, height: 120 } },
                      { maxWidth: 368, size: { width: 200, height: 112 } },
                      { maxWidth: 360, size: { width: 190, height: 108 } },
                      { maxWidth: 348, size: { width: 180, height: 100 } }
                    ]}
                  />
                  <figcaption>Ejemplo de Análisis de Rostros.</figcaption>
                </figure>
              </li>
              <li>
                Conversión de la imagen en data. Este proceso consiste en
                obtener un conjunto de datos numéricos a partir de los puntos de
                referencia identificados en el paso anterior. Estos datos
                numéricos son conocidos, generalmente, como <i>"faceprint"</i>{' '}
                (huella facial). Análogamente a las huellas digitales, las
                huellas faciales son únicas para cada rostro.
              </li>
              <li>
                Comparación. Finalmente, una vez calculada la huella facial del
                rostro, esta se compara contra un dataset de huellas faciales
                previamente registradas para encontrar alguna coincidencia.
              </li>
            </ol>
          </p>
        </article>
        <article>
          <h2 className='long'>Comunicación en Tiempo Real</h2>
          <p>
            La creciente popularidad de los dispositivos conectados y la
            tecnología de la Internet de las Cosas (IoT) nos lleva a situaciones
            en las cuales necesitamos la comunicación en tiempo real entre los
            humanos y los dispositivos electrónicos. Estas comunicaciones en
            tiempo real posibilitan una acción inmediata ante una eventualidad,
            como un sensor que detecta temperaturas excesivas en una máquina, un
            administrador remoto que necesita hablar con un técnico, o un dron
            agrícola que informa sobre las condiciones del cultivo. Esto implica
            desarrollar herramientas y plataformas flexibles para crear
            servicios y soluciones basadas en la nube y en el lugar.
            <br />
            Entre las tecnologías que permiten la comunicación en tiempo real
            podemos mencionar: WebSockets, SignalR, WebRTC, MQTT, etc. En este
            proyecto se utilizará MQTT, ya que es un protocolo de mensajería que
            permite comunicación en tiempo real entre dispositivos y
            aplicaciones independientes de la plataforma y del lenguaje de
            programación. Este protocolo es del tipo de publicación/suscripción,
            lo que significa que los dispositivos se suscriben a un tópico y
            reciben los mensajes publicados en ese tópico. MQTT es un protocolo
            de mensajería orientado a la eficiencia, lo que significa que es muy
            eficiente en términos de ancho de banda y recursos de red. Veamos un
            ejemplo de un diagrama básico de comunicación MQTT:
            <figure>
              <Image
                src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/iot_diagram.png?alt=media'
                alt='Ejemplo de Diagrama de Comunicación en IoT usando el protocolo MQTT.'
                responsive={[
                  { size: { width: 508, height: 288 } },
                  { maxWidth: 1120, size: { width: 380, height: 216 } },
                  { maxWidth: 900, size: { width: 360, height: 204 } },
                  { maxWidth: 600, size: { width: 300, height: 171 } },
                  { maxWidth: 540, size: { width: 290, height: 164 } },
                  { maxWidth: 512, size: { width: 280, height: 160 } },
                  { maxWidth: 500, size: { width: 270, height: 154 } },
                  { maxWidth: 460, size: { width: 260, height: 148 } },
                  { maxWidth: 428, size: { width: 240, height: 137 } },
                  { maxWidth: 400, size: { width: 220, height: 126 } },
                  { maxWidth: 386, size: { width: 210, height: 120 } },
                  { maxWidth: 368, size: { width: 200, height: 112 } },
                  { maxWidth: 360, size: { width: 190, height: 108 } },
                  { maxWidth: 348, size: { width: 180, height: 100 } }
                ]}
              />
              <figcaption>
                Ejemplo de Diagrama de Comunicación en IoT usando el protocolo
                MQTT.
              </figcaption>
            </figure>
          </p>
        </article>
      </section>
    </main>
  )
}

export { PreviousKnowledge }
