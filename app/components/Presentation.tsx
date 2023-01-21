import { Image } from 'remix-image'

const Presentation = () => {
  return (
    <main className='presentation'>
      <p className='presentation'>Seminario de Tesis I:</p>
      <h1>
        Reconocimiento de Rostros en Tiempo Real y Comunicación usando
        protocolos IoT
      </h1>
      <Image
        src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/uni_logo.png?alt=media'
        responsive={[
          { size: { width: 400, height: 532 } },
          { maxWidth: 1720, size: { width: 360, height: 480 } },
          { maxWidth: 1560, size: { width: 320, height: 424 } },
          { maxWidth: 1440, size: { width: 300, height: 400 } },
          { maxWidth: 1260, size: { width: 240, height: 320 } },
          { maxWidth: 1080, size: { width: 220, height: 292 } },
          { maxWidth: 900, size: { width: 200, height: 264 } },
          { maxWidth: 840, size: { width: 180, height: 240 } },
          { maxWidth: 720, size: { width: 160, height: 212 } },
          { maxWidth: 600, size: { width: 120, height: 160 } }
        ]}
        style={{ minWidth: 'auto', minHeight: 'auto' }}
      />
      <p className='name'>Steve Anthony Luzquiños Agama</p>
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
