import * as api from '../../api'

export const loadCarts = ({commit}) => {
  return api.getCarts().then((carts) => {
    commit('storeCarts', carts)
  })
}

export const loadItems = ({state, commit}) => {
  return api.getItems(state.selectedCart.Id).then((items) => {
    commit('storeItems', {items})
  })
}

export const setItemState = ({state, commit}, {id, isActive}) => {
  return api.setItemState({id, isActive}).then(() => {
    commit('setItemState', {id, isActive})
  })
}

export const deleteItem = ({state, commit}, {id}) => {
  return api.deleteItem(id).then(() => {
    commit('deleteItem', {id})
  })
}

export const addCart = ({state, dispatch, getters}, {title, shop}) => {
  return api.addCart({title, shop})
    .then(() => {
      dispatch('loadCarts').then(() => {
        state.selectedCart = getters.latestCart
      })
    })
}

export const deleteCart = ({state, dispatch, commit}) => {
  return api.deleteCart(state.selectedCart.Id).then(() => {
    dispatch('loadCarts')
    commit('toggleDrawerOpened')
    commit('clearCart')
  })
}
