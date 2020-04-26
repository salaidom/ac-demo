export type Taxonomy = {
  id: string
  name: string
  type: string
  children: Taxonomy[]
}

export enum TaxonomyType {
  File = 'FILE',
  Folder = 'FOLDER',
}
