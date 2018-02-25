import _ from 'lodash'

export const isLoading = (state, value) => {
  state.isLoading = value
}

export const setAddCartActive = (state, value) => {
  state.isAddCartActive = value
}

export const setRemoveCartActive = (state, value) => {
  state.isRemoveCartActive = value
}

export const setCartToDelete = (state, value) => {
  state.cartToDelete = value
}

export const storeCarts = (state, carts) => {
  state.carts = carts
}

export const storeCart = (state, cart) => {
  state.carts.push(cart)
}

export const removeCart = (state, rowKey) => {
  const index = _.findIndex(state.carts, function (c) {
    return c.RowKey === rowKey
  })
  if (index !== -1) {
    state.carts.splice(index, 1)
  }
}

export const storeTags = (state, tags) => {
  state.tags = tags
}

export const storeTag = (state, tag) => {
  state.tags.push(tag)
}

export const removeTag = (state, tag) => {
  const index = _.findIndex(state.tags, function (c) {
    return c.RowKey === tag.RowKey
  })
  if (index !== -1) {
    state.tags.splice(index, 1)
  }
}

export const removeTags = (state, tags) => {
  tags.forEach((el) => {
    removeTag(el)
  })
}
