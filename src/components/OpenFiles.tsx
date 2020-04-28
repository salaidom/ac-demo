import React, { useContext } from 'react'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { FilesContext } from 'src/app/Context'

const useStyles = makeStyles(theme => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const OpenFiles: React.FC = () => {
  const classes = useStyles()
  const {
    selectedFileId,
    setSelectedFileId,
    openFileIds,
    setOpenFileIds,
  } = useContext(FilesContext)

  return (
    <div className={classes.container}>
      <Typography variant="body1">Open files:</Typography>
      {openFileIds.map(fileId => (
        <Chip
          key={fileId}
          className={classes.chip}
          label={fileId}
          color={fileId === selectedFileId ? 'primary' : 'default'}
          onClick={() => setSelectedFileId(fileId)}
          onDelete={() => {
            setOpenFileIds(openFileIds.filter(item => item !== fileId))
            setSelectedFileId('')
          }}
        />
      ))}
    </div>
  )
}

export default OpenFiles
