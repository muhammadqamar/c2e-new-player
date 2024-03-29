import React from 'react'

import { Navigate, useLocation } from 'react-router-dom'

const OpenRoute = ({ children }) => {
  let location = useLocation()

  if (location) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return children
}

export default OpenRoute
