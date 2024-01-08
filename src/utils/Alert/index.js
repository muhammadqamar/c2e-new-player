import React, { useEffect } from 'react'

import Alert from 'react-bootstrap/Alert'

import { useSelector, useDispatch } from 'react-redux'

import {
  showErrorReducer,
  showSuccessReducer,
} from '../../Store/reducers/c2eSettings'

const C2eAlert = ({ type }) => {
  const { showError, showSuccess } = useSelector((state) => state.c2eSettings)

  const dispatch = useDispatch()

  useEffect(() => {
    if (showError || showSuccess) {
      setTimeout(() => {
        dispatch(showErrorReducer(null))
        dispatch(showSuccessReducer(null))
      }, 10000)
    }
  }, [showError, showSuccess])

  return (
    <>
      {showError && type === 'error' && (
        <div className="w-full">
          <Alert
            className="flex justify-between w-full text-center allert_danger"
            variant={'danger'}
          >
            <div className="flex gap-[10px]">
              <p className="text-[14px] leading-[20px] text-[#995B67] font-normal m-0">
                {showError}
              </p>
            </div>
          </Alert>
        </div>
      )}

      {showSuccess && (
        <div className=" mt-[30px] w-full ">
          <Alert
            className="flex justify-between w-full text-center allert_success"
            variant={'success'}
          >
            <div className="flex gap-[12px]">
              <p className="text-[14px] leading-[20px] text-[#457332] font-normal m-0">
                {showSuccess}
              </p>
            </div>
          </Alert>
        </div>
      )}
    </>
  )
}

export default C2eAlert
