import React from 'react'

import { useDispatch } from 'react-redux'
import { signInRequest } from '../Actions/auth'

import LoginForm from '../components/LoginC2e'
import C2eLogo from '../assets/images/c2e-logo.svg'

const Index = ({ showPassword, setshowPassword }) => {
  const dispatch = useDispatch()

  const handleSignIn = async (formData) => {
    try {
      const user = await dispatch(
        signInRequest(formData.email, formData.password),
      )
      console.log('Signed in successfully:', user)
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-[1440px] m-auto flex justify-center pt-[44px] pr-[82px] pb-[24px] pl-[83px]">
        <div
          className={`max-w-[448px] w-full flex flex-col justify-center items-center gap-[40px]`}
        >
          <img className="max-w-[144px] w-full" src={C2eLogo} alt="logo" />
          <div className="w-full flex gap-[80px] flex-col items-center justify-center">
            <LoginForm
              handleSignIn={handleSignIn}
              showPassword={showPassword}
              setshowPassword={setshowPassword}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
