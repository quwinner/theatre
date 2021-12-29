import { combineReducers } from '@reduxjs/toolkit'

import appReducer from './app.slice'
import userReducer from './user.slice'

export const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
