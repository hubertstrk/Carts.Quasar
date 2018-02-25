// import _ from 'lodash'

// export const sortedCarts = (state) => {
//   const copy = _.cloneDeep(state.carts)
//   if (!copy) { return }
//   copy.sort(desc)
//   return copy
// }

// export const sortedTags = (state) => {
//   const copy = _.cloneDeep(state.tags)
//   if (!copy) { return }
//   copy.sort(asc)
//   return copy
// }

// export const getTagsById = (state, getters, rowKey) => {
//   return getters.filterTagsById(rowKey)
// }

// export const filterTagsById = state => rowKey => {
//   return _.filter(state.tags, {RowKey: rowKey})
// }

// function desc (a, b) {
//   return Date.parse(b.Timestamp) - Date.parse(a.Timestamp)
// }

// function asc (a, b) {
//   return Date.parse(a.Timestamp) - Date.parse(b.Timestamp)
// }
