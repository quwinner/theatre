import { gql } from '@apollo/client'

export const CHAIRS = gql`
  query ($id: Int!) {
    chairs(input: $id) {
      number
    }
  }
`

export const SES = gql`
  query {
    ses {
      id
      name
    }
  }
`

export const BRON = gql`
  mutation ($id: Int!, $idse: Int!, $idus: Int!) {
    bron(input: { number: $id, seId: $idse, userId: $idus }) {
      number
    }
  }
`
