import React, { useState, useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { SelectedFileContext } from 'src/app/Context'

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: 300,
  },
}))

const File: React.FC = () => {
  const classes = useStyles()
  const { fileId } = useContext(SelectedFileContext)

  return (
    <div className={classes.container}>
      {fileId ? (
        <>
          <Typography variant="h3">Filename</Typography>
          <Typography variant="body1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae modi
            ad odit dolorem mollitia fugit architecto ex eaque minus, illum
            exercitationem porro incidunt velit recusandae commodi quia ab.
            Dignissimos, explicabo.
          </Typography>
        </>
      ) : (
        <Typography variant="h3">No file is selected</Typography>
      )}
    </div>
  )
}

export default File
