import React from 'react'
import PortraitPic from '../Assets/portrait space.jpg';
import LandPic from '../Assets/landscape space.jpg'
const Intro = () => {
  return (
    <div className='intro-section-container'>
         <div className='home-text-section'>
        <h1 className='primary-heading'>
            Choose your Coffee & Space
        </h1>
        <p className='primary-text'>
            IMAJI Coffee has been serving 20,000+ cups of coffee and providing a comfortable place for our customers since 2010.
        </p>
        </div>
        <div className='home-image-top'>
            <img src={PortraitPic} alt="" />
        </div>
        <div className='home-image-bottom'>
            <img src={LandPic} alt="" />
        </div>
    </div>
   
    
  );
};

export default Intro