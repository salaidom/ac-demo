import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'

import { FilesContext, HistoryContext } from 'src/app/Context'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(2),
  },
  chip: {
    marginLeft: theme.spacing(1),
  },
}))

const RecentFiles: React.FC = () => {
  const classes = useStyles()
  const { setSelectedFileId, setOpenFileIds } = useContext(FilesContext)
  const { historyIds, setHistoryIds } = useContext(HistoryContext)
  return (
    <div className={classes.container}>
      <Typography variant="caption">Recent files:</Typography>
      {historyIds.map(fileId => (
        <Chip
          key={fileId}
          className={classes.chip}
          label={fileId}
          variant="outlined"
          size="small"
          color="default"
          onClick={() => {
            setSelectedFileId(fileId)
            setOpenFileIds(openIds =>
              openIds.indexOf(fileId) === -1 ? [...openIds, fileId] : openIds
            )
            setHistoryIds(historyIds => {
              let newHistory =
                historyIds.indexOf(fileId) === -1
                  ? [...historyIds, fileId]
                  : historyIds
              return newHistory.length > 5 ? newHistory.slice(1) : newHistory
            })
          }}
        />
      ))}
    </div>
  )
}

export default RecentFiles
