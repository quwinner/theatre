import * as ActionCreators from '../../store/app.slice'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useTypesSelector } from '../useTypesSelector'

export const useApp = () => {
  const dispatch = useDispatch()

  const { appLoad } = bindActionCreators(ActionCreators, dispatch)
  const { isLoad } = useTypesSelector((state) => state.app)

  return { appLoad, isLoad }
}
