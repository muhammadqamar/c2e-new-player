/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showError: null,
  showSuccess: null,
}

export const c2eSettings = createSlice({
  name: 'c2e-settings',
  initialState,
  reducers: {
    showErrorReducer: (state, action) => {
      state.showError = action.payload
    },
    showSuccessReducer: (state, action) => {
      state.showSuccess = action.payload
    },
  },
})

export const { showErrorReducer, showSuccessReducer } = c2eSettings.actions

export default c2eSettings.reducer
