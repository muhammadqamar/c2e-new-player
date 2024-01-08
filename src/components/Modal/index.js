import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'

import { CrossIcon } from '../IconLibrary'

import PopUp from '../../utils/popup'
import { LmsFormModal } from '../LmsSettings/lmsFormModal'
import { LtiFormModal } from '../LtiTools/ltiFormModal'

const ModalCom = (props) => {
  const { tabs, setLtiModal } = props
  const [show, setShow] = useState(true)

  return (
    <>
      <div className="fixed bg-blueRGB top-0 right-0 w-full h-full z-[1060] overflow-y-auto">
        {show && (
          <div className="min-w-[496px] absolute top-[50%] right-[30%]">
            <PopUp Icon />
          </div>
        )}
        <Button
          className="absolute top-10 right-[3%] bg-transparent !p-[2px]"
          onClick={() => setLtiModal(false)}
        >
          <CrossIcon color="#000" />
        </Button>
        <div className="bg-white !opacity-[1] flex justify-start items-start p-10 w-full h-full max-w-[999px] float-right overflow-auto">
          <div className="h-full min-w-full">
            {tabs === 'lms' ? (
              <LmsFormModal setShow={setShow} setLtiModal={setLtiModal} />
            ) : (
              <LtiFormModal setShow={setShow} setLtiModal={setLtiModal} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalCom
