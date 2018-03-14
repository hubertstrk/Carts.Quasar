export const storeCarts = (state, carts) => {
  carts.forEach((c) => {
    state.carts.push(c)
  })
}

export const storeItems = (state, {items}) => {
  state.items = items
}

export const selectCart = (state, {cart}) => {
  state.selectedCart = cart
}

export const setItemState = (state, {id, isActive}) => {
  const item = state.items.find(i => i.Id === id)
  item.IsActive = isActive
}

export const deleteItem = (state, {id}) => {
  const item = state.items.find(i => i.Id === id)
  item.IsDeleted = true
}
