// authSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  profile: null,
}

const authSlice = createSlice({
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
  },
})

export const { setUser, setProfile, clearUser } = authSlice.actions
export default authSlice.reducer
