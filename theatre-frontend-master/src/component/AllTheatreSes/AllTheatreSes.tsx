import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apolloClient } from '../../graphql'
import { SES } from '../../graphql/queries'
import './AllTheatreSes.scss'

interface Props {}

interface Place {
  id: number
  name: string
}

const AllTheatreSes: FC<Props> = (props) => {
  const [places, setPlaces] = useState<Place[]>([])

  useEffect(() => {
    apolloClient
      .query({
        query: SES,
        variables: {},
      })
      .then(({ data }) => {
        setPlaces(data.ses)
      })
  }, [])

  return (
    <section className="alltheatreses">
      <div>
        {places.map((a: any, key: number) => {
          return (
            <div key={key}>
              <h1>{a.name}</h1>
              <Link to={'/theater/' + a.id}>Book a seat</Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AllTheatreSes
