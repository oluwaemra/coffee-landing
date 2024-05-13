import React from 'react'
import Bar from '../Assets/bar.png'

const News = () => {
  return (
    <div className='news-section-container'>
        <div className='news-head-container'>
            <div className='news-heading-text'>
                <h2 className='work-header'>Latest News</h2>
                <p className='work-body'>Get the latest updates and deeper coffee experience from IMAJI Coffee</p>
            </div>
            <button className='primary-button'>See All News</button>
        </div>
        <div className='news-image'>
            <img src={Bar} alt="" />
        </div>
        <div>
            <h3 className='news-base-text'>Collaboration to Develop Coffee and Beverage Industry Expertise in Indonesia</h3>
            <p className='grey-text'>4 Min • August 19,2022</p>
        </div>
    </div>
  )
}

export default News