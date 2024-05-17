import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <li>Tenants</li>
                <Link to="/landlord"><li>Landlord</li></Link>
                <li>Account</li>
                <li>About</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar