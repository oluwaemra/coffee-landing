import React from 'react'
import White from '../Assets/whiteWall.png'
import Long from '../Assets/longWind.png'
import Geng from '../Assets/geng.jpg'
import Semi from '../Assets/seminarS.png'

const Work = () => {
  return (
    <div className='work-section-container'>
        <div className='work-header-container'>
            <div className='work-text-container'>
                <h1 className='work-header'>8 Comfy Workspace</h1>
                <p className='work-body'>We provide many attractive and unique workspaces so you will have no trouble finding the workspace you want</p>
            </div>
        </div>

        <div className='work-image-container'>
            
            <div className="imageCont">
            <img src={White} alt="" />
                <div className="text-left">
                    <h2>WHITE WALL</h2>
                    <p>Workspace</p>
                </div>
            </div>
            <div className="imageCont">
                <img src={Long} alt="" />
                <div className="text-left">
                    <h2>LONG WINDOW</h2>
                    <p>Workspace</p>
                </div>
            </div>
            <div className="imageCont">
                <img src={Geng} alt="" />
                <div className="text-left">
                    <h2>GENGS SPACE</h2>
                    <p>Workspace</p>
                </div>
            </div>
            <div className='imageCont'>
                <img src={Semi} alt="" />
                <div className="text-left">
                    <h2>SEMINAR</h2>
                    <p>Event Space</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Work