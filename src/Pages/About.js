import React from 'react'
import Image1 from '../Assets/portrait space2.jpg'
import Image2 from '../Assets/portrait space4.png'
import Image3 from '../Assets/portrait space3.jpg'
import Image4 from '../Assets/coffee1.jpg'

const About = () => {
  return (
    <div className='about-section-container'> 
        <div className='about-section-text-container'>
            <h2 className='primary-subheading'>
                We Provide Your Space For Your Work or Mini Event With Your Favorite coffee
            </h2>
            <div className='primary-subtext-container'>
                <p className='primary-subtext'>
                Our story begins in 2010 with a simple idea from our founder that the most comfortable place to work is anywhere, because ideas are not limited by space and time, and the most comfortable place is in a café where their favorite coffee is available.
                </p>
                <p className='primary-subtext'>
                All the best local coffee been varieties from throughout Indonesia are available with us. Directly from selected farmers, high-quality beans are processed and roasted to perfection by ourselves, then passed on to our skilled baristas who are passionate about preparing a cup of longed-for happiness from home.
                </p>
            </div>
            <div className='image-section-container'>
              <div className='image1'>
                <img src={Image1} alt="" />
              </div>
              <div className='image2'>
                <img src={Image2} alt="" />
              </div>
              <div className='image3'>
                <img src={Image3} alt="" />
              </div>
              <div className='image4'>
                <img src={Image4} alt="" />
              </div>
            </div>
            
        </div>

    </div>
  )
}

export default About