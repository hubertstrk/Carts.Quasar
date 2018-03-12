export const storeCarts = (state, carts) => {
  carts.forEach((c) => {
    state.carts.push(c)
  })
}

export const storeItems = (state, {items}) => {
  state.items = items
}

export const selectCart = (state, {id}) => {
  state.selectedCart = id
}
