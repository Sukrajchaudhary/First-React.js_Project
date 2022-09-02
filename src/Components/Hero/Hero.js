import React from 'react'
import './Hero.css'
import solo from '../assets/solo.mp4'

const Hero = () => {
  return (
    <>

    <div className='main'>
      <div className="overlay"></div>
        <video src={solo}  autoPlay loop muted></video>
        <div className="text">
          <h1>Virtual Banking Made Easy</h1>
          <br />
          <p>Sign Up for new Account today and received
           in credit towards your next payment.</p>
           <button type="button" class="btn">Get Start</button>
        </div>
    </div>
    </>
  )
}

export default Hero