import { gql } from 'apollo-boost'

export const GET_FILE_QUERY = gql`
  query GetFile($id: String!) {
    getFile(id: $id) {
      id
      name
      text
    }
  }
`

export const GET_LIST_QUERY = gql`
  query GetList($id: String!) {
    getList(id: $id) {
      id
      name
      type
    }
  }
`
