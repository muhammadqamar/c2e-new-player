import React from 'react'

import Button from 'react-bootstrap/Button'

import Lti from '../../assets/images/lti.svg'
import { AddIcon, Search } from '../IconLibrary'

const LtiTools = ({ setLtiModal }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center gap-2 mb-[31px] items-start">
        <img className="w-[48px] h-[100%]" src={Lti} alt="logo" />
        <div className="flex flex-col gap-1">
          <h2 className="heading2">LTI Tools</h2>
          <p className="text-[17px] leading-5 font-normal text-[#767676]">
            Empower Your Learning Journey with Our Comprehensive LMS
          </p>
        </div>
        <div className="w-full flex justify-between items-center rounded bg-[#F7FAFF] p-4">
          <div className="flex items-center gap-4 ">
            <div className="relative">
              <input
                type="text"
                className="w-full max-w-[240px] h-9 p-1 bg-transparent text-[#084892] placeholder-[#084892]  focus:outline-0 border-b-[2px] border-b-[#084892]"
                placeholder="Search"
              />
              <div className="absolute top-1 right-2 bottom-0">
                <Search />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="spanText">Rows per page</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="spanText">Filter By Type</span>
            </div>
          </div>
          <Button
            className="!flex items-center gap-2 !rounded-2xl !bg-[#084892] shadow-btnShadow"
            onClick={() => setLtiModal(true)}
            type="button"
          >
            <AddIcon />
            Add LTI tool
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LtiTools
