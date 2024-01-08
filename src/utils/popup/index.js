import React from 'react'
import { Check, CrossIcon } from '../../components/IconLibrary'
import Button from '../Button'

const PopUp = (props) => {
  const { Icon, text, color, subtitle } = props

  return (
    <div className="max-w-[496px] w-full pt-[16px] pb-[32px] px-[16px]  rounded-lg bg-white shadow-popupShadow">
      {Icon && (
        <div className="w-full cursor-pointer flex justify-end">
          <CrossIcon color="#000" />
          {/* <img src={Icon} alt='logo'/> */}
        </div>
      )}
      <div className="flex flex-col gap-4 justify-center items-center mt-4">
        <Check />
        <p
          className={`max-w-[384px] w-full text-2xl leading-7 font-light m-0 ${
            color ? color : 'text-primary'
          }`}
        >
          {/* {text} */}
          LMS settings added successfully
        </p>
        <Button
          type="button"
          className={`border border-primary shadow-btnShadow ${'text-primary '}`}
          text="Close"
        />
      </div>
    </div>
  )
}

export default PopUp
