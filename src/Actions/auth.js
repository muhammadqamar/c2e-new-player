// authActions.js
import {
  signUp,
  signIn,
  getProfileData,
  verifyResetPasswordToken,
  updatePassword,
  forgetPassword,
  resetPassword,
} from '../Services/auth'
import {
  setUser,
  setProfile,
  clearUser,
  updatePasswordStart,
  updatePasswordSuccess,
  updatePasswordFailure,
} from '../Store/reducers/auth'

export const signUpRequest = (email, password) => async (dispatch) => {
  try {
    const user = await signUp(email, password)
    dispatch(setUser(user))
    return user
  } catch (error) {
    throw error
  }
}

export const signInRequest = (email, password) => async (dispatch) => {
  try {
    const user = await signIn(email, password)
    dispatch(setUser(user))
    return user
  } catch (error) {
    throw error
  }
}

export const getProfileDataRequest = () => async (dispatch) => {
  try {
    const profile = await getProfileData()
    dispatch(setProfile(profile))
    return profile
  } catch (error) {
    throw error
  }
}

export const verifyResetPasswordTokenRequest = (token) => async (dispatch) => {
  try {
    const result = await verifyResetPasswordToken(token)
    return result
  } catch (error) {
    throw error
  }
}

export const updatePasswordRequest =
  (password, newPassword) => async (dispatch) => {
    try {
      dispatch(updatePasswordStart())
      const result = await updatePassword(password, newPassword)
      dispatch(updatePasswordSuccess())
      return result
    } catch (error) {
      dispatch(updatePasswordFailure('Error updating password'))
      throw error
    }
  }

export const forgetPasswordRequest = (email) => async (dispatch) => {
  try {
    const result = await forgetPassword(email)
    return result
  } catch (error) {
    throw error
  }
}

export const resetPasswordRequest = (token, password) => async (dispatch) => {
  try {
    const result = await resetPassword(token, password)
    return result
  } catch (error) {
    throw error
  }
}
