import './Home.scss'
import { FC } from 'react'
import { useTypesSelector } from '../../hook/useTypesSelector'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Custom Hooks

// Utils

// Interface
interface Props {}

// Component
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Home: FC<Props> = () => {
  const isAuth = useTypesSelector((state) => state.user.isAuth)

  return (
    <section>
      <h1>Just Home</h1>
    </section>
  )
}

export default Home
