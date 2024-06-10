import React,{useState} from 'react'
import '../../styles/LandlordLogin.css'
import {useNavigate} from 'react-router-dom'

import "../../styles/LandlordLogin.css"

function LandlordLoginForm({onLogin}) {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    email,
    password
  };

  try{
    const response = await fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(data)
});
    if(!response.ok){
      const result = await response.json();
      alert(result.message)
      
    }else{
      const result = await response.json()
      localStorage.setItem('token', result.token)
      navigate('/landlord');
    }

  }catch(error){
    console.error("error loggin in", error.message)
  }
}

  return (
    <div className='register-landlord-wrapper'>
      <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email: </label>
          <input id='email' type="text" placeholder='enter your Email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
         
          <label htmlFor='password'>Password: </label>
          <input id='password' type="password" placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    
          <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LandlordLoginForm