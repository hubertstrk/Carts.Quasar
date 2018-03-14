import * as api from '../../api'

export const loadCarts = ({commit}) => {
  api.getCarts().then((carts) => {
    commit('storeCarts', carts)
  })
}

export const loadItems = ({state, commit}) => {
  api.getItems(state.selectedCart.Id).then((items) => {
    commit('storeItems', {items})
  })
}

export const setItemState = ({state, commit}, {id, isActive}) => {
  api.setItemState({id, isActive}).then(() => {
    commit('setItemState', {id, isActive})
  })
}

export const deleteItem = ({state, commit}, {id}) => {
  api.deleteItem(id).then(() => {
    commit('deleteItem', {id})
  })
}
