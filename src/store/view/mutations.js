import {writeCookie} from '../../data/cookie'

export const toggleDrawerOpened = (state) => {
  state.leftDrawerOpen = !state.leftDrawerOpen
}

export const setDisplayDone = (state, value) => {
  console.info(`setDisplayDone: ${value}`)
  state.displayDone = value
  writeCookie('carts/displayDone', value)
}

export const setSorting = (state, value) => {
  state.sorting = value
  writeCookie('carts/sorting', value)
}

export const setChipAppearance = (state, value) => {
  state.chipAppearance = value
  writeCookie('carts/chipAppearance', value)
}
