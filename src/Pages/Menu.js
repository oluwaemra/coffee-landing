import React from 'react'
import Coffee from '../Assets/coffee2.jpg'
import Sugar from '../Assets/sugar.jpg'
import Pack from '../Assets/pack.png'

const Menu = () => {
  return (
    <div className='menu-section-container'>
      <div className='menu-header-container'>
        <div className='menu-text-container'>
            <h3 className='menu-text-heading'>Find Your Favorite Menu</h3>
        </div>
        <div className='menu-text-button'>
            <button className='primary-button'>Explore Other Menu</button>
        </div>
      </div>


      <div className='menu-items'>
        <div className='menu-one'>
          <img src={Coffee} alt="" />
          <p className='menu-title'>RISTRETTO BIANCO</p>
          <p className='menu-caption'>Available Only at Cafe and Delivery</p>
          <p className='menu-price'>$5,00</p>
          <p className='menu-comment'>Get 20% Off in App</p>
        </div>
        <div className='menu-two'>
          <img src={Sugar} alt="" />
          <p className='menu-title'>FRENCH TOAST WITH SUGAR</p>
          <p className='menu-caption'>Available Only at Cafe and Delivery</p>
          <p className='menu-price'>$5,00</p>
          <p className='menu-comment'>Get 20% Off in App</p>
        </div>
        <div className='menu-three'>
          <img src={Pack} alt="" />
          <p className='menu-title'>AT HOME HOUSE BLEND</p>
          <p className='menu-caption'>Available Only at Cafe and Delivery</p>
          <p className='menu-price'>$5,00</p>
          <p className='menu-comment'>Get 20% Off in App</p>
        </div>
      </div>
        


    </div>
  )
}

export default Menu