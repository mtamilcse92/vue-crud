import { GET_USER_LIST, SAVE_USER, DELETE_USER } from '../types/actions'
import { SET_USER_LIST } from '../types/mutations'
import axios from '../axios'

export default {
  async [GET_USER_LIST] ({ commit }: { commit: any }): Promise<void> {
    try {
      const { data } = await axios.get('/users')
      commit(SET_USER_LIST, data.users)
    } catch (err) {
      console.error(err)
    }
  },

  async [SAVE_USER] ({ commit, dispatch, state }: { commit: any; dispatch: any; state: any }): Promise<void> {
    try {
      await axios.post('/users', state.form)
      dispatch(GET_USER_LIST)
    } catch (err) {
      console.error(err)
    }
  },

  async [DELETE_USER] ({ dispatch }: { dispatch: any }, id: string): Promise<void> {
    try {
      await axios.delete(`/users/${id}`)
      dispatch(GET_USER_LIST)
    } catch (err) {
      console.error(err)
    }
  }
}
