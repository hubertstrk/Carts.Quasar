import _ from 'lodash'

const sort = (carts) => {
  return _.sortBy(carts, ['CreationDate'])
}

export const latestCart = (state) => {
  const sortedCarts = _.reverse(sort(state.carts))
  return sortedCarts ? sortedCarts[0] : null
}

export const carts = (state) => {
  return _.reverse(sort(state.carts))
}
