import { Image } from 'remix-image'
import Highlight from 'react-highlight'

const supabaseScript = `import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseKey = process.env.SUPABASE_KEY as string

const client = createClient(supabaseUrl, supabaseKey)

export { client }`

const StructureAndMethod = () => {
  return (
    <main className='structure-and-method'>
      <h1>Estructuración y Método</h1>
      <section>
        <article>
          <h2 className='long'>Planificación y Diseño del Sistema</h2>
          <p>
            El primer paso será definir las características que "
            <i>DoorCloud</i>" debe tener:
            <ol>
              <li>
                Tener almacenadas un conjunto de imágenes de prueba que nos
                permitan entrenar un modelo de ML.
              </li>
              <li>
                Tener almacenados los datos personales de un usuario, para
                nuestro caso: nombre y número de celular en una base de datos.
                Así mismo, esta base de datos debe contar con un identificador
                único que permita identificar a los usuarios; este identificador
                se llamará "<i>id</i>".
              </li>
              <li>
                Tomar fotos con una cámara web cada vez que se "toque un
                timbre"; es decir, accione un mecanismo mecánico; por ejemplo:
                presionar un botón o se acciona un interruptor.
              </li>
              <li>
                Enviar esta foto y el "<i>id</i>" del usuario mediante el
                protocolo MQTT a un "broker" MQTT, usando un tópico determinado;
                por ejemplo: "<i>DoorCloud/photo</i>".
              </li>
              <li>
                Escuchar a los mensajes publicados en el tópico "
                <i>DoorCloud/photo</i>" y recolectar la foto y el "<i>id</i>"
                del usuario.
              </li>
              <li>
                Almacenar la foto en un <i>bucket</i> privado, este a su vez nos
                retornará una <i>URL</i> pública que podrá ser utilizada más
                adelante.
              </li>
              <li>
                Enviar nuestra foto nuestro modelo de <i>ML</i> para que la
                procese y determine si la foto recibida fue o no identificada.
              </li>
              <li>
                Sincronizar la respuesta del modelo de <i>ML</i> y de la{' '}
                <i>URL</i>.
              </li>
              <li>
                Enviar la respuesta (persona identificada o no identificada)
                junto con la foto a nuestro usuario vía <i>WhatsApp</i>{' '}
                utilizando la
                <i>API</i> de <i>Twilio</i>.
              </li>
            </ol>
            Podemos resumir los pasos anteriores utilizando el siguiente
            diagrama:
            <figure>
              <Image
                src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/architecture.png?alt=media'
                alt='Diagrama de arquitectura del sistema "DoorCloud".'
                responsive={[
                  { size: { width: 680, height: 300 } },
                  { maxWidth: 1280, size: { width: 600, height: 264 } },
                  { maxWidth: 1120, size: { width: 520, height: 232 } },
                  { maxWidth: 1080, size: { width: 460, height: 200 } },
                  { maxWidth: 900, size: { width: 380, height: 168 } },
                  { maxWidth: 680, size: { width: 300, height: 132 } },
                  { maxWidth: 478, size: { width: 240, height: 104 } }
                ]}
              />
              <figcaption>
                Diagrama de arquitectura del sistema <i>"DoorCloud"</i>.
              </figcaption>
            </figure>
          </p>
        </article>
        <article>
          <h2>
            <i>Broker</i> HTTP/MQTT
          </h2>
          <article>
            <h3 className='long'>
              Despliegue del <i>broker</i> <code>MQTT</code> usando HiveMQ
            </h3>
            <p>
              El segundo paso es crear una cuenta en la consola de HiveMQ y
              luego configurar nuestro propio <i>broker</i>, veamos el proceso
              con las siguientes imágenes:
              <figure>
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/hivemq_signup.png?alt=media'
                  alt='Registro en HiveMQ.'
                  responsive={[
                    { size: { width: 300, height: 540 } },
                    { maxWidth: 430, size: { width: 280, height: 504 } },
                    { maxWidth: 404, size: { width: 260, height: 468 } },
                    { maxWidth: 380, size: { width: 240, height: 432 } },
                    { maxWidth: 366, size: { width: 220, height: 396 } }
                  ]}
                />
                <figcaption>Registro en HiveMQ.</figcaption>
              </figure>
              <figure>
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/hivemq_device_setup.png?alt=media'
                  alt='Configuración de credenciales de un dispositivo.'
                  responsive={[
                    { size: { width: 860, height: 540 } },
                    { maxWidth: 1536, size: { width: 760, height: 496 } },
                    { maxWidth: 1440, size: { width: 660, height: 428 } },
                    { maxWidth: 1280, size: { width: 560, height: 364 } },
                    { maxWidth: 1120, size: { width: 460, height: 300 } },
                    { maxWidth: 900, size: { width: 360, height: 232 } },
                    { maxWidth: 600, size: { width: 260, height: 168 } },
                    { maxWidth: 430, size: { width: 160, height: 104 } }
                  ]}
                />
                <figcaption>
                  Configuración de credenciales de un dispositivo.
                </figcaption>
              </figure>
              <figure>
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/hivemq_free_cluster.png?alt=media'
                  alt='Configuración de credenciales de un dispositivo.'
                  responsive={[
                    { size: { width: 750, height: 300 } },
                    { maxWidth: 1596, size: { width: 680, height: 272 } },
                    { maxWidth: 1440, size: { width: 610, height: 244 } },
                    { maxWidth: 1120, size: { width: 540, height: 216 } },
                    { maxWidth: 960, size: { width: 510, height: 204 } },
                    { maxWidth: 848, size: { width: 480, height: 192 } },
                    { maxWidth: 820, size: { width: 450, height: 180 } },
                    { maxWidth: 680, size: { width: 420, height: 168 } },
                    { maxWidth: 640, size: { width: 390, height: 156 } },
                    { maxWidth: 612, size: { width: 360, height: 144 } },
                    { maxWidth: 560, size: { width: 330, height: 132 } },
                    { maxWidth: 520, size: { width: 300, height: 120 } },
                    { maxWidth: 430, size: { width: 220, height: 88 } }
                  ]}
                />
                <figcaption>
                  Configuración de credenciales de un dispositivo.
                </figcaption>
              </figure>
              Una vez configurado nuestro <i>broker</i> MQTT, podemos
              conectarnos a él desde nuestro dispositivo utilizando las
              credenciales que hemos configurado anteriormente. Para esto
              haremos uso de la librería <code>Mqtt.js</code>.
            </p>
          </article>
        </article>
        <article>
          <h2>Client MQTT</h2>
          <article>
            <h3 className='long very-long'>
              Implementación de librería de toma de fotos utilizando una cámara
              web
            </h3>
            <p>
              En <code>NPM</code> existen en la actualidad 28 librerías las
              cuales implementan una abstracción de algún software que permite
              tomar fotos utilizando alguna webcam incorporada (o externa) del
              sistema. Lamentablemente ninguna de estas es compatible con{' '}
              <code>TS</code>, o se encuentra muy desactualizada, implementando
              versiones de <code>EcmaScript</code> (<code>ES</code>) muy
              antiguas. Es por esto que nos vimos en la necesidad de re
              implementar una de las librerías más populares y estables (cuya
              última actualización fue hace menos de un año), hacerla compatible
              con <code>TS</code> y luego publicarla en <code>NPM</code> para su
              posterior uso. Además de así contribuir con la comunidad Open
              Source.
              <br />
              Se eligió la librería <code>node-webcam</code> para ser re
              implementada, ya que es una de las más populares (175 estrellas en
              GitHub y 1000 descargas semanales en <code>NPM</code>) y estables
              (última actualización hace 6 meses), al menos comparadas con
              otras.
              <br />
              La re implementación se comenzó realizando un <i>fork</i> en
              GitHub del proyecto original. Luego se replicaron las
              funcionalidades principales de la librería, utilizando TS en lugar
              de <code>JavaScript</code> (<code>JS</code>), además se
              disponibilizaron las principales funcionalidades que node-webcam
              utilizaba, y se migró la versión de <code>ES</code> a una más
              moderna. Luego de finalizar al migración, el nuevo paquete fue
              publicado bajo el nombre: <code>@anthonylzq/node-webcam</code>,
              siguiendo las reglas de nomenclatura de <code>NPM</code>, para
              luego ser utilizado en nuestro Cliente <code>MQTT</code>.
            </p>
          </article>
          <article>
            <h3 className='long'>Implementación del cliente MQTT</h3>
            <p>
              Para simplificar este proceso, asumiremos que tenemos un usuario
              registrado en una base de datos alojada en <i>Supabase</i>. En
              esta base de datos tendremos registrado el nombre del usuario y su
              número telefónico para hacerle llegar las notificaciones.
              <br />
              Nuestra <i>Raspberry PI</i> ejecutará un script en Node.js llamado
              <i>sendPicture</i> el cual utilizara la librería{' '}
              <code>@anthonylzq/node-webcam</code> y tomará una foto en formato
              png, la transformará en base64 y la enviará a nuestro{' '}
              <i>broker</i> MQTT junto con otra metadata necesaria para el
              procesamiento de la imagen. Este mensaje será enviado a través del
              tópico "<i>DoorCloud/photo</i>". Podemos representar el flujo
              explicado con el siguiente diagrama:
              <figure>
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/mapa3.png?alt=media'
                  alt='Diagrama de Flujo de la función "sendPicture".'
                  responsive={[
                    { size: { width: 680 } },
                    { maxWidth: 1280, size: { width: 600 } },
                    { maxWidth: 1120, size: { width: 520 } },
                    { maxWidth: 1080, size: { width: 460 } },
                    { maxWidth: 900, size: { width: 380 } },
                    { maxWidth: 680, size: { width: 300 } },
                    { maxWidth: 478, size: { width: 240 } }
                  ]}
                />
                <figcaption>
                  Diagrama de Flujo de la función "<i>sendPicture</i>".
                </figcaption>
              </figure>
            </p>
          </article>
        </article>
        <article>
          <h2>Servidor HTTP/MQTT</h2>
          <p>
            Nuestro servidor fue implementado utilizando una versión
            simplificada de la Arquitectura Limpia por capas. La cual favorece
            los diferentes principios del desarrollo de software.
            <br />
            Podemos ver un ejemplo de arquitectura limpia en la siguiente
            imagen:
            <figure>
              <Image
                src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/CleanArchitecture.jpg?alt=media'
                alt='Ejemplo de Arquitectura Limpia.'
                responsive={[
                  { size: { width: 680, height: 486 } },
                  { maxWidth: 1280, size: { width: 600, height: 428 } },
                  { maxWidth: 1120, size: { width: 520, height: 372 } },
                  { maxWidth: 1080, size: { width: 460, height: 328 } },
                  { maxWidth: 900, size: { width: 380, height: 272 } },
                  { maxWidth: 680, size: { width: 300, height: 212 } },
                  { maxWidth: 478, size: { width: 240, height: 172 } }
                ]}
              />
              <figcaption>Ejemplo de Arquitectura Limpia.</figcaption>
            </figure>
          </p>
          <h3>Servidor HTTP usando Fastify</h3>
          <p>
            <code>Fastify</code> al ser un <i>framework</i> de{' '}
            <code>Node.js</code> nos ayudará a construir nuestra API, la cual
            tendrá nos servirá para registrar usuario y también registrar las
            fotos de los mismos, pero partiremos considerando las siguientes
            precondiciones:
            <ol>
              <li>El usuario ya está registrado en nuestra base de datos.</li>
              <li>El usuario ya subió sus fotos en nuestro bucket.</li>
            </ol>
            Sin embargo, detallaremos el flujo que hubiera seguido un usuario al
            registrarse y subir sus fotos.
            <figure>
              <Image
                src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/mapa1.png?alt=media'
                alt='Diagrama de Flujo del caso de uso de Registro de Usuario.'
                responsive={[
                  { size: { width: 680 } },
                  { maxWidth: 1280, size: { width: 600 } },
                  { maxWidth: 1120, size: { width: 520 } },
                  { maxWidth: 1080, size: { width: 460 } },
                  { maxWidth: 900, size: { width: 380 } },
                  { maxWidth: 680, size: { width: 300 } },
                  { maxWidth: 478, size: { width: 240 } }
                ]}
              />
              <figcaption>
                Diagrama de Flujo del caso de uso de Registro de Usuario.
              </figcaption>
            </figure>
            <figure>
              <Image
                src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/mapa2.png?alt=media'
                alt='Diagrama de Flujo del caso de uso de Subida de Fotos.'
                responsive={[
                  { size: { width: 680 } },
                  { maxWidth: 1280, size: { width: 600 } },
                  { maxWidth: 1120, size: { width: 520 } },
                  { maxWidth: 1080, size: { width: 460 } },
                  { maxWidth: 900, size: { width: 380 } },
                  { maxWidth: 680, size: { width: 300 } },
                  { maxWidth: 478, size: { width: 240 } }
                ]}
              />
              <figcaption>
                Diagrama de Flujo del caso de uso de Subida de Fotos.
              </figcaption>
            </figure>
            El detalle de la implementación del Servidor será considerado como
            trabajo futuro.
          </p>
          <h3 className='long-supabase'>
            Supabase como <i>bucket</i> y base de datos
          </h3>
          <p>
            El siguiente paso registrarnos en Supabase, pero previo a eso
            definiremos el modelo entidad relación básico para <i>DoorCloud</i>:
            <figure>
              <Image
                src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/supabase_4.png?alt=media'
                alt='Diagrama E/R básico de la tabla "users".'
                responsive={[
                  { size: { width: 300 } },
                  { maxWidth: 500, size: { width: 270 } },
                  { maxWidth: 378, size: { width: 240 } }
                ]}
              />
              <figcaption>
                Diagrama E/R básico de la tabla "<i>users</i>".
              </figcaption>
            </figure>
            Una vez definido el modelo entidad relación, debemos continuar con
            el registro, crear una base de datos y un <i>bucket</i> dentro de
            Supabase. Para ello, debemos seguir los siguientes pasos:
            <ol>
              <li>
                Registro en Supabase
                <figure>
                  <Image
                    src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/supabase_1.png?alt=media'
                    alt='Registro en Supabase.'
                    responsive={[
                      { size: { width: 300 } },
                      { maxWidth: 680, size: { width: 270 } },
                      { maxWidth: 500, size: { width: 240 } },
                      { maxWidth: 378, size: { width: 210 } }
                    ]}
                  />
                  <figcaption>Registro en Supabase.</figcaption>
                </figure>
              </li>
              <li>
                Creación de proyecto
                <figure>
                  <Image
                    src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/supabase_2.png?alt=media'
                    alt='Creación de proyecto en Supabase.'
                    responsive={[
                      { size: { width: 600 } },
                      { maxWidth: 1280, size: { width: 540 } },
                      { maxWidth: 1080, size: { width: 520 } },
                      { maxWidth: 956, size: { width: 480 } },
                      { maxWidth: 900, size: { width: 420 } },
                      { maxWidth: 860, size: { width: 390 } },
                      { maxWidth: 780, size: { width: 360 } },
                      { maxWidth: 680, size: { width: 300 } },
                      { maxWidth: 600, size: { width: 270 } },
                      { maxWidth: 500, size: { width: 240 } }
                    ]}
                  />
                  <figcaption>Creación de proyecto en Supabase.</figcaption>
                </figure>
              </li>
              <li>
                Creación de la base de datos
                <figure>
                  <Image
                    src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/supabase_5.png?alt=media'
                    alt='Creación de la base de datos usando el diagrama E/R mostrado anteriormente.'
                    responsive={[
                      { size: { width: 600 } },
                      { maxWidth: 1280, size: { width: 540 } },
                      { maxWidth: 1080, size: { width: 480 } },
                      { maxWidth: 956, size: { width: 400 } },
                      { maxWidth: 680, size: { width: 360 } },
                      { maxWidth: 600, size: { width: 270 } },
                      { maxWidth: 500, size: { width: 240 } }
                    ]}
                  />
                  <figcaption>
                    Creación de la base de datos usando el diagrama E/R mostrado
                    anteriormente.
                  </figcaption>
                </figure>
              </li>
              <li>
                Creación de <i>bucket</i>
                <figure>
                  <Image
                    src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/supabase_6.png?alt=media'
                    alt='Creación del "bucket" "photos" en Supabase.'
                    responsive={[
                      { size: { width: 600 } },
                      { maxWidth: 1280, size: { width: 540 } },
                      { maxWidth: 1080, size: { width: 480 } },
                      { maxWidth: 956, size: { width: 400 } },
                      { maxWidth: 680, size: { width: 360 } },
                      { maxWidth: 600, size: { width: 270 } },
                      { maxWidth: 500, size: { width: 240 } }
                    ]}
                  />
                  <figcaption>
                    Creación del "<i>bucket</i>" "<i>photos</i>" en Supabase.
                  </figcaption>
                </figure>
              </li>
              <li className='code'>
                Integrar Supabase en el servidor.
                {/* <script src='https://gist.github.com/AnthonyLzq/7d1cfeda389b7f5f38b62bd2640a32ba.js'></script> */}
                <Highlight className='language-typescript'>
                  {supabaseScript}
                </Highlight>
              </li>
            </ol>
          </p>
        </article>
      </section>
    </main>
  )
}

export { StructureAndMethod }
