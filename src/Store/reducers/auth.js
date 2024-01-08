// auth.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  profile: null,
  updatingPassword: false,
  updatePasswordError: null,
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setProfile: (state, action) => {
      state.profile = action.payload
    },
    clearUser: (state) => {
      state.user = null
      state.profile = null
    },
    updatePasswordStart: (state) => {
      state.updatingPassword = true
      state.updatePasswordError = null
    },
    updatePasswordSuccess: (state) => {
      state.updatingPassword = false
      state.updatePasswordError = null
    },
    updatePasswordFailure: (state, action) => {
      state.updatingPassword = false
      state.updatePasswordError = action.payload
    },
  },
})

export const {
  setUser,
  setProfile,
  clearUser,
  updatePasswordStart,
  updatePasswordSuccess,
  updatePasswordFailure,
} = auth.actions
export default auth.reducer
