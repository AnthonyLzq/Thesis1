const IntroductionAndObjectives = () => {
  return (
    <main className='introduction-and-objectives'>
      <h1>Introducción y Objetivos</h1>
      <section>
        <article>
          <h2>Introducción</h2>
          <p>
            La seguridad y privacidad son temas cada vez más importantes en
            nuestra sociedad actual. Con la creciente tecnología de
            Reconocimiento Facial y el aumento de dispositivos conectados a
            internet, el desarrollo de sistemas de seguridad y privacidad se ha
            vuelto esencial. En este contexto, esta Tesis se propone implementar
            un sistema que combina tecnologías de Reconocimiento Facial y el
            Internet de las Cosas (IoT) para determinar la identidad de una
            persona en Tiempo real. Se utilizará el Reconocimiento Facial en
            Tiempo Real y se comunicará la verificación a través de un protocolo
            MQTT. Este sistema será denominado de ahora en adelante como{' '}
            <i>"DoorCloud"</i>.
            <br />
            <br />
            <i>"DoorCloud"</i> comparará la imagen capturada en tiempo real con
            una base de datos de caras conocidas y se notificará el resultado de
            la comparación mediante un protocolo MQTT en tiempo real. Este
            sistema puede tener aplicaciones en una variedad de entornos, como
            edificios de oficinas, instalaciones gubernamentales, y lugares
            públicos.
          </p>
        </article>
        <article>
          <h2>Objetivos</h2>
          <ol>
            <li>Entender el funcionamiento del protocolo MQTT para IoT.</li>
            <li>
              Entender los diferentes métodos de Reconocimiento de Rostros.
            </li>
            <li>
              Tomar fotos y enviarlas a un modelo de ML de Reconocimiento de
              Rostros a través del protocolo MQTT.
            </li>
            <li>
              Implementar un sistema de ML de Reconocimiento de Rostros que nos
              permita determinar si una persona es conocida o no.
            </li>
            <li>
              Reportar a un usuario si la persona detectada por el sistema de ML
              es conocida o no.
            </li>
          </ol>
        </article>
      </section>
    </main>
  )
}

export { IntroductionAndObjectives }
