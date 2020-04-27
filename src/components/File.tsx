import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from '@apollo/react-hooks'

import { SelectedFileContext } from 'src/app/Context'
import { GET_FILE_QUERY } from 'src/apollo/queries'
import { Query, QueryGetFileArgs } from 'src/apollo/types'

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: 300,
  },
  toolbar: {
    textAlign: 'right',
  },
}))

const File: React.FC = () => {
  const classes = useStyles()
  const { fileId, setFileId } = useContext(SelectedFileContext)
  const { loading, data } = useQuery<Query, QueryGetFileArgs>(GET_FILE_QUERY, {
    variables: { id: fileId },
  })

  return (
    <div className={classes.container}>
      {fileId ? (
        <>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <div className={classes.toolbar}>
                <Button onClick={() => setFileId('')} variant="outlined">
                  Close File
                </Button>
              </div>
              <Typography variant="h3">{data && data.getFile.name}</Typography>
              <Typography variant="body1">
                {data && data.getFile.text}
              </Typography>
            </>
          )}
        </>
      ) : (
        <Typography variant="h3">No file is selected</Typography>
      )}
    </div>
  )
}

export default File
