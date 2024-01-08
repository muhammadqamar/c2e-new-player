// auth.js
import axios from 'axios'

const BASE_URL = 'https://c2e-player-app-nodejs-stage.curriki.org/api/v1/admin'

const api = axios.create({
  baseURL: BASE_URL,
})

export const signUp = async (email, password) => {
  const response = await api.post('/register', { email, password })
  return response.data
}

export const signIn = async (email, password) => {
  const response = await api.post('/login', { email, password })
  return response.data
}

export const getProfileData = async () => {
  const response = await api.get('/getProfile')
  return response.data
}

export const verifyResetPasswordToken = async (token) => {
  const response = await api.get(`/verifyResetPasswordToken?token=${token}`)
  return response.data
}

export const updatePassword = async (password, newPassword) => {
  const response = await api.patch('/updatePassword', { password, newPassword })
  return response.data
}

export const forgetPassword = async (email) => {
  const response = await api.post('/forgetPassword', { email })
  return response.data
}

export const resetPassword = async (token, password) => {
  const response = await api.post('/resetPassword', { token, password })
  return response.data
}
