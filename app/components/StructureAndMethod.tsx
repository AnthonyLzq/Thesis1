import { Image } from 'remix-image'
import Gist from 'react-gist'
import { Equation } from 'react-equation'

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
          </p>
          <ol>
            <li>
              Tener almacenadas un conjunto de imágenes de prueba que nos
              permitan entrenar un modelo de ML.
            </li>
            <li>
              Tener almacenados los datos personales de un usuario, para nuestro
              caso: nombre y número de celular en una base de datos. Así mismo,
              esta base de datos debe contar con un identificador único que
              permita identificar a los usuarios; este identificador se llamará
              "<i>id</i>".
            </li>
            <li>
              Tomar fotos con una cámara web cada vez que se "toque un timbre";
              es decir, accione un mecanismo mecánico; por ejemplo: presionar un
              botón o se acciona un interruptor.
            </li>
            <li>
              Enviar esta foto y el "<i>id</i>" del usuario mediante el
              protocolo MQTT a un "broker" MQTT, usando un tópico determinado;
              por ejemplo: "<i>DoorCloud/photo</i>".
            </li>
            <li>
              Escuchar a los mensajes publicados en el tópico "
              <i>DoorCloud/photo</i>" y recolectar la foto y el "<i>id</i>" del
              usuario.
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
              Enviar la respuesta (persona identificada o no identificada) junto
              con la foto a nuestro usuario vía <i>WhatsApp</i> utilizando la
              <i>API</i> de <i>Twilio</i>.
            </li>
          </ol>
          <p>
            Podemos resumir los pasos anteriores utilizando el siguiente
            diagrama:
          </p>
          <figure>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/architecture.png?alt=media'
              alt='Diagrama de arquitectura del sistema "DoorCloud".'
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
              Diagrama de arquitectura del sistema <i>"DoorCloud"</i>.
            </figcaption>
          </figure>
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
            </p>
            <figure>
              <Image
                src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/hivemq_signup.png?alt=media'
                alt='Registro en HiveMQ.'
                responsive={[
                  { size: { width: 300 } },
                  { maxWidth: 430, size: { width: 280 } },
                  { maxWidth: 404, size: { width: 260 } },
                  { maxWidth: 380, size: { width: 240 } },
                  { maxWidth: 366, size: { width: 220 } }
                ]}
              />
              <figcaption>Registro en HiveMQ.</figcaption>
            </figure>
            <figure>
              <Image
                src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/hivemq_device_setup.png?alt=media'
                alt='Configuración de credenciales de un dispositivo.'
                responsive={[
                  { size: { width: 860 } },
                  { maxWidth: 1536, size: { width: 760 } },
                  { maxWidth: 1440, size: { width: 660 } },
                  { maxWidth: 1280, size: { width: 560 } },
                  { maxWidth: 1120, size: { width: 460 } },
                  { maxWidth: 900, size: { width: 360 } },
                  { maxWidth: 600, size: { width: 260 } },
                  { maxWidth: 430, size: { width: 160 } }
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
                  { size: { width: 750 } },
                  { maxWidth: 1596, size: { width: 680 } },
                  { maxWidth: 1440, size: { width: 610 } },
                  { maxWidth: 1120, size: { width: 540 } },
                  { maxWidth: 960, size: { width: 510 } },
                  { maxWidth: 848, size: { width: 480 } },
                  { maxWidth: 820, size: { width: 450 } },
                  { maxWidth: 680, size: { width: 420 } },
                  { maxWidth: 640, size: { width: 390 } },
                  { maxWidth: 612, size: { width: 360 } },
                  { maxWidth: 560, size: { width: 330 } },
                  { maxWidth: 520, size: { width: 300 } },
                  { maxWidth: 430, size: { width: 220 } }
                ]}
              />
              <figcaption>
                Configuración de credenciales de un dispositivo.
              </figcaption>
            </figure>
            <p>
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
            </p>
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
          </p>
          <figure>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/CleanArchitecture.jpg?alt=media'
              alt='Ejemplo de Arquitectura Limpia.'
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
            <figcaption>Ejemplo de Arquitectura Limpia.</figcaption>
          </figure>
          <h3>Servidor HTTP usando Fastify</h3>
          <p>
            <code>Fastify</code> al ser un <i>framework</i> de{' '}
            <code>Node.js</code> nos ayudará a construir nuestra API, la cual
            tendrá nos servirá para registrar usuario y también registrar las
            fotos de los mismos, pero partiremos considerando las siguientes
            precondiciones:
          </p>
          <ol>
            <li>El usuario ya está registrado en nuestra base de datos.</li>
            <li>El usuario ya subió sus fotos en nuestro bucket.</li>
          </ol>
          <p>
            Sin embargo, detallaremos el flujo que hubiera seguido un usuario al
            registrarse y subir sus fotos.
          </p>
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
          <p>
            El detalle de la implementación del Servidor será considerado como
            trabajo futuro.
          </p>
          <h3 className='long-supabase'>
            Supabase como <i>bucket</i> y base de datos
          </h3>
          <p>
            El siguiente paso registrarnos en Supabase, pero previo a eso
            definiremos el modelo entidad relación básico para <i>DoorCloud</i>:
          </p>
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
          <p>
            Una vez definido el modelo entidad relación, debemos continuar con
            el registro, crear una base de datos y un <i>bucket</i> dentro de
            Supabase. Para ello, debemos seguir los siguientes pasos:
          </p>
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
              Integrar Supabase en el servidor
              <Gist id='7d1cfeda389b7f5f38b62bd2640a32ba' />
            </li>
          </ol>
          <h3 className='long'>
            Implementación del Servidor MQTT utilizando <code>MQTT.js</code>
          </h3>
          <p>
            Para realizar esta implementación necesitamos las credenciales que
            obtuvimos al momento de crear nuestro <i>cluster</i> de HiveMQ, el
            usuario y contraseña, además de esto, necesitamos el <i>host</i> y
            el puerto donde está <i>corriendo</i> nuestro <i>cluster</i>. Con
            esto podemos instanciar nuestro client MQTT de la siguiente manera:
            <Gist id='23e8c8e7c9d15ad720ba651fce325975' />
            Una vez hecho esto, ya tenemos el cliente de MQTT disponible en
            nuestro servidor. Ahora podemos definir una ruta, esta será una
            función que permitirá que nuestro cliente escuche únicamente a un
            <i>topic</i> y ejecute una función cuando llegue un mensaje en ese
            <i>topic</i>, podemos un ejemplo de una ruta a continuación:
            <Gist id='ff99d1dcff9e127dada42cfbca401c71' />
            Finalmente, podemos registrar nuestra ruta utilizando nuestro
            cliente de MQTT de la siguiente manera:
            <Gist id='68251346d1cec916ca86823d0560334e' />
          </p>
          <h3 className='long'>
            Implementación de la API de Twilio en el Servidor
          </h3>
          <p>
            El primer paso para implementar la API de Twilio en nuestro servidor
            es crear una cuenta en Twilio, de la siguiente manera:
          </p>
          <figure>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/twilio_1.png?alt=media'
              alt='Registro en Twilio.'
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
            <figcaption>Registro en Twilio.</figcaption>
          </figure>
          <p>
            Una vez hecho esto, podemos crear un proyecto en Twilio y comprar un
            número de teléfono, esta parte no se detallará, pero una vez
            completada debemos crear <i>templates</i> de mensajes, tal como se
            ve en la siguiente figura:
          </p>
          <figure>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/twilio_2.png?alt=media'
              alt='"Templates" de mensajes en Twilio.'
              responsive={[
                { size: { width: 900 } },
                { maxWidth: 1720, size: { width: 820 } },
                { maxWidth: 1680, size: { width: 800 } },
                { maxWidth: 1596, size: { width: 750 } },
                { maxWidth: 1480, size: { width: 720 } },
                { maxWidth: 1420, size: { width: 700 } },
                { maxWidth: 1376, size: { width: 660 } },
                { maxWidth: 1320, size: { width: 630 } },
                { maxWidth: 1280, size: { width: 600 } },
                { maxWidth: 1210, size: { width: 570 } },
                { maxWidth: 1180, size: { width: 540 } },
                { maxWidth: 1120, size: { width: 510 } },
                { maxWidth: 900, size: { width: 480 } },
                { maxWidth: 780, size: { width: 450 } },
                { maxWidth: 640, size: { width: 400 } },
                { maxWidth: 612, size: { width: 370 } },
                { maxWidth: 560, size: { width: 330 } },
                { maxWidth: 520, size: { width: 300 } },
                { maxWidth: 430, size: { width: 250 } }
              ]}
            />
            <figcaption>
              "<i>Templates</i>" de mensajes en Twilio.
            </figcaption>
          </figure>
          <p>
            Luego de haber terminado esta parte, debemos instanciar un cliente
            de Twilio en nuestro servidor, para esto necesitaremos las keys{' '}
            <code>ACCOUNT_SID</code> y <code>AUTH_TOKEN</code> que Twilio nos
            provee, de la siguiente manera:
            <Gist id='c3dab044f9fde67d71bc5399121686bc' />
            Una vez creado nuestro cliente, podemos crear una función que nos
            permita enviar mensajes de <i>WhatsApp</i>, como se puede apreciar
            en el siguiente ejemplo:
            <Gist id='47d963d4a2fadc59cc7ab0774609c833' />
            Una vez implementada el cliente de Twilio en nuestro servidor ya
            podemos hacer enviar la foto tomada hasta nuestro usuario final.
            Este proceso se detalla mediante el siguiente diagrama de flujo:
          </p>
          <figure>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/mapa3.png?alt=media'
              alt='Diagrama de Flujo del caso de uso Envío de foto por WhatsApp.'
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
              Diagrama de Flujo del caso de uso Envío de foto por WhatsApp.
            </figcaption>
          </figure>
        </article>
        <article>
          <h2>Modelo de Reconocimiento Facial</h2>
          <p>
            Utilizaremos la librería Human para la detección y comparación de
            rostros, esta librería utiliza un modelo llamado{' '}
            <i>MediaPipe BlazeFace Back variation</i>, el cual es una variante
            del modelo <i>MediaPipe Face Detection</i>.
            <br />
            El proceso de detección y comparación de rostros se detalla mediante
            la siguiente máquina de estados:
          </p>
          <figure>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/state_machine.png?alt=media'
              alt='Máquina de estados del Reconocimiento de Facial.'
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
              Máquina de estados del Reconocimiento de Facial.
            </figcaption>
          </figure>
          <p>
            El siguiente código es un ejemplo de cómo podría darse este proceso:
          </p>
          <Gist id='e06f9950b89dee1ecc9812efc1f15607' />
        </article>
        <article>
          <h2>Métricas</h2>
          <h3>Latencia</h3>
          <p>
            Definiremos la latencia como el retraso en la comunicación entre 2
            sistemas, la mediremos en unidades de tiempo (segundos), y en el
            presente proyecto utilizaremos 3 tipos de latencias las cuales
            detallaremos a continuación:
          </p>
          <ol>
            <li>
              Latencia de Foto. Esta latencia será definida como el tiempo que
              se demora nuestro cliente IoT en tomar una foto utilizando la
              librería desarrollada para la presente tesis,
              <code>@anthonylzq/node-webcam</code>.
            </li>
            <li>
              Latencia MQTT. Esta latencia será definida como el tiempo que se
              demora el nuestro servidor IoT en recibir la foto procesada desde
              el cliente IoT utilizando el protocolo MQTT.
            </li>
            <li>
              Latencia de Detección. Esta latencia será definida como el tiempo
              que se demora nuestro modelo de Reconocimiento Facial en detectar
              una coincidencia o no, entre las fotos previamente almacenadas y
              la foto recibida.
            </li>
          </ol>
          <h3>Coeficiente de Identificación</h3>
          <p>
            Los resultados de detección pueden variar por diferentes factores,
            incluso cuando la foto se trata de la misma persona, calcularemos el
            coeficiente de identificación como la cantidad de casos
            identificados exitosamente sobre la cantidad de casos totales. De la
            siguiente manera:
          </p>
          <ol>
            <li>
              Casos identificados exitosamente: <Equation value='Ce' />
            </li>
            <li>
              Casos totales: <Equation value='Ct' />
            </li>
            <li>
              Coeficiente de Identificación: <Equation value='Ci = Ce/Ct' />
            </li>
          </ol>
        </article>
      </section>
    </main>
  )
}

export { StructureAndMethod }
