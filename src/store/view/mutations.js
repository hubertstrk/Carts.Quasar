export const toggleDrawerOpened = (state) => {
  state.leftDrawerOpen = !state.leftDrawerOpen
}

export const setDisplayDone = (state, value) => {
  state.displayDone = value
}

export const setSorting = (state, value) => {
  state.sorting = value
}

export const setChipAppearance = (state, value) => {
  state.chipAppearance = value
}
