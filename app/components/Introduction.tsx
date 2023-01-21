const Introduction = () => {
  return (
    <main className='introduction'>
      <h1>Introducción</h1>
      <p>
        La seguridad y privacidad son temas cada vez más importantes en nuestra
        sociedad actual. Con la creciente tecnología de Reconocimiento Facial y
        el aumento de dispositivos conectados a internet, el desarrollo de
        sistemas de seguridad y privacidad se ha vuelto esencial. En este
        contexto, esta Tesis se propone implementar un sistema que combina
        tecnologías de Reconocimiento Facial y el Internet de las Cosas (IoT)
        para determinar la identidad de una persona en Tiempo real. Se utilizará
        el Reconocimiento Facial en Tiempo Real y se comunicará la verificación
        a través de un protocolo MQTT. Este sistema será denominado de ahora en
        adelante como <i>"DoorCloud"</i>.
        <br />
        <br />
        <i>"DoorCloud"</i> comparará la imagen capturada en tiempo real con una
        base de datos de caras conocidas y se notificará el resultado de la
        comparación mediante un protocolo MQTT en tiempo real. Este sistema
        puede tener aplicaciones en una variedad de entornos, como edificios de
        oficinas, instalaciones gubernamentales, y lugares públicos.
      </p>
    </main>
  )
}

export { Introduction }
