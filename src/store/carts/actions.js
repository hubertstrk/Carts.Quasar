import * as api from '../../api'

export const loadCarts = ({commit}) => {
  api.getCarts().then((carts) => {
    commit('storeCarts', carts)
  })
}

export const loadItems = ({state, commit}) => {
  const selectedCart = state.selectedCart
  api.getItems(selectedCart).then((items) => {
    commit('storeItems', {items})
  })
}
