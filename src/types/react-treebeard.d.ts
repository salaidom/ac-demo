declare module 'react-treebeard' {
  import React from 'react'
  type TreeDecoratorTypes = 'Loading' | 'Toggle' | 'Header' | 'Container'
  type CSS = React.CSSProperties

  export type TreeAnimations = Object
  export interface TreeTheme {
    tree: {
      base: CSS
      node: {
        base: CSS
        link: CSS
        activeLink: CSS
        toggle: {
          base: CSS
          wrapper: CSS
          height: number
          width: number
          arrow: CSS
        }
        header: {
          base: CSS
          connector: CSS
          title: CSS
        }
        subtree: CSS
        loading: CSS
      }
    }
  }
  export type TreeDecorators = { [T in TreeDecoratorTypes]: React.ElementType }
  export interface TreeNode {
    id?: string
    name: string
    children?: Array<TreeNode>
    toggled?: boolean
    active?: boolean
    loading?: boolean
    decorators?: TreeDecorators
    animations?: TreeAnimations
  }
  type TreebeardProps = {
    data: TreeNode | Array<TreeNode>
    onToggle?: (node: TreeNode, toggled: boolean) => void
    style?: TreeTheme
    animations?: TreeAnimations | boolean
    decorators?: TreeDecorators
  }
  export const Treebeard: React.ElementType<TreebeardProps>
  export const decorators: TreeDecorators
  export const animations: TreeAnimations
  export const theme: TreeTheme
}
