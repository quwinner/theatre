import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { apolloClient } from '../../../graphql'
import { SIGNUP } from '../../../graphql/mutation'
import { useUser } from '../../../hook/user'
import { setUser } from '../../../store/user.slice'
import { User } from '../../../types/store/user'
import './SignUp.scss'

interface Props {}

const SignUP: FC<Props> = () => {
  const { isAuth, user, signUp, signIn, auth, errors } = useUser()

  const [email, setimail] = useState<string>('')
  const [password, setpassword] = useState<string>('')
  const [passwordre, setpasswordre] = useState<string>('')
  const [emailwasactiv, setemailwasactiv] = useState<boolean>(false)
  const [passwasactiv, setpasswasactiv] = useState<boolean>(false)
  const [emailerror, setemailerror] = useState<string>(`da`)
  const [passworderror, setpassworderror] = useState<string>(`da`)

  const history = useHistory()

  const chek = (e: any) => {
    switch (e.target.name) {
      case 'email':
        setimail(e.target.value)
        break
      case 'password':
        setpassword(e.target.value)
        break
      case 'password_rep':
        setpasswordre(e.target.value)
        break
    }
  }

  const handleOnClickSubmit = (e: any) => {
    signUp({ login: email, password: password, rePassword: passwordre })
  }

  const dispatch = useDispatch()
  return (
    <section className="signup">
      <div>
        <h1>SignUp</h1>
        {emailwasactiv ? <div className="error">{emailerror}</div> : <div></div>}
        <input name="email" onBlur={(e) => chek(e)} type="text" placeholder="Enter your login..."></input>
        {passwasactiv ? <div className="error">{passworderror}</div> : <div></div>}
        <input name="password" onBlur={(e) => chek(e)} type="password" placeholder="Enter your password..."></input>
        <input
          name="password_rep"
          onBlur={(e) => chek(e)}
          type="password"
          placeholder="Repead your password..."
        ></input>
        <Link className="da" to="/profile" onClick={handleOnClickSubmit}>
          Sign Up{' '}
        </Link>
        <Link to="/signin" className="da">
          Sign In
        </Link>
      </div>
    </section>
  )
}

export default SignUP
