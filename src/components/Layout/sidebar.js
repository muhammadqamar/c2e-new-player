import React from 'react'

import C2eLogo from '../../assets/images/c2e-logo.svg'
import Lms from '../../assets/images/lms.svg'
import Lti from '../../assets/images/lti.svg'

import './style.scss'

const Sidebar = (props) => {
  const { tabs, setTabs } = props
  return (
    <div className="w-[136px] min-h-[900px] shrink-0 bg-white shadow-sm">
      <div className="pt-[24px] px-[16px] pb-0 min-h-[inherit]">
        <img className="mb-[24px] cursor-pointer" src={C2eLogo} alt="logo" />
        <div
          className={`tool_box ${tabs === 'lms' ? 'active' : 'noactive'}`}
          onClick={() => setTabs('lms')}
        >
          <img src={Lms} alt="logo" />
          <h3 className="heading3">LMS Settings</h3>
        </div>
        <div
          className={`tool_box ${tabs === 'lti' ? 'active' : 'noactive'}`}
          onClick={() => setTabs('lti')}
        >
          <img src={Lti} alt="logo" />
          <h3 className="heading3">LTI Tools</h3>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
