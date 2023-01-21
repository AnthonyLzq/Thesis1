import { Image } from 'remix-image'

const PreviousKnowledge = () => {
  return (
    <main className='previous-knowledge'>
      <h1>Conocimientos previos</h1>
      <section>
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
              Detección de rostros en una imagen. Esto se puede hacer usando una
              variedad de métodos, incluidas las cascadas de Haar, los patrones
              binarios locales (LBP) y el aprendizaje profundo. Podemos ver un
              ejemplo de esto en la siguiente figura:
              <figure>
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/cc-planinfoextractor.appspot.com/o/step1.png?alt=media'
                  alt='Paso 1 del proceso de Reconocimiento Facial'
                  responsive={[
                    { size: { width: 508, height: 288 } },
                    { maxWidth: 1120, size: { width: 380, height: 216 } },
                    { maxWidth: 900, size: { width: 360, height: 204 } },
                    { maxWidth: 600, size: { width: 300, height: 171 } },
                    { maxWidth: 478, size: { width: 280, height: 160 } },
                    { maxWidth: 422, size: { width: 260, height: 148 } },
                    { maxWidth: 400, size: { width: 240, height: 137 } },
                    { maxWidth: 376, size: { width: 220, height: 126 } }
                  ]}
                />
                <figcaption>Ejemplo de Identificación de Rostros</figcaption>
              </figure>
            </li>
            <li>
              Análisis de rostros. Esto generalmente consiste en identificar las
              propiedades geométricas claves del rostro. El objetivo es
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
                    { maxWidth: 478, size: { width: 280, height: 160 } },
                    { maxWidth: 422, size: { width: 260, height: 148 } },
                    { maxWidth: 400, size: { width: 240, height: 137 } },
                    { maxWidth: 376, size: { width: 220, height: 126 } }
                  ]}
                />
                <figcaption>Ejemplo de Análisis de Rostros</figcaption>
              </figure>
            </li>
            <li>
              Conversión de la imagen en data. Este proceso consiste en obtener
              un conjunto de datos numéricos a partir de los puntos de
              referencia identificados en el paso anterior. Estos datos
              numéricos son conocidos, generalmente, como <i>"faceprint"</i>{' '}
              (huella facial). Análogamente a las huellas digitales, las huellas
              faciales son únicas para cada rostro.
            </li>
            <li>
              Comparación. Finalmente, una vez calculada la huella facial del
              rostro, esta se compara contra un dataset de huellas faciales
              previamente registradas para encontrar alguna coincidencia.
            </li>
          </ol>
        </p>
      </section>
    </main>
  )
}

export { PreviousKnowledge }
