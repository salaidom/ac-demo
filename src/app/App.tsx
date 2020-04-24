import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import theme from '../config/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Application</Typography>
    </ThemeProvider>
  )
}

export default App
