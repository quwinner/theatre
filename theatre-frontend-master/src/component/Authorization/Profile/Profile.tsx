import './Profile.scss'
import { FC, useState } from 'react'
import { useTypesSelector } from '../../../hook/useTypesSelector'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../../store/user.slice'
import { Link } from 'react-router-dom'

interface Props {}

const Profile: FC<Props> = () => {
  const dispatch = useDispatch()
  const isAuth = useTypesSelector((state) => state.user.user.login)
  const isAuthbalans = useTypesSelector<number>((state) => state.user.user.Balanse)
  return (
    <section className="Profile">
      <div>
        <h1>{'It is you ' + isAuth + ' and you have ' + isAuthbalans + ' money'}</h1>
        <Link
          to="/signup"
          onClick={() => {
            dispatch(removeUser())
          }}
        >
          Sign Out
        </Link>
      </div>
    </section>
  )
}

export default Profile
