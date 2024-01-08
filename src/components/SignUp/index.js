import React from 'react'

import { Link } from 'react-router-dom'

import { Formik } from 'formik'

import { useDispatch } from 'react-redux'
import {
  showErrorReducer,
  showSuccessReducer,
} from '../../Store/reducers/c2eSettings'

import C2eHeadingSubText from '../../utils/C2eHeading'
import C2eLabel from '../../utils/C2eLabel'
import LoginInput from '../../utils/FormElements/loginInput'
import Button from '../../utils/Button'
import Alert from '../../utils/Alert'
import {
  CrossIcon,
  EyeIcon,
  HideEye,
  Loading,
} from '../../components/IconLibrary'

const SignUp = ({ showPassword, setshowPassword, handleSignUp }) => {
  const dispatch = useDispatch()

  return (
    <div className="max-w-[448px] w-full flex gap-[55px] flex-col items-center justify-center">
      {/* heading */}
      <C2eHeadingSubText className="" heading="Signup" />
      {/* <Alert type="error" /> */}
      <Formik
        initialValues={{ firstname: '', lastname: '', email: '', password: '' }}
        validate={(values) => {
          const errors = {}
          const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,26}$/
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
            errors.password = `Password should be between 8 - 26 characters and must include at least one lowercase letter, one uppercase letter, one number, and one symbol`
          }
          return errors
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const result = await handleSignUp(values)

          if (result?.status === 200) {
            // dispatch(showSuccessReducer('Signup successful!'))
            return result
          } else {
            // dispatch(
            //   showErrorReducer('An account with this email already exists!'),
            // )
            setSubmitting(true)
          }
          setSubmitting(false)
          resetForm()
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
                disabled={
                  Object.keys(errors).length > 0 ||
                  Object.values(values).some((value) => !value)
                    ? true
                    : false
                }
                Icon={isSubmitting ? <Loading /> : ''}
                cta={() => {}}
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
                    cta={() => {}}
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
