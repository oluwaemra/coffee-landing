import React from 'react'
import Messages from '../Assets/messages.png'
import Instagram from '../Assets/instagram.png'
import Tiktok from '../Assets/tiktok.png'
import Youtube from '../Assets/youtube.png'
import Twitter from '../Assets/twitter.png'
import Telegram from '../Assets/telegram.png'
import Copy from '../Assets/copyright.png'
import Google from '../Assets/google.png'
import Appstore from '../Assets/appS.png'

const Footer = () => {
  return ( <footer>
     <div>
        <div className='footer-head'>
          <h1>Our Location</h1>
          <p>JI. Bangkringan No 19, RT.11/RW.2, Kota Surabaya, 60124</p>
          <p><strong>Customer Service</strong> +6282-2876-6862</p>
          <p><strong>We are Open from</strong> Sun - Mon 10 AM - 22 PM</p>
        </div>
        <div className="footer-middle"></div>
        <div className='footer-base'>
          <div className="footer-base-top">
            <div className="top-left">
              <img src={Messages} alt="" />
              <img src={Instagram} alt="" />
              <img src={Tiktok} alt="" />
              <img src={Youtube} alt="" />
              <img src={Twitter} alt="" />
              <img src={Telegram} alt="" />
            </div>
            <div className="top-right">
              <p>Delivery Order</p>
              <div className="footer-img">
                <img src={Google} alt="" />
                <img src={Appstore} alt="" />
              </div>
            </div>
          </div>
          <div className="footer-base-bottom">
            <div className="bottom-left">
              <img src={Copy} alt="" />
              <p>2023 IMAJI COFFEE, All rights reserved</p>
            </div>
            <div className="bottom-right">
              <p>Terms and Condition | Privacy Policy</p>
            </div>
          </div>
        </div>

    </div>

  </footer>
   
  )
}

export default Footer;
