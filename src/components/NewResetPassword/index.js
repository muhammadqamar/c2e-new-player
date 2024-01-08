import React from 'react'

import { Link } from 'react-router-dom'

import { Formik } from 'formik'

import C2eHeadingSubText from '../../utils/C2eHeading'
import C2eLabel from '../../utils/C2eLabel'
import LoginInput from '../../utils/FormElements/loginInput'
import Button from '../../utils/Button'

import {
  CrossIcon,
  EyeIcon,
  HideEye,
  Loading,
} from '../../components/IconLibrary'

const NewResetPassword = ({
  showPassword,
  setshowPassword,
  handleUpdatePassword,
}) => {
  return (
    <div className="max-w-[448px] w-full flex gap-[70px] flex-col items-center justify-center">
      {/* heading */}
      <C2eHeadingSubText className="" heading="Reset Password" />
      <Formik
        initialValues={{
          oldpassword: '',
          newpassword: '',
          confirmPassword: '',
        }}
        validate={(values) => {
          const errors = {}
          if (!values.oldpassword) {
            errors.oldpassword = 'Required'
          }
          if (!values.newpassword) {
            errors.newpassword = 'Required'
          }
          if (!values.confirmPassword) {
            errors.confirmPassword = 'Required'
          } else if (values.newpassword !== values.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match'
          }

          return errors
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const res = await handleUpdatePassword(values)
          if (res?.status === 200) {
            return res
          } else {
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
            <div className="w-full mb-10">
              <div className="w-full flex flex-col items-start">
                <div className="w-full">
                  <div className="w-full">
                    <C2eLabel text="Old Password" />
                    <LoginInput
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter old password"
                      name="oldpassword"
                      crossIcon={
                        values.oldpassword ? (
                          <CrossIcon w="10px" h="100%" />
                        ) : (
                          ''
                        )
                      }
                      inputIcon={
                        values.oldpassword ? (
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
                      setFieldValue={setFieldValue}
                      showPassword={showPassword}
                      setshowPassword={setshowPassword}
                      value={values.oldpassword}
                    />
                    {errors.oldpassword && touched.oldpassword && (
                      <div className="error">{errors.oldpassword}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mb-10">
              <div className="w-full flex flex-col items-start">
                <div className="w-full">
                  <div className="w-full">
                    <C2eLabel text="New Password" />
                    <LoginInput
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter new password"
                      name="newpassword"
                      crossIcon={
                        values.newpassword ? (
                          <CrossIcon w="10px" h="100%" />
                        ) : (
                          ''
                        )
                      }
                      inputIcon={
                        values.newpassword ? (
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
                      setFieldValue={setFieldValue}
                      showPassword={showPassword}
                      setshowPassword={setshowPassword}
                      value={values.newpassword}
                    />
                    {errors.newpassword && touched.newpassword && (
                      <div className="error">{errors.newpassword}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mb-10">
              <div className="w-full flex flex-col items-start">
                <div className="w-full">
                  <div className="w-full">
                    <C2eLabel text="Confirm Password" />
                    <LoginInput
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Confirm new password"
                      name="confirmPassword"
                      crossIcon={
                        values.confirmPassword ? (
                          <CrossIcon w="10px" h="100%" />
                        ) : (
                          ''
                        )
                      }
                      inputIcon={
                        values.confirmPassword ? (
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
                      value={values.confirmPassword}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div className="error">{errors.confirmPassword}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center flex-col gap-2 justify-center">
              <Button
                type="submit"
                bg="bg-[#084892]"
                className="min-w-[242px] justify-center text-white shadow-btnShadow"
                text={'Change Password'}
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

export default NewResetPassword
