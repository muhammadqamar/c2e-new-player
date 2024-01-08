import React from 'react'

import { Link } from 'react-router-dom'

import { Formik } from 'formik'

import C2eHeadingSubText from '../../utils/C2eHeading'
import C2eLabel from '../../utils/C2eLabel'
import LoginInput from '../../utils/FormElements/loginInput'
import Button from '../../utils/Button'
import { CrossIcon, EyeIcon, HideEye } from '../../components/IconLibrary'

const SignUp = ({ showPassword, setshowPassword, setSignIn }) => {
  return (
    <div className="max-w-[448px] w-full flex gap-[55px] flex-col items-center justify-center">
      {/* heading */}
      <C2eHeadingSubText className="" heading="Signup" />
      <Formik
        initialValues={{ firstname: '', lastname: '', email: '', password: '' }}
        validate={(values) => {
          const errors = {}
          const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&].{7,}$/
          if (!values.firstname) {
            errors.firstname = 'Required'
          }

          if (!values.lastname) {
            errors.lastname = 'Required'
          }

          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Please enter correct email format'
          }

          if (!values.password) {
            errors.password = 'Required'
          } else if (!passwordRegex.test(values.password)) {
            errors.password = `At least 8 characters long
               Should contain at least: 1 uppercase letter, 1 lowercase letter, 1 number.`
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
                  <div className="w-full mb-6">
                    <C2eLabel text="First Name" />
                    <LoginInput
                      type="firstname"
                      placeholder="First Name"
                      name="firstname"
                      crossIcon={
                        values.firstname ? <CrossIcon w="10px" h="100%" /> : ''
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      setFieldValue={setFieldValue}
                      value={values.firstname}
                    />
                    {errors.firstname && touched.firstname && (
                      <div className="error"> {errors.firstname}</div>
                    )}
                    {/* Required */}
                  </div>

                  <div className="w-full mb-6">
                    <C2eLabel text="Last Name" />
                    <LoginInput
                      type="lastname"
                      placeholder="Last Name"
                      name="lastname"
                      crossIcon={
                        values.lastname ? <CrossIcon w="10px" h="100%" /> : ''
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      setFieldValue={setFieldValue}
                      value={values.lastname}
                    />
                    {errors.lastname && touched.lastname && (
                      <div className="error"> {errors.lastname}</div>
                    )}
                    {/* Required */}
                  </div>
                  <div className="w-full">
                    <C2eLabel text="Email" />
                    <LoginInput
                      type="email"
                      placeholder="Enter Email"
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
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col gap-8 justify-center">
              <Button
                type="submit"
                bg="bg-[#084892]"
                className="min-w-[242px] justify-center text-white shadow-btnShadow"
                text={'Signup'}
                disabled={isSubmitting}
                cta={() => {
                  // handleLogin('popup');
                }}
              />

              <div className="flex items-center">
                <C2eLabel
                  text="Already Have an account?"
                  className="mr-[2px]"
                />
                <Link to="/login">
                  <Button
                    type="button"
                    bg="bg-transparent"
                    className="text-[#084892] p-0 mb-1"
                    text={'Login'}
                    cta={() => {
                      // setSignIn('login')
                    }}
                  />
                </Link>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default SignUp
