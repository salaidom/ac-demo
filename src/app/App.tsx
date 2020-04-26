import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from 'src/config/theme'
import Layout from 'src/components/Layout'
import { SelectedFileContext, TaxonomyContext } from './Context'
import { Taxonomy } from '../types/taxonomy'

const App: React.FC = () => {
  const [fileId, setFileId] = useState<string | null>(null)
  const [taxonomy, setTaxonomy] = useState<Taxonomy[] | null>(null)

  return (
    <ThemeProvider theme={theme}>
      <SelectedFileContext.Provider value={{ fileId, setFileId }}>
        <TaxonomyContext.Provider value={{ taxonomy, setTaxonomy }}>
          <Layout />
        </TaxonomyContext.Provider>
      </SelectedFileContext.Provider>
    </ThemeProvider>
  )
}

export default App
