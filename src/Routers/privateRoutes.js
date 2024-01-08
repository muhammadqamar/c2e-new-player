import React from 'react'

import { Navigate, useLocation } from 'react-router-dom'
const ProtectedRoute = ({ children }) => {
  let location = useLocation()

  if (location) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

export default ProtectedRoute
