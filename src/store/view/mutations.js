import {writeCookie} from '../../data/cookie'

export const toggleDrawerOpened = (state) => {
  state.leftDrawerOpen = !state.leftDrawerOpen
}

export const setDisplayDone = (state, value) => {
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

export const setLoggedIn = (state) => {
  state.loggedIn = true
}

export const setLoggedOut = (state) => {
  state.loggedIn = false
}

export const hideApp = (state) => {
  state.displayApp = false
}

export const displayApp = (state) => {
  state.displayApp = true
}
