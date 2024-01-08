import { configureStore } from '@reduxjs/toolkit'
import auth from './reducers/auth'
import c2eSettings from './reducers/c2eSettings'
const store = configureStore({
  reducer: {
    c2eSettings,
    auth,
  },
})
export default store
