import { Taxonomy, TaxonomyType } from 'src/types/taxonomy'
import { TreeNode } from 'react-treebeard'

export const addTaxonomyFromDataAtParent = (
  root: Taxonomy[] | null,
  data: Omit<Taxonomy, 'children'>[],
  parent: string | null
) => {
  const newTaxonomies = createTaxonomyArrayFromData(data)

  if (root === null && parent === null) {
    return newTaxonomies
  }

  if (root && parent) {
    root.forEach(item => {
      tryToAssignTaxonomyAtParent(root, newTaxonomies, parent)
    })
  }

  return root ? [...root] : []
}

const tryToAssignTaxonomyAtParent = (
  root: Taxonomy[],
  newTaxonomies: Taxonomy[],
  parent: string
) => {
  root.forEach(item => {
    if (item.id === parent) item.children = newTaxonomies
    if (item.children && item.children.length > 0)
      tryToAssignTaxonomyAtParent(item.children, newTaxonomies, parent)
  })
}

const createTaxonomyArrayFromData = (
  data: Omit<Taxonomy, 'children'>[]
): Taxonomy[] => {
  return data.map(item => ({
    id: item.id,
    name: item.name,
    type: item.type,
    children: [],
  }))
}

export const updateTreeDataBasedOnTaxonomy = (
  root: Taxonomy[],
  prevData?: TreeNode[]
) => {
  console.log('updateTreeDataBasedOnTaxonomy', root, prevData)
  if (!prevData) {
    return root.map(item => ({
      id: item.id,
      name: item.name,
      toggled: false,
      ...(item.type === TaxonomyType.Folder && { children: [] }),
    }))
  }
  root.forEach((item, index) => {
    const pData = prevData[index]
    // previous data does not exists
    if (!pData) {
      prevData[index] = {
        id: item.id,
        name: item.name,
        toggled: false,
        ...(item.type === TaxonomyType.Folder && { children: [] }),
      }
    }

    if (item.children && item.children.length > 0) {
      updateTreeDataBasedOnTaxonomy(item.children, prevData[index].children)
    }
  })

  return prevData ? [...prevData] : []
}
