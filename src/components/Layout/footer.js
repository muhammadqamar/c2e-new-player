import React from 'react'

import Logo from '../../assets/images/footer-logo.svg'

const Footer = () => {
  return (
    <div className="w-full min-h-[32px] bg-white py-1 !pb-5 px-6 flex justify-between items-center relative ">
      <div className="flex items-center gap-6">
        <a href="" className="linkText">
          Terms of Service
        </a>
        <a href="" className="linkText">
          Privacy Policy
        </a>
        <a href="" className="linkText">
          Help & Support
        </a>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-xs font-normal text-[#515151]">Powered by</span>
        <img src={Logo} alt="logo" />
      </div>
    </div>
  )
}

export default Footer
