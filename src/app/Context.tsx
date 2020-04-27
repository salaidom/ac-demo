import React, { Dispatch, SetStateAction } from 'react'
import { Taxonomy } from 'src/types/taxonomy'

type FilesContextType = {
  selectedFileId: string
  setSelectedFileId: Dispatch<SetStateAction<string>>
  openFileIds: string[]
  setOpenFileIds: Dispatch<SetStateAction<string[]>>
}

export const FilesContext = React.createContext<FilesContextType>({
  selectedFileId: '',
  setSelectedFileId: () => {},
  openFileIds: [],
  setOpenFileIds: () => {},
})

type TaxonomyContextType = {
  taxonomy: Taxonomy[]
  setTaxonomy: Dispatch<SetStateAction<Taxonomy[]>>
}

export const TaxonomyContext = React.createContext<TaxonomyContextType>({
  taxonomy: [],
  setTaxonomy: () => {},
})

type HistoryContextType = {
  historyIds: string[]
  setHistoryIds: Dispatch<SetStateAction<string[]>>
}

export const HistoryContext = React.createContext<HistoryContextType>({
  historyIds: [],
  setHistoryIds: () => {},
})

export default {
  FilesContext,
  TaxonomyContext,
  HistoryContext,
}
