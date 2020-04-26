import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from 'src/config/theme'
import Layout from 'src/components/Layout'
import { SelectedFileContext } from './Context'

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string>('first')
  return (
    <ThemeProvider theme={theme}>
      <SelectedFileContext.Provider
        value={{ fileId: selectedFile, setFileId: setSelectedFile }}
      >
        <Layout />
      </SelectedFileContext.Provider>
    </ThemeProvider>
  )
}

export default App
