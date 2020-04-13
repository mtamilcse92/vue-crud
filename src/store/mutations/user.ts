import { SET_USER_FORM, SET_USER_LIST } from '../types/mutations'

export default {
  [SET_USER_FORM] (state: any, payload: any) {
    state.form = payload
  },
  [SET_USER_LIST] (state: any, payload: any) {
    state.list = payload
  }
}
