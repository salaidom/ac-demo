import React, { useState, useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import ApolloClient, { NormalizedCacheObject } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'

import theme from 'src/config/theme'
import Layout from 'src/components/Layout'
import { SelectedFileContext, TaxonomyContext } from './Context'
import { Taxonomy } from '../types/taxonomy'
import { PersistentStorage, PersistedData } from 'apollo-cache-persist/types'

// eslint-disable-next-line
const App: React.FC = props => {
  // eslint-disable-next-line
  const [apolloClient, setApolloClient] = useState<
    ApolloClient<unknown> | undefined
  >(undefined)
  const [fileId, setFileId] = useState<string>('')
  const [taxonomy, setTaxonomy] = useState<Taxonomy[]>([])

  useEffect(() => {
    const cache = new InMemoryCache()
    const client = new ApolloClient({
      cache,
      uri: 'https://react-test.atlasconsulting.cz/',
    })

    persistCache({
      cache,
      storage: window.localStorage as PersistentStorage<
        PersistedData<NormalizedCacheObject>
      >,
    }).then(() => {
      setApolloClient(client)
    })
    return () => {}
  }, [])

  if (apolloClient === undefined) return <div>Loading data from cache...</div>

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
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
