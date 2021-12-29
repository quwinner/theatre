import * as ActionCreators from '../../store/user.slice'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useTypesSelector } from '../useTypesSelector'
import { useCallback, useState } from 'react'
import { apolloClient } from '../../graphql'
import { AUTH, SIGNIN, SIGNUP } from '../../graphql/mutation'
import { useHistory } from 'react-router-dom'
import { SignInQL, SignUpQL } from '../../types'
import { browserStorage, getJwtToken } from '../../utils'

export const useUser = () => {
  const [errors, setErrors] = useState([])

  const history = useHistory()
  const dispatch = useDispatch()

  const { setUser, removeUser } = bindActionCreators(ActionCreators, dispatch)
  const { isAuth, user } = useTypesSelector((state) => state.user)

  const signUp = useCallback((variables: SignUpQL) => {
    try {
      apolloClient
        .mutate({
          mutation: SIGNUP,
          variables: variables,
        })

        .then((result) => {
          history.push('/signin')
        })
        .catch((error) => {
          console.log(error)
          setErrors(error?.graphQLErrors[0]?.extensions?.response)
        })
    } catch (e: any) {
      console.log('signUp', e)
    }
  }, [])

  const signIn = useCallback((variables: SignInQL) => {
    try {
      apolloClient
        .mutate({
          mutation: SIGNIN,
          variables: variables,
        })
        .then(({ data }) => {
          dispatch(setUser(data.signIn.user))
          localStorage.setItem('jwt', data.signIn.token)
          history.push('/')
        })
        .catch((error) => {
          console.log(error)
          setErrors(error?.graphQLErrors[0]?.extensions?.response)
        })
    } catch (e: any) {
      console.log('signUp', e)
    }
  }, [])

  const auth = useCallback(() => {
    try {
      apolloClient
        .mutate({
          mutation: AUTH,
          context: {
            headers: {
              authorization: getJwtToken(),
            },
          },
        })
        .then(({ data }) => {
          dispatch(setUser(data.auth.user))
        })
        .catch((error) => {
          console.log('error', error)
          localStorage.removeItem('jwt')
        })
    } catch (e: any) {
      console.log('auth', e)
    }
  }, [])

  return { isAuth, user, signUp, signIn, auth, errors }
}
