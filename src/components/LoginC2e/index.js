import React from 'react'

import { Link } from 'react-router-dom'

import { Formik } from 'formik'

import C2eHeadingSubText from '../../utils/C2eHeading'
import C2eLabel from '../../utils/C2eLabel'
import LoginInput from '../../utils/FormElements/loginInput'
import Button from '../../utils/Button'
import { CrossIcon, EyeIcon, HideEye } from '../../components/IconLibrary'

const LoginForm = ({ showPassword, setshowPassword, handleSignIn }) => {
  return (
    <>
      {/* heading */}
      <C2eHeadingSubText className="" heading="Log in" />
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Please enter correct email format'
          }
          if (!values.password) {
            errors.password = 'Required'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="w-full">
              <div className="w-full flex flex-col gap-6 items-start">
                <div className="w-full">
                  <div className="w-full">
                    <C2eLabel text="Username" />
                    <LoginInput
                      type="email"
                      placeholder="Username"
                      name="email"
                      crossIcon={
                        values.email ? <CrossIcon w="10px" h="100%" /> : ''
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      setFieldValue={setFieldValue}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <div className="error"> {errors.email}</div>
                    )}
                    {/* Required */}
                  </div>
                </div>
                <div className="w-full mb-10">
                  <div className="">
                    <C2eLabel text="Password" />
                    <LoginInput
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      name="password"
                      crossIcon={
                        values.password ? <CrossIcon w="10px" h="100%" /> : ''
                      }
                      inputIcon={
                        values.password ? (
                          !showPassword ? (
                            <EyeIcon />
                          ) : (
                            <HideEye h="25px" />
                          )
                        ) : (
                          ''
                        )
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      showPassword={showPassword}
                      setshowPassword={setshowPassword}
                      setFieldValue={setFieldValue}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <div className="error">{errors.password}</div>
                    )}
                    {/* Required */}
                  </div>
                  <Link to="/forgot-password">
                    <Button
                      type="button"
                      text="Forgot Password?"
                      className="mt-1 cursor-pointer p-0 !mb-0 text-black font-normal tracking-[0.28px]"
                      cta={() => {}}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col gap-8 justify-center">
              <Button
                type="submit"
                bg="bg-[#084892]"
                className="min-w-[242px] justify-center text-white shadow-btnShadow"
                text={'Login'}
                disabled={isSubmitting}
                cta={() => {
                  handleSignIn()
                }}
              />
              {/* <Button
                className="button !bg-[#084892] !text-white py-1 !px-[43px]"
                type="submit"
                disabled={isSubmitting}
              >
                Save
              </Button> */}
              <div className="flex items-center">
                <C2eLabel text="Don’t Have an account?" className="mr-[2px]" />
                <Link to="/sign-up">
                  <Button
                    type="button"
                    bg="bg-transparent"
                    className="text-[#084892] p-0 mb-1"
                    text={'Signup'}
                    cta={() => {}}
                  />
                </Link>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}

export default LoginForm
