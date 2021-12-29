import './App.scss'
import { FC, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Header from './Header/Header'

import Home from './Home/Home'
import Theatre from './Theatre/Theatre'

import SignUp from './Authorization/SignUp/SIgnUp'
import SignIn from './Authorization/SignIn/SignIn'
import Profile from './Authorization/Profile/Profile'

import Footer from './Footer/Footer'

// Custom Hooks

// Utils
import { useDispatch } from 'react-redux'
//import { useApp } from '../hook/app/useApp'
import AllTheatreSes from './AllTheatreSes/AllTheatreSes'
import { appLoad } from '../store/app.slice'
import { useUser } from '../hook/user'

// Main Component
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const App: FC<any> = () => {
  const { isAuth, user, signUp, signIn, auth, errors } = useUser()

  const dispatch = useDispatch()

  useEffect(() => {
    auth()
    dispatch(appLoad())
  }, [])

  return (
    <>
      <Header />
      <main className="page">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/TheatreSes" component={AllTheatreSes} />
          <Route path="/theater/:id" component={Theatre} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App
