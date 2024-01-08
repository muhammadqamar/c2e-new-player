import React from 'react'

const C2eLabel = (props) => {
  const {
    text,
    showCaret,
    required,
    Icon,
    color = 'black',
    className,
    textSize = 'text-[14px]',
    type,
    isLower,
  } = props
  return type === 'heading-bar' ? (
    <label
      className={`flex gap-[4px] border-dashed border-[1px] border-[#605DAF] pb-[6px] bold text-[14px] text-[#605DAF] items-center ${className} ${
        isLower ? '' : 'capitalize'
      }`}
    >
      {text}
    </label>
  ) : (
    <label
      className={`flex gap-[4px] items-center mb-1  ${className} ${
        isLower ? '' : 'capitalize'
      }`}
    >
      {Icon}
      <span
        className={`${textSize} leading-[20px] tracking-[0.28px] font-normal text-[${color}] `}
      >
        {text}
      </span>
      {required && <span className="text-[red] leading-[0]">*</span>}
    </label>
  )
}

export default C2eLabel
