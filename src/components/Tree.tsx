import React, { useState, useContext, useEffect } from 'react'
import { Treebeard, TreeNode } from 'react-treebeard'
import { useApolloClient } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { TaxonomyContext } from 'src/app/Context'
import {
  addTaxonomyFromDataAtParent,
  updateTreeDataBasedOnTaxonomy,
} from 'src/utils/taxonomy'

const GET_LIST_QUERY = gql`
  query GetList($listId: String!) {
    getList(id: $listId) {
      id
      name
      type
    }
  }
`

const initialTreeData: TreeNode[] = []

const Tree: React.FC = () => {
  const apolloClient = useApolloClient()
  const { taxonomy, setTaxonomy } = useContext(TaxonomyContext)
  const [data, setData] = useState<TreeNode[]>(initialTreeData)
  const [cursor, setCursor] = useState<TreeNode | null>(null)

  // get initial data for first level taxonomy
  useEffect(() => {
    apolloClient
      .query({
        query: GET_LIST_QUERY,
        variables: { listId: '' },
      })
      .then(result =>
        setTaxonomy(t =>
          addTaxonomyFromDataAtParent(t, result.data.getList, null)
        )
      )
  }, [apolloClient, setTaxonomy])

  // recompute data for tree when taxonomy changes
  useEffect(() => {
    setData(data => updateTreeDataBasedOnTaxonomy(taxonomy, data))
  }, [taxonomy])

  const onToggle = (node: TreeNode, toggled: boolean) => {
    if (cursor) cursor.active = false
    node.active = true
    if (node.children) node.toggled = toggled
    setCursor(node)
    setData([...data])

    apolloClient
      .query({
        query: GET_LIST_QUERY,
        variables: { listId: node.id },
      })
      .then(result =>
        setTaxonomy(t =>
          addTaxonomyFromDataAtParent(t, result.data.getList, node.id!)
        )
      )
  }

  return <Treebeard data={data} onToggle={onToggle} />
}

export default Tree
