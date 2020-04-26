import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import theme from 'src/config/theme'
import Layout from 'src/components/Layout'
import { SelectedFileContext, TaxonomyContext } from './Context'
import { Taxonomy } from '../types/taxonomy'

const client = new ApolloClient({
  uri: 'https://react-test.atlasconsulting.cz/',
})

const App: React.FC = () => {
  const [fileId, setFileId] = useState<string>('')
  const [taxonomy, setTaxonomy] = useState<Taxonomy[]>([])

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <SelectedFileContext.Provider value={{ fileId, setFileId }}>
          <TaxonomyContext.Provider value={{ taxonomy, setTaxonomy }}>
            <Layout />
          </TaxonomyContext.Provider>
        </SelectedFileContext.Provider>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App
