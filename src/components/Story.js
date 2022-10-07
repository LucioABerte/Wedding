import React from 'react'
import storyImage from '../assets/images/story.jpg'
function Story () {
  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mb-30'>
            <div className='story-img animate-box'>
              <div className='img'>
                {' '}
                <img src={storyImage} className='img-fluid' alt='' />{' '}
              </div>
              <div
                className='story-img-2 story-wedding'
              ></div>
            </div>
          </div>
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Our love.</h4>
            <h3 className='oliven-story-title'>Our Story</h3>
            <p>
              El 28 de Febrero del 2020, creemos que por casualidades de la vida, nos vimos por primera vez. En ese momento nos saludamos por inercia,
              nuestras almas sabian algo que nuestro cuerpo y mente todavia no. Los días pasaron, una Pandemia impedía abrazarnos pero las llamadas y mensajes se hicieron un hábito.
            </p>
            <p>
              Pasaron los meses y rompiendo protocolos, nos encontramos nuevamente. <br/>
              Nos recomendaron quedarnos en casa y entre risas y abrazos, poemas y canciones, pelis y gatitos, creamos la nuestra.
            </p>
            <p>
              Hoy decidimos hacer oficial nuestro compromiso y lo queremos compartir con vos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
