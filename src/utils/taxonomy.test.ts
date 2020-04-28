import React from 'react'
import { Taxonomy } from 'src/types/taxonomy'
import { addTaxonomyFromDataAtParent } from './taxonomy'

const rootList = [
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

const folder01List = [
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

describe('taxonomy construction from endpoint data', () => {
  test('root taxonomy is constructed fine from endpoint data', () => {
    const initalTaxonomy: Taxonomy[] = []
    const resultingTaxonomy = addTaxonomyFromDataAtParent(
      initalTaxonomy,
      rootList,
      null
    )

    expect(resultingTaxonomy).toHaveLength(5)
  })

  test('taxonomy is constructed fine from multiple endpoint data', () => {
    const initalTaxonomy: Taxonomy[] = []
    const firstTaxonomy = addTaxonomyFromDataAtParent(
      initalTaxonomy,
      rootList,
      null
    )
    expect(firstTaxonomy).toHaveLength(5)

    const secondTaxonomy = addTaxonomyFromDataAtParent(
      firstTaxonomy,
      folder01List,
      'folder01'
    )
    expect(secondTaxonomy).toHaveLength(5)
    expect(secondTaxonomy[0].children).toBeDefined()
    expect(secondTaxonomy[0].children).toHaveLength(3)
  })
})
