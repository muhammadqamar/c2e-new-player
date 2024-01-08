import React from 'react'

import { useDispatch } from 'react-redux'
import { signUpRequest } from '../Actions/auth'

import SignUpForm from '../components/SignUp'
import C2eLogo from '../assets/images/c2e-logo.svg'

const SignUp = ({ showPassword, setshowPassword }) => {
  const dispatch = useDispatch()

  const handleSignUp = async (formData) => {
    try {
      const user = await dispatch(
        signUpRequest(formData.email, formData.password),
      )
      console.log('Signed up successfully:', user)
    } catch (error) {
      console.error('Error signing up:', error)
    }
  }

  return (
    <>
      <div className="w-full bg-white">
        <div className="w-full max-w-[1440px] m-auto flex justify-center pt-[44px] pr-[82px] pb-[24px] pl-[83px]">
          <div
            className={`max-w-[448px] w-full flex flex-col justify-center items-center gap-[40px]`}
          >
            <img className="max-w-[144px] w-full" src={C2eLogo} alt="logo" />

            <div className="w-full flex gap-[80px] flex-col items-center justify-center">
              <SignUpForm
                showPassword={showPassword}
                setshowPassword={setshowPassword}
                handleSignUp={handleSignUp}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
