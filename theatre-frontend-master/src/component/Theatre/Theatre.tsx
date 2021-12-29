import './Theatre.scss'
import { FC, useEffect, useState } from 'react'
import axios from 'axios'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Areas from './Areas/Areas'
import { apolloClient } from '../../graphql'
import { CHAIRS } from '../../graphql/queries'

// Custom Hooks

// Utils

// Interface
interface Props {
  match: any
}

interface Response {
  albumId: number
  id: number
  thumbnailUrl: string
  title: string
  url: string
}

// Component
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Theatre: FC<Props> = (props) => {
  const [state, setState] = useState<string>('')
  let plses
  useEffect(() => {
    axios.get<Response>('https://jsonplaceholder.typicode.com/photos/' + props.match.params.id).then((x) => {
      setState(x.data.url)
    })
  }, [])

  function contains(arr: any[], elem: number) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].number == elem) {
        return true
      }
    }
    return false
  }

  useEffect(() => {
    apolloClient
      .query({
        query: CHAIRS,
        variables: {
          id: +props.match.params.id,
        },
      })
      .then(({ data }) => {
        console.log('data', data)
        console.log(
          'a',
          places.map((a) => {
            return a.map((bb) => {
              return (bb.isTaked = contains(data.chairs, bb.id) ? 1 : 0)
            })
          })
        )
      })
  }, [])

  return (
    <section className="theatre">
      <header className="theatre-header">
        <div className="theatre-img">
          <img src={state} />
        </div>
        <h1 className="theatre-title">Доступные места</h1>
      </header>
      <div className="theatre-content">
        <Areas places={places} isseses={props.match.params.id} />
      </div>
    </section>
  )
}

export default Theatre

let places = [
  [
    { id: 1, isTaked: 0 },
    { id: 2, isTaked: 0 },
    { id: 3, isTaked: 0 },
    { id: 4, isTaked: 0 },
  ],
  [
    { id: 5, isTaked: 0 },
    { id: 6, isTaked: 0 },
    { id: 7, isTaked: 0 },
    { id: 8, isTaked: 0 },
  ],
  [
    { id: 9, isTaked: 0 },
    { id: 10, isTaked: 0 },
    { id: 11, isTaked: 0 },
    { id: 12, isTaked: 0 },
    { id: 13, isTaked: 0 },
  ],
  [
    { id: 14, isTaked: 0 },
    { id: 15, isTaked: 0 },
    { id: 16, isTaked: 0 },
    { id: 17, isTaked: 0 },
    { id: 18, isTaked: 0 },
  ],
  [
    { id: 19, isTaked: 0 },
    { id: 20, isTaked: 0 },
    { id: 21, isTaked: 0 },
    { id: 22, isTaked: 0 },
    { id: 23, isTaked: 0 },
    { id: 24, isTaked: 0 },
  ],
  [
    { id: 25, isTaked: 0 },
    { id: 26, isTaked: 0 },
    { id: 27, isTaked: 0 },
    { id: 28, isTaked: 0 },
    { id: 29, isTaked: 0 },
    { id: 30, isTaked: 0 },
  ],
]
