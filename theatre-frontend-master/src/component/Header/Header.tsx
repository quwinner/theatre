import './Header.scss'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTypesSelector } from '../../hook/useTypesSelector'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Custom Hooks

// Utils

// Interface
interface Props {}

// Component
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Header: FC<Props> = () => {
  const isAuth = useTypesSelector((state) => state.user.isAuth)

  return (
    <header className="header">
      <ul className="header-nav">
        <li className="header-item">
          <Link to="/">Home</Link>
        </li>
        <li className="header-item">
          <Link to="/TheatreSes">Performances</Link>
        </li>
        <li className="header-item">
          <Link to="/theater/1">Theater</Link>
        </li>
        <li className="header-item">
          {isAuth ? <Link to="/profile">Profile</Link> : <Link to="/signup">SignUp</Link>}
        </li>
      </ul>
    </header>
  )
}

export default Header
