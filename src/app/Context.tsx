import React, { Dispatch, SetStateAction } from 'react'
import { Taxonomy } from 'src/types/taxonomy'

type SelectedFileContextType = {
  fileId: string | null
  setFileId: Dispatch<SetStateAction<string | null>>
}

export const SelectedFileContext = React.createContext<SelectedFileContextType>(
  {
    fileId: null,
    setFileId: () => {},
  }
)

type TaxonomyContextType = {
  taxonomy: Taxonomy[] | null
  setTaxonomy: Dispatch<SetStateAction<Taxonomy[] | null>>
}

export const TaxonomyContext = React.createContext<TaxonomyContextType>({
  taxonomy: null,
  setTaxonomy: () => {},
})

export default {
  SelectedFileContext,
  TaxonomyContext,
}
