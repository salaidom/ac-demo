import React, { useState, useContext, useEffect } from 'react'
import { Treebeard, TreeNode } from 'react-treebeard'
import { useApolloClient } from '@apollo/react-hooks'
import CircularProgress from '@material-ui/core/CircularProgress'
import { TaxonomyContext, FilesContext, HistoryContext } from 'src/app/Context'
import {
  addTaxonomyFromDataAtParent,
  updateTreeDataBasedOnTaxonomy,
} from 'src/utils/taxonomy'
import { GET_LIST_QUERY } from 'src/apollo/queries'
import { Query, QueryGetListArgs } from 'src/apollo/types'
import treeTheme from 'src/config/treeTheme'

const initialTreeData: TreeNode[] = []

const Tree: React.FC = () => {
  const apolloClient = useApolloClient()
  const [init, setInit] = useState<boolean>(true)
  const { taxonomy, setTaxonomy } = useContext(TaxonomyContext)
  const { setSelectedFileId, setOpenFileIds } = useContext(FilesContext)
  const { setHistoryIds } = useContext(HistoryContext)
  const [data, setData] = useState<TreeNode[]>(initialTreeData)
  const [cursor, setCursor] = useState<TreeNode | null>(null)

  // get initial data for first level taxonomy
  useEffect(() => {
    apolloClient
      .query<Query, QueryGetListArgs>({
        query: GET_LIST_QUERY,
        variables: { id: '' },
      })
      .then(result => {
        setInit(false)
        setTaxonomy(t =>
          addTaxonomyFromDataAtParent(t, result.data.getList, null)
        )
      })
  }, [apolloClient, setTaxonomy])

  // recompute data for tree when taxonomy changes
  useEffect(() => {
    setData(data => updateTreeDataBasedOnTaxonomy(taxonomy, data))
  }, [taxonomy])

  const onToggle = (node: TreeNode, toggled: boolean) => {
    if (cursor) cursor.active = false
    node.active = true
    if (node.children) {
      // this means it is a folder
      node.toggled = toggled
      // load data for folders deeper in taxononmy
      if (node.children.length === 0) {
        node.loading = true
        apolloClient
          .query<Query, QueryGetListArgs>({
            query: GET_LIST_QUERY,
            variables: { id: node.id },
          })
          .then(result => {
            node.loading = false
            setTaxonomy(t =>
              addTaxonomyFromDataAtParent(t, result.data.getList, node.id!)
            )
          })
      }
    }
    if (typeof node.children === 'undefined') {
      // this means it is a file
      setSelectedFileId(node.id!)
      setOpenFileIds(openIds =>
        openIds.indexOf(node.id!) === -1 ? [...openIds, node.id!] : openIds
      )
      setHistoryIds(historyIds => {
        let newHistory =
          historyIds.indexOf(node.id!) === -1
            ? [...historyIds, node.id!]
            : historyIds
        return newHistory.length > 5 ? newHistory.slice(1) : newHistory
      })
    }
    setCursor(node)
    setData([...data])
  }

  if (init) return <CircularProgress />

  return <Treebeard data={data} onToggle={onToggle} style={treeTheme} />
}

export default Tree
