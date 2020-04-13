import { GetterTree } from 'vuex'
import * as user from './user'

const getters: GetterTree<any, any> = {
  userForm: (state: any) => state.user.form,
  ...user
}

export default getters
