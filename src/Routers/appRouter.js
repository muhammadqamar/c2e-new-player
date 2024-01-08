import React, { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { getProfileDataRequest } from '../Actions/auth'

import Login from '../pages/login'
import SignUp from '../pages/sign-up'
import ForgotPassword from '../pages/forget-password'
import NewConfirmPassword from '../pages/reset-new-password'

import Dashboard from '../pages/dashboard'

const App = () => {
  const dispatch = useDispatch()

  const [tabs, setTabs] = useState('lms')
  const [ltiModal, setLtiModal] = useState(false)
  const [showPassword, setshowPassword] = useState(false)

  useEffect(() => {
    dispatch(getProfileDataRequest())
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              showPassword={showPassword}
              setshowPassword={setshowPassword}
            />
          }
        />
        <Route
          path="/sign-up"
          element={
            <SignUp
              showPassword={showPassword}
              setshowPassword={setshowPassword}
            />
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/reset-new-password"
          element={
            <NewConfirmPassword
              showPassword={showPassword}
              setshowPassword={setshowPassword}
            />
          }
        />
        <Route
          path="/"
          element={
            <Dashboard
              tabs={tabs}
              setTabs={setTabs}
              ltiModal={ltiModal}
              setLtiModal={setLtiModal}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
