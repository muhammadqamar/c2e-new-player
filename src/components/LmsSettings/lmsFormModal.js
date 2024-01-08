import React, { useState } from 'react'

import { Formik } from 'formik'

import Button from '../../utils/Button'

export const LmsFormModal = ({ setShow, setLtiModal }) => {
  const [activityChecked, setActivityChecked] = useState(false)
  const [playlistChecked, setPlaylistChecked] = useState(false)
  const [projectChecked, setProjectChecked] = useState(false)

  const handleActivityToggle = () => {
    setActivityChecked(!activityChecked)
  }

  const handlePlaylistToggle = () => {
    setPlaylistChecked(!playlistChecked)
  }

  const handleProjectToggle = () => {
    setProjectChecked(!projectChecked)
  }
  return (
    <Formik
      initialValues={{ url: '', token: '' }}
      validate={(values) => {
        const errors = {}
        if (!values.url) {
          errors.url = 'Required'
        }
        if (!values.token) {
          errors.token = 'Required'
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
                Add LMS sttings
              </h2>
              <div className="w-full flex gap-6 items-start">
                <div className="w-full">
                  <div className="mb-4">
                    <h4 className="heading4">LMS URL:</h4>
                    <input
                      type="text"
                      placeholder="Input text here"
                      className="input"
                      name="url"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.url}
                    />
                    {errors.url && touched.url && (
                      <div className="error"> {errors.url}</div>
                    )}
                    {/* Required */}
                  </div>
                </div>
                <div className="w-full">
                  <div className="mb-4">
                    <h4 className="heading4">LMS access token:</h4>
                    <input
                      type="text"
                      placeholder="Input text here"
                      className="input"
                      name="token"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.token}
                    />
                    {errors.token && touched.token && (
                      <div className="error">{errors.token}</div>
                    )}
                    {/* Required */}
                  </div>
                </div>
              </div>
            </div>
            <h4 className="heading4 mb-4">Visibility</h4>
            <div className="flex items-center text-sm gap-1">
              <h5 className="heading5">Activity</h5>
              <label className="switch">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={activityChecked}
                  onChange={handleActivityToggle}
                />
                <span className="slider"></span>
              </label>

              <h5 className="heading5">Playlist</h5>
              <label className="switch">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={playlistChecked}
                  onChange={handlePlaylistToggle}
                />
                <span className="slider"></span>
              </label>

              <h5 className="heading5">Project</h5>
              <label className="switch">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={projectChecked}
                  onChange={handleProjectToggle}
                />
                <span className="slider"></span>
              </label>
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
