import React from 'react'

import { Link } from 'react-router-dom'

import { Formik } from 'formik'

import C2eHeadingSubText from '../../utils/C2eHeading'
import C2eLabel from '../../utils/C2eLabel'
import LoginInput from '../../utils/FormElements/loginInput'
import Button from '../../utils/Button'
import { CrossIcon } from '../../components/IconLibrary'

const ForgetForm = () => {
  return (
    <div className="max-w-[448px] w-full flex gap-[70px] flex-col items-center justify-center">
      {/* heading */}
      <C2eHeadingSubText className="" heading="Reset Password" />
      <Formik
        initialValues={{ email: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Please enter correct email format'
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
            <div className="w-full mb-10">
              <div className="w-full flex flex-col items-start">
                <div className="w-full">
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
              </div>
            </div>
            <div className="flex items-center flex-col gap-2 justify-center">
              <Link to="/reset-new-password">
                <Button
                  type="button"
                  bg="bg-[#084892]"
                  className="min-w-[242px] justify-center text-white shadow-btnShadow"
                  text={'Get verification link'}
                  cta={() => {}}
                />
              </Link>
              <div className="flex items-center">
                <Link to="/login">
                  <Button
                    type="button"
                    bg="bg-transparent"
                    className="text-[#084892] p-0 !mb-0"
                    text={'Back to Login'}
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

export default ForgetForm
