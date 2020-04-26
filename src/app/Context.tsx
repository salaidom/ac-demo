import React, { Dispatch, SetStateAction } from 'react'
import { Taxonomy } from 'src/types/taxonomy'

type SelectedFileContextType = {
  fileId: string
  setFileId: Dispatch<SetStateAction<string>>
}

export const SelectedFileContext = React.createContext<SelectedFileContextType>(
  {
    fileId: '',
    setFileId: () => {},
  }
)

type TaxonomyContextType = {
  taxonomy: Taxonomy[]
  setTaxonomy: Dispatch<SetStateAction<Taxonomy[]>>
}

export const TaxonomyContext = React.createContext<TaxonomyContextType>({
  taxonomy: [],
  setTaxonomy: () => {},
})

export default {
  SelectedFileContext,
  TaxonomyContext,
}
