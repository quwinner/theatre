import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { AppState } from '../types'

const initialState: AppState = {
  isLoad: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    appLoad: (state) => {
      state.isLoad = true
    },
  },
})

export const { appLoad } = appSlice.actions
export default appSlice.reducer

// // Action
// export function initApp() {
//   return async (dispatch: Dispatch, getState: () => {}) => {
//     dispatch(appLoad())
//   }
// }
