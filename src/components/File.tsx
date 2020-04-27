import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from '@apollo/react-hooks'

import { FilesContext } from 'src/app/Context'
import { GET_FILE_QUERY } from 'src/apollo/queries'
import { Query, QueryGetFileArgs } from 'src/apollo/types'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    minHeight: 300,
  },
  empty: {
    width: '100%',
    textAlign: 'center',
  },
}))

const File: React.FC = () => {
  const classes = useStyles()
  const { selectedFileId } = useContext(FilesContext)
  const { loading, data } = useQuery<Query, QueryGetFileArgs>(GET_FILE_QUERY, {
    variables: { id: selectedFileId },
  })

  return (
    <div className={classes.container}>
      {selectedFileId ? (
        <>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <Typography variant="h3">{data && data.getFile.name}</Typography>
              <Typography variant="body1">
                {data && data.getFile.text}
              </Typography>
            </>
          )}
        </>
      ) : (
        <Typography variant="subtitle1" className={classes.empty}>
          No file is selected
        </Typography>
      )}
    </div>
  )
}

export default File
