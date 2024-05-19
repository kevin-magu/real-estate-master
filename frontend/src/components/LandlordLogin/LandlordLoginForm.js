import React from 'react'
import '../../styles/LandlordLogin.css'


function LandlordLoginForm() {
  return (
    <div className='register-landlord-wrapper'>
      <form>
          
          <label htmlFor=''>Email: </label>
          <input id='email' type="text" />
         
          <label htmlFor='password'>Password: </label>
          <input id='password' type="text" />
    
          <button>Login</button>
      </form>
    </div>
  )
}

export default LandlordLoginForm