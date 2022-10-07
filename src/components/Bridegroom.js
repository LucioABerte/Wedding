import React from 'react'
import Bride from '../assets/images/bride.jpg'
import Groom from '../assets/images/groom.jpg'
function Bridegroom () {
  return (
    <div id='couple' className='bridegroom clear section-padding bg-pink'>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-6'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='img'>
                {' '}
                <img src={Bride} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Jazmín César <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Bride</span>
                  <p>
                    <i>
                      En tus brazos aprendí a ser, a confiar y a amar. No hay aprendizaje más bonito que el que construyo contigo.
                      <br/>
                      <br/>
                      Will you Stay?
                    </i>
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img'>
                {' '}
                <img src={Groom} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Lucio Berté <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Groom</span>
                  <p>
                    <i> Mi prioridad, entendimiento,
                        respeto, admiración, amor y fidelidad.
                        Son las elecciones que tengo siempre presentes para contruirnos en familia. Will you Stay?
                    </i>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-12 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title'> We are getting married! </h3>
            <h4 className='oliven-couple-subtitle'>
              Noviembre 16, 2022 — Mar Del Plata, Argentina
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bridegroom
