import React from 'react'
import Divider from '@material-ui/core/Divider'
import File from './File'
import OpenFiles from './OpenFiles'
import RecentFiles from './RecentFiles'

const RightPane: React.FC = () => {
  return (
    <>
      <OpenFiles />
      <Divider />
      <File />
      <Divider />
      <RecentFiles />
    </>
  )
}

export default RightPane
