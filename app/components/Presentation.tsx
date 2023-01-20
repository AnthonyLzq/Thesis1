import { Image } from 'remix-image'

// TODO: add date of presentation
const Presentation = () => {
  return (
    <main>
      <p className='title-presentation'>Seminario de Tesis I:</p>
      <h1 className='title'>
        Reconocimiento de Rostros en Tiempo Real y Comunicación usando
        protocolos IoT
      </h1>
      <Image
        src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/uni_logo.png?alt=media'
        responsive={[{ maxWidth: 1560, size: { width: 400, height: 532 } }]}
      />
      <p>Steve Anthony Luzquiños Agama</p>
      <p className='date'>
        {new Intl.DateTimeFormat('es-ES', {
          month: 'long',
          year: 'numeric',
          day: 'numeric'
        }).format(new Date())}
      </p>
    </main>
  )
}

export { Presentation }
