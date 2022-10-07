import React from 'react';
import emailjs from '@emailjs/browser';

function RSVP () {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('wedding16/22', 'Ourwedding', e.target, 'wIbu6KyolacXzLaV1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert('Mensaje enviado con éxito, muchas gracias.')
  };

  return (
    <div
      id='rsvp'
      className='section-padding bg-img bg-fixed'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            {' '}
            <span className='oliven-title-meta text-center'>Will you attend?</span>
            <h2 className='oliven-title text-center'>R.S.V.P</h2>
            <br />
            <form method='post' className='row' onSubmit={sendEmail}>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    name='name'
                    id='name'
                    placeholder='Name'
                    required
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Email' name='email'
                    id='email'/>{''}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    cols='30'
                    rows='7'
                    className='form-control'
                    placeholder='Message'
                  ></textarea>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='SEND' />{' '}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSVP
