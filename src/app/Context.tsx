import React, { Dispatch, SetStateAction } from 'react'

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

export default {
  SelectedFileContext,
}
