import React from 'react'

const C2eHeadingSubText = (props) => {
  const {
    heading,
    HeadingFontSize = '32px',
    HeadingLineHeight = '40px',
    classNameForHeader,
    className,
  } = props
  return (
    <div className={`flex justify-center w-full ${className}`}>
      {heading && (
        <h1
          className={`w-full text-center font-normal text-[${HeadingFontSize}] leading-[${HeadingLineHeight}] text-mainheadingColor m-0 ${classNameForHeader} tracking-[0.64px]`}
        >
          {heading}
        </h1>
      )}
    </div>
  )
}

export default C2eHeadingSubText
