import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/where-2.jpg'
import where3 from '../assets/images/where-3.jpg'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>When & Where</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Ceremonia Civil</h5>
              <p>
                <i className='ti-location-pin'></i> Av. Independencia 2846, Mar del Plata, Provincia de Buenos Aires
              </p>
              <p>
                <i className='ti-time'></i> <br/><span>09:20am – 09:45am</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Weddding Party</h5>
              <p className='ruta'>
                <i className='ti-location-pin'></i> Acceso a Sierra de los Padres km2.5 7601 Sierra de los Padres, Buenos Aires, Argentina
              </p>
              <p>
                <i className='ti-time'></i> <span>12:00pm - 18:00pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where3} alt='' />
            </div>
            <div className='content'>
              <h5>La Delfina Eventos</h5>
              <p className='mapa'>
                <i className='ti-direction-alt'></i> <a href='https://www.google.com/maps/dir/-38.0043264,-57.5668224/-37.9289286,-57.7648649/@-37.9632234,-57.8047718,11z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0' target='_blank'> Haz Click Aquí para ver el Mapa </a>
              </p>
              <p>
                <i className='ti-direction'></i> Te esperamos el 26/11/2022
                <br />
                <br/>12:00pm Puntual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where
