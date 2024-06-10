import React from 'react'
import '../../styles/Assets.css'
import { Link, useNavigate } from 'react-router-dom'
import LogoutButton from '../LogoutButton'

function Assets() {
  return (
    
    <div>
        <h3>Landlord Dashboard</h3>
        <LogoutButton />
        <div className='properties-wrapper'>
        <Link to="" className='properties'>
            <div className='properties-div'>
                <div className='overlay'>
                    <p> VIEW YOUR PROPERTIES</p>
                </div>
            </div>
        </Link>
        <Link to="" className='properties'>
            <div className='properties-div analytics-div'>
                <div className='overlay'>
                    <p>ANALYTICS</p>
                </div>
            </div>
        </Link>
        <Link to="" className='properties'>
            <div className='properties-div tenant-support-div'>
            <div className='overlay'>
                <p>TENANT SUPPORT</p>
            </div>
            </div>
        </Link>
        </div>
    </div>
  )
}

export default Assets