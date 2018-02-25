import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  carts: [],
  tags: [],
  isLoading: false,
  isAddCartActive: false,
  isRemoveCartActive: false,
  cartToDelete: undefined,
  shopOptions: ['Penny', 'Aldi', 'Edeka', 'DM Drogerie', 'Metzger', 'Egal, her damit!'],
  titles: [
    'Hungrig?',
    'Gandalf hat ein Zeichen an meine Tür gemacht',
    'Eltern kommen über\'s Wochenende',
    'Kochen ist die Stärke der Frau',
    'I love cooking!',
    'Biete Sex für Essen',
    'Du kochst, ich esse!',
    'Die Apokalypse scheint nah zu sein',
    'Ich Bier, du Essen',
    'Kochen ist mein zweiter Vorname',
    'Earl Grey Tee kann auch keine Lösung sein '
  ]
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
