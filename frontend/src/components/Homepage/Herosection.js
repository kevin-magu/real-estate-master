import React from 'react'
import '../../styles/Homepage.css'
import {MdSettings} from 'react-icons/md'
import {BiLineChart} from 'react-icons/bi'
import { BiMessageRounded } from 'react-icons/bi'
import {FiMonitor} from 'react-icons/fi'
import EstateImage from  '../../images/estate.jpg'

function Herosection() {
  return (
    <div className='homepage-wrapper'>
        <div className='introduction'>
            <div className='intro-content'>
            
              <p>Welcome to Real Estate Master.</p>
              <p>Manage your properties easily with just a few clicks. </p>
            </div>
        </div>

        <div className='cards'>
           <div className='card'>
            <div className='icon-wrapper'>
              <MdSettings className='icon gear-icon'/>
            <FiMonitor className='icon computer-icon'/>
            <p>Effortlessly organize and oversee all your properties from a single platform.</p>
            </div>
            
           </div>

           <div className='card'>
            <div className='icon-wrapper'><BiLineChart className='icon'/></div>
            <p>Gain valuable insights into your real estate investments with comprehensive analytics.</p>
           </div>

           <div className='card'>
            <div className='icon-wrapper'><BiMessageRounded className='icon'/></div>
            <p>Enhance tenant and landlord interactions with seamless communication tools.</p>
            
           </div>

        </div>
    </div>
  )
}

export default Herosection