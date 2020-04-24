import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import AppBar from 'src/components/AppBar'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
  },
}))

type LayoutProps = {}

const Layout: React.FC<LayoutProps> = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar />
      <div className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Paper elevation={1} className={classes.paper}>
              Left content
            </Paper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper elevation={1} className={classes.paper}>
              Right content
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Layout
