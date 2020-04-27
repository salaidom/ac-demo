export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  getList: Array<ListItem>
  getFile: File
}

export type QueryGetListArgs = {
  id?: Maybe<Scalars['String']>
}

export type QueryGetFileArgs = {
  id: Scalars['String']
}

export type ListItem = {
  __typename?: 'ListItem'
  id: Scalars['String']
  name: Scalars['String']
  type: Item_Type
}

export type File = {
  __typename?: 'File'
  id: Scalars['String']
  name: Scalars['String']
  text: Scalars['String']
}

export enum Item_Type {
  File = 'FILE',
  Folder = 'FOLDER',
}
