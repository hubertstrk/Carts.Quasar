import Vue from 'vue'
import Vuex from 'vuex'

import carts from './carts'
import view from './view'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    carts,
    view
  }
})

export default store
