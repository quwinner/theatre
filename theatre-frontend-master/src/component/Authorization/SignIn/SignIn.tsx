import { bindActionCreators } from '@reduxjs/toolkit'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypesSelector } from '../../../hook/useTypesSelector'
import { setUser } from '../../../store/user.slice'
import { User } from '../../../types/store/user'
import { Link } from 'react-router-dom'
import './SignIn.scss'
import { apolloClient } from '../../../graphql'
import { SIGNIN } from '../../../graphql/mutation'
import { browserStorage } from '../../../utils'
import { useUser } from '../../../hook/user'

interface Props {}

const SignIn: FC<Props> = () => {
  const { isAuth, user, signUp, signIn, auth, errors } = useUser()

  const [email, setimail] = useState('')
  const [password, setpassword] = useState('')
  const [emailwasactiv, setemailwasactiv] = useState(false)
  const [passwasactiv, setpasswasactiv] = useState(false)
  const [emailerror, setemailerror] = useState(`da`)
  const [passworderror, setpassworderror] = useState(`da`)

  const handleOnBlurChek = (e: any) => {
    switch (e.target.name) {
      case 'email':
        setimail(e.target.value)
        break
      case 'password':
        setpassword(e.target.value)
        break
    }
  }

  const handleOnClickSubmit = (e: any) => {
    signIn({ login: email, password: password })
  }

  const dispatch = useDispatch()

  const SigпInfunc = (e: any) => {}
  return (
    <section className="signin">
      <div>
        <h1>SignIn</h1>
        {emailwasactiv ? <div className="error">{emailerror}</div> : <div></div>}
        <input name="email" onBlur={(e) => handleOnBlurChek(e)} type="text" placeholder="Enter your login..."></input>
        {passwasactiv ? <div className="error">{passworderror}</div> : <div></div>}
        <input
          name="password"
          onBlur={(e) => handleOnBlurChek(e)}
          type="password"
          placeholder="Enter your password..."
        ></input>

        <Link to="/profile" className="da" onClick={handleOnClickSubmit}>
          Sign In{' '}
        </Link>
        <Link to="/signup" className="da">
          Sign Up
        </Link>
      </div>
    </section>
  )
}

export default SignIn
