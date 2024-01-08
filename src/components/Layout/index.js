import React from 'react'
import Sidebar from './sidebar'

const Layout = (props) => {
  const { tabs, setTabs } = props
  return (
    <>
      <Sidebar tabs={tabs} setTabs={setTabs} />
    </>
  )
}

export default Layout
