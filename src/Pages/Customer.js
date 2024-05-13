import React, { useState } from 'react'
import Image1 from '../Assets/pour.jpg'
import Image2 from '../Assets/customer2.png'
import Pod from '../Assets/podcast.png'
import Play from '../Assets/play2.png'
import Pause from '../Assets/resume.png'
import Back from '../Assets/backward.png'
import Forward from '../Assets/forward.png'
import Timeline from '../Assets/timeline.png'
import Volume from '../Assets/volume.png'



const Customer = () => {


  const [value, setValue] = useState(false);
  return (
    <div className='customer-section-container'>
        <div className='customer-heading'>
            <h2 className='cust-primary-heading'>We Grow Together With Our Customer</h2>
        </div>
        <div className='customer-body'>
            <div className='customer-body-text'>
                <p>We believe that we are big not because of us but because of theem. they are the ones who motivate us to continue to innovate to provide a quality coffee taste and comfortable space that is getting better everyday.</p>
                <button className='primary-button'>Explore Other Event</button>
            </div>
            <div className='customer-image'>
              <div className='customer-image1'>
                <img src={Image1} alt="" />
                <div className="text-bottom">
                    <h2>LATTE ART WORKSHOP</h2>
                    <p className='menu-comment'>20 Feb 2023</p>
                </div>
              </div>
              <div className='customer-image1'>
                <img src={Image2} alt="" />
                <div className="text-bottom">
                  <h2>EXHIBITION COFFEE HARDWARE</h2>
                  <p className='menu-comment'>20 Mar 2023</p>
                </div>
              </div>
            </div>
        </div>
        <div className='customer-music-image'>
              <div className='coffee-image'>
                <div className='coffee-items'>
                  <img src={Pod} alt="" />
                  <p>Imaji Coffee Podcast</p>
                </div>
              </div>
              <div className='music-container'>
                <div className='music-top'>
                  <div className='main-text'>
                    <h2 className='music-primary-heading'>Mix The Taste of Indonesian Coffee</h2>
                    <p>Feb 2023 . 1 hr 13 min</p>
                  </div>
                  <div className='side-text'>
                    <p>Other Episode</p>
                    <img src="" alt="" />
                  </div>
                </div>
                <div className='music-bottom'>
                  <div className='play-button-section'>
                    <div onClick={()=> setValue(!value)} className='play-button'>
                      { value ? <img src={Play} alt="" /> : <img src={Pause} alt="" /> }
                    </div>
                    <div className='move-container'>
                      <img src={Back} alt="" />
                      <p>10s</p>
                    </div>
                    <div className='move-container'>
                      <img src={Forward} alt="" />
                      <p>10s</p>
                    </div>
                  </div>
                  <div className='details-section'>
                    <div className='timeline-container'>
                      <img src={Timeline} alt="" />
                      <p>00:03/1:13:56</p>
                    </div>
                    <div className='speaker'>
                      <img src={Volume} alt="" />
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Customer