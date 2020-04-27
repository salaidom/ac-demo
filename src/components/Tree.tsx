import React, { useState, useContext, useEffect } from 'react'
import { Treebeard, TreeNode } from 'react-treebeard'
import { useApolloClient } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import CircularProgress from '@material-ui/core/CircularProgress'
import { TaxonomyContext, SelectedFileContext } from 'src/app/Context'
import {
  addTaxonomyFromDataAtParent,
  updateTreeDataBasedOnTaxonomy,
} from 'src/utils/taxonomy'
import { GET_LIST_QUERY } from 'src/apollo/queries'
import { Query, QueryGetListArgs } from 'src/apollo/types'

const initialTreeData: TreeNode[] = []

const Tree: React.FC = () => {
  const apolloClient = useApolloClient()
  const [init, setInit] = useState<boolean>(true)
  const { taxonomy, setTaxonomy } = useContext(TaxonomyContext)
  const { setFileId } = useContext(SelectedFileContext)
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
      setFileId(node.id!)
    }
    setCursor(node)
    setData([...data])
  }

  if (init) return <CircularProgress />

  return <Treebeard data={data} onToggle={onToggle} />
}

export default Tree
