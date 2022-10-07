import React from 'react'
import Logo from '../assets/images/logo.png'
function Footer () {
  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a href='/'>
                <img src={Logo} alt='' />
                <span>
                  Jazmín <small>&</small> Lucio
                </span>
              </a>
            </h2>
            <p className='copyright'>Noviembre 16, 2022 – Mar del Plata, Argentina</p>
            <p className='copyright'>C.B.U – 0140323503420072280318 </p>
            <p className='copyright'>Alias -JAZLUHOME</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
