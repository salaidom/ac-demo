import React, { useState, useContext, useEffect } from 'react'
import { Treebeard, TreeNode } from 'react-treebeard'
import { TaxonomyContext } from 'src/app/Context'
import {
  addTaxonomyFromDataAtParent,
  updateTreeDataBasedOnTaxonomy,
} from 'src/utils/taxonomy'

const initialTreeData: TreeNode[] = []
const firstLoadedResposne = [
  {
    id: 'folder01',
    name: 'Folder 01',
    type: 'FOLDER',
  },
  {
    id: 'folder02',
    name: 'Folder 02',
    type: 'FOLDER',
  },
  {
    id: 'folder03',
    name: 'Folder 03',
    type: 'FOLDER',
  },
  {
    id: 'file01',
    name: 'File 01',
    type: 'FILE',
  },
  {
    id: 'file02',
    name: 'File 02',
    type: 'FILE',
  },
]

const secondLoadedResposne = [
  {
    id: 'folder021',
    name: 'Folder 021',
    type: 'FOLDER',
  },
  {
    id: 'folder022',
    name: 'Folder 022',
    type: 'FOLDER',
  },
  {
    id: 'file021',
    name: 'File 021',
    type: 'FILE',
  },
]

const thirdLoadedResposne = [
  {
    id: 'folder011',
    name: 'Folder 011',
    type: 'FOLDER',
  },
  {
    id: 'folder012',
    name: 'Folder 012',
    type: 'FOLDER',
  },
  {
    id: 'file011',
    name: 'File 011',
    type: 'FILE',
  },
]

const fourthLoadedResposne = [
  {
    id: 'folder0211',
    name: 'Folder 0211',
    type: 'FOLDER',
  },
  {
    id: 'folder0212',
    name: 'Folder 0212',
    type: 'FOLDER',
  },
  {
    id: 'file0213',
    name: 'File 0213',
    type: 'FILE',
  },
]

const Tree: React.FC = () => {
  const { taxonomy, setTaxonomy } = useContext(TaxonomyContext)
  const [data, setData] = useState<TreeNode[]>(initialTreeData)
  const [cursor, setCursor] = useState<TreeNode | null>(null)

  // get initial data for first level taxonomy
  useEffect(() => {
    const tax1 = addTaxonomyFromDataAtParent(
      taxonomy,
      firstLoadedResposne,
      null
    )
    console.log('TAXONOMY 1', tax1)
    const dat1 = updateTreeDataBasedOnTaxonomy(tax1, data)
    console.log('DATA 1', dat1)

    const tax2 = addTaxonomyFromDataAtParent(
      tax1,
      secondLoadedResposne,
      'folder02'
    )
    console.log('TAXONOMY 2', tax2)
    const dat2 = updateTreeDataBasedOnTaxonomy(tax2, dat1)
    console.log('DATA 2', dat2)

    const tax3 = addTaxonomyFromDataAtParent(
      tax2,
      thirdLoadedResposne,
      'folder01'
    )
    console.log('TAXONOMY 3', tax3)
    const dat3 = updateTreeDataBasedOnTaxonomy(tax3, dat2)
    console.log('DATA 3', dat3)

    const tax4 = addTaxonomyFromDataAtParent(
      tax3,
      fourthLoadedResposne,
      'folder021'
    )
    console.log('TAXONOMY 4', tax4)
    const dat4 = updateTreeDataBasedOnTaxonomy(tax4, dat3)
    console.log('DATA 4', dat4)

    setTaxonomy(tax4)
    setData(dat4)
  }, [])

  // recompute data for tree when taxonomy changes
  // useEffect(() => {
  //   setData(data => updateTreeDataBasedOnTaxonomy(taxonomy, data))
  // }, [taxonomy])

  const onToggle = (node: TreeNode, toggled: boolean) => {
    if (cursor) cursor.active = false
    node.active = true
    if (node.children) node.toggled = toggled
    setCursor(node)
    setData([...data])
  }

  return <Treebeard data={data} onToggle={onToggle} />
}

export default Tree
