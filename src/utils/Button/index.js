import React from 'react'

const Button = (props) => {
  const {
    text,
    Icon,
    color,
    bg,
    cta,
    border,
    disabled,
    className,
    p,
    borderText,
    btntext,
  } = props
  return (
    <button
      {...props}
      disabled={disabled ? true : false}
      onClick={(e) => {
        if (cta) {
          cta(e)
        }
      }}
      className={` ${border ? ` w-fit solid border ${border}` : 'w-fit'} ${
        disabled && 'opacity-30'
      } flex w-fit items-center  ${bg} ${color} gap-[8px] rounded-[16px] ${
        text ? ' w-fit py-[10px] px-[24px] ' : 'py-[6px] pl-[12px] pr-[16px]'
      } ${
        p ? 'py-[12px] px-[16px] ' : 'p-[8px] '
      } ${className}  w-fit text-[14px] leading-[20px] font-medium`}
    >
      {Icon}
      {text}
      {borderText && (
        <p className=" m-0 flex border rounded-[16px] solid w-full min-h-[20px] py-[10px] px-[24px] text-placeholderColor text-sm font-medium  ">
          {btntext}
        </p>
      )}
    </button>
  )
}

export default Button
