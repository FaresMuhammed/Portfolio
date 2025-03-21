// import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'
import Lottie from 'lottie-react';
import done from '../../../src/Animations/Animation - 1742491502200.json'
import Messege from '../../../src/Animations/Animation - 1742493857294.json'


const Contact = () => {
  const [state, handleSubmit] = useForm("mqaperqj");

  return (
    <section className='contaxt-us'>
      <h1 className='titleee'>
        <span className='icon-envelope'></span>
        Contact us
      </h1>
      <p className='subtitleee'> Contact us for more information and get notified when i publish something new</p>

      <div className="flex" style={{justifyContent: 'space-between'}}>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email Adress:</label>
            <input autoComplete='off' required type='email' name='email' id='email'></input>
            <ValidationError
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>

          <div className='flex' style={{marginTop: '24px'}}>
            <label htmlFor='messege'>Your messege:</label>
            <textarea required id='messege' name='message'></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>

        <button type="submit" disabled={state.submitting} className='submit'>{state.submitting ? "Submitting" : 'Submit'}</button>
        {state.succeeded &&( 
          <div style={{display: 'flex' , alignItems: 'center' , marginTop: '20px' , justifyContent:'flex-start'}}>            
            <Lottie loop={false} style={{height: 60}} animationData={done}/>
            <h1 className='done' style={{display: 'flex' , alignItems: 'center' }}>
              Your messege has been sent succcessfully.
            </h1>
          </div>
        ) }
        </form>

        <div className="animationn"></div>
          <Lottie className='contact-animation' style={{height: 355}} animationData={Messege}/>
        </div>
        
    </section>
  )
}

export default Contact;
