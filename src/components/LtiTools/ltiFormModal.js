import React, { useState } from 'react'

import { Formik } from 'formik'

import Button from '../../utils/Button'

export const LtiFormModal = ({ setShow, setLtiModal }) => {
  return (
    <Formik
      initialValues={{ toolUrl: '', toolName: '' }}
      validate={(values) => {
        const errors = {}
        if (!values.toolUrl) {
          errors.toolUrl = 'Required'
        }
        if (!values.toolName) {
          errors.toolName = 'Required'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        if (Object.keys(values)?.length) {
          setShow(true)
        } else {
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between h-full"
        >
          <div>
            <div className="w-full flex flex-col items-start">
              <h2 className="text-[#084892] text-left text-[31px] mb-[39px] font-semibold py-[15px] leading-6 border-b-[3px] border-b-[#f8af2c]">
                Add LTI tool
              </h2>
              <div className="w-full flex gap-6 items-start">
                <div className="w-full">
                  <div className="mb-4">
                    <h4 className="heading4">Tool Name:</h4>
                    <input
                      type="text"
                      placeholder="Enter Tool Name"
                      className="input"
                      name="toolName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.toolName}
                    />
                    {errors.toolName && touched.toolName && (
                      <div className="error">{errors.toolName}</div>
                    )}
                    {/* Required */}
                  </div>
                </div>
                <div className="w-full">
                  <div className="mb-4">
                    <h4 className="heading4">Tool URL:</h4>
                    <input
                      type="text"
                      placeholder="Enter Tool URL"
                      className="input"
                      name="toolUrl"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.toolUrl}
                    />
                    {errors.toolUrl && touched.toolUrl && (
                      <div className="error"> {errors.toolUrl}</div>
                    )}
                    {/* Required */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[9px] justify-end">
            <Button
              type="button"
              className=" text-primary py-[4px] rounded-[5.16px] border border-primary px-[30px] shadow-btnSmShadow"
              text={' Cancel'}
              cta={() => {
                setLtiModal(false)
              }}
            />

            <Button
              type="submit"
              bg="bg-[#084892]"
              className="text-white py-[4px] rounded-[5.16px] border border-primary px-[43px] shadow-btnSmShadow"
              text={'Save'}
              disabled={isSubmitting}
              cta={() => {
                // handleLogin('popup');
              }}
            />
          </div>
        </form>
      )}
    </Formik>
  )
}
