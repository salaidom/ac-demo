import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from 'src/config/theme'
import Layout from 'src/components/Layout'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  )
}

export default App
