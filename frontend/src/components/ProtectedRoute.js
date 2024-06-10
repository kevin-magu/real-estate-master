import React from 'react'
import { Navigate } from 'react-router-dom'


function ProtectedRoute({component: Component, ...rest}) {
    const isAuthenticated = !!localStorage.getItem('token')
  
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/landlordlogin" />
}

export default ProtectedRoute;