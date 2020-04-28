import React from 'react'
import { default as MaterialAppBar } from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const AppBar: React.FC = () => {
  return (
    <MaterialAppBar position="static">
      <Toolbar>
        <Typography variant="h6">Atlas consulting demo</Typography>
      </Toolbar>
    </MaterialAppBar>
  )
}

export default AppBar
