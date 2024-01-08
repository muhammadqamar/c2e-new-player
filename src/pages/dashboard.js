import React from 'react'

import LmsSettings from '../components/LmsSettings/lmsSettings'
import LtiTools from '../components/LtiTools/ltiTools'

import ModalCom from '../components/Modal'
import Layout from '../components/Layout'
import Footer from '../components/Layout/footer'

const Dashboard = (props) => {
  const { tabs, setTabs, ltiModal, setLtiModal } = props

  return (
    <div className="flex">
      <Layout tabs={tabs} setTabs={setTabs} />

      <div className="w-full bg-[#f1f1f1]">
        {ltiModal && <ModalCom tabs={tabs} setLtiModal={setLtiModal} />}

        <div className="w-full flex justify-start min-h-[900px] items-start">
          <div className="w-full min-h-[850px] p-[24px] bg-white !m-6">
            {tabs === 'lms' ? (
              <LmsSettings ltiModal={ltiModal} setLtiModal={setLtiModal} />
            ) : (
              <LtiTools ltiModal={ltiModal} setLtiModal={setLtiModal} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
