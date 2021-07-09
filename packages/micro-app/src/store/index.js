import Vue from 'vue'
import Vuex from 'vuex'
import user from "./modules/user";
import { globalStore } from '@bizfly/shared'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    globalStore,
    user
  }
})

