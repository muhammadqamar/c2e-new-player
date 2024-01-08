// http.js
import axios from 'axios'

const baseURL = 'https://c2e-player-app-nodejs-stage.curriki.org/api/v1/admin'

const http = axios.create({ baseURL })

function getAuthHeader() {
  const accessToken = localStorage.getItem('accessToken')
  let authHeader = { 'Content-Type': 'application/json' }
  if (accessToken) {
    authHeader = { Authorization: `Bearer ${accessToken}` }
  }
  return authHeader
}

function get(url, headers = {}, params = {}, signal = null) {
  return http.get(url, {
    params,
    signal,
    headers: { ...getAuthHeader(), ...headers },
  })
}

function post(url, data, headers = {}, params = {}) {
  return http.post(url, data, {
    ...params,
    headers: { ...getAuthHeader(), ...headers },
  })
}

function patch(url, data, headers = {}) {
  return http.patch(url, data, { headers: { ...getAuthHeader(), ...headers } })
}

export { http, get, post, patch }
