import './Areas.scss'
import { FC, useState } from 'react'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Custom Hooks
import Chair from './Chair/Chair'
import { useTypesSelector } from '../../../hook/useTypesSelector'
import { apolloClient } from '../../../graphql'
import { BRON } from '../../../graphql/queries'

// Utils

// Interface
interface Props {
  places: any
  isseses: number
}

// Component
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Areas: FC<Props> = (props) => {
  const [selected, setSelected] = useState<any>([])

  const isAuth = useTypesSelector((state) => state.user.isAuth)
  const isAuth2 = useTypesSelector((state) => state.user.user.id)

  const handleOnClickSelect = (id: number) => {
    if (selected.indexOf(id) !== -1) {
      setSelected(selected.filter((x: number) => x !== id))
    } else {
      setSelected([...selected, id])
    }
  }

  const ssad = (id: number, idses: number, iduser: number) => {
    apolloClient
      .mutate({
        mutation: BRON,
        variables: {
          id: id,
          idse: idses,
          idus: iduser,
        },
      })
      .then(({ data }) => {
        console.log(data)
      })
  }

  const handleOnClickSubmit = () => {
    selected.forEach((element: number) => {
      console.log(element, +props.isseses, isAuth2)
      ssad(element, +props.isseses, isAuth2)
      window.location.reload()
    })

    console.log('Order', selected)
  }
  console.log('selected', selected)

  return (
    <div className="areas">
      {props.places.map((row: any, key: number) => {
        return (
          <div key={key} className="areas-row">
            <span className="areas-row__key">{key + 1}</span>
            <div className="areas-row__places">
              {row.map((chair: any) => {
                return (
                  <Chair
                    key={chair.id}
                    isTaked={chair.isTaked}
                    chair={chair}
                    handleOnClickSelect={isAuth ? handleOnClickSelect : () => {}}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
      {selected.length != 0 && isAuth ? (
        <div className="areas-submit">
          <button className="areas-submit__button" onClick={handleOnClickSubmit} type="submit">
            Order {selected.length}
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Areas
