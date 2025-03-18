// import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contaxt-us'>
      <h1 className='titleee'>
        <span className='icon-envelope'></span>
        Contact us
      </h1>
      <p className='subtitleee'> Contact us for more information and get notified when i publish something new</p>

      <div className="flex">

        <form className=''>

          <div>
            <label htmlFor='email'>Email Adress:</label>
            <input required type='email' id='email'></input>
          </div>

          <div className='flex' style={{marginTop: '24px'}}>
            <label htmlFor='messege'>Your messege:</label>
            <textarea required id='messege'></textarea>
          </div>

        <button className='submit'>Submit</button>

        </form>

        <div className="animationn"></div>
        </div>
        
    </section>
  )
}

export default Contact;
