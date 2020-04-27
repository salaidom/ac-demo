import React, { useContext, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { SelectedFileContext } from 'src/app/Context'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: 300,
  },
}))

const GET_FILE_QUERY = gql`
  query GetFile($fileId: String!) {
    getFile(id: $fileId) {
      id
      name
      text
    }
  }
`

const File: React.FC = () => {
  const classes = useStyles()
  const { fileId } = useContext(SelectedFileContext)
  const { loading, data, error } = useQuery(GET_FILE_QUERY, {
    variables: { fileId: fileId },
  })

  console.log('FILE', loading, data, error)

  return (
    <div className={classes.container}>
      {fileId ? (
        <>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <Typography variant="h3">{data.getFile.name}</Typography>
              <Typography variant="body1">{data.getFile.text}</Typography>
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
