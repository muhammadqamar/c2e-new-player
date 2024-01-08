import React from 'react'

const LoginInput = (props) => {
  const posRight = props.name === 'password' ? 'right-[28px]' : 'right-[28px]'

  return (
    <div className="flex relative">
      <input
        {...props}
        className={`flex max-w-[432px] text-sm w-full h-[46px] py-2 pl-2 pr-13 placeholder-[#959595] !placeholder:text-sm placeholder:font-normal justify-center items-center !rounded border border-[#959595] bg-white`}
      />

      {props.crossIcon && (
        <span
          onClick={() => props?.setFieldValue(props.name, '')}
          className={`absolute  ${posRight} top-[18px] cursor-pointer`}
        >
          {props.crossIcon}
        </span>
      )}
      {props.inputIcon && (
        <span
          onClick={() => props?.setshowPassword(!props?.showPassword)}
          className="absolute right-[46px] top-[11px] cursor-pointer"
        >
          {props.inputIcon}
        </span>
      )}
    </div>
  )
}

export default LoginInput
