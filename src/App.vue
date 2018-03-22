<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import {readCookie} from './data/cookie'
import {convert} from './data/helper'

export default {
  name: 'App',
  methods: {
    readSetting (name, commit) {
      const value = readCookie(name)
      if (value !== undefined) {
        this.$store.commit(commit, convert(value))
      }
    }
  },
  mounted () {
    this.$store.dispatch('loadCarts')
      .then(() => {
        const carts = this.$store.getters.carts
        if (carts.length > 0) {
          this.$store.commit('selectCart', {cart: carts[0]})
          this.$store.dispatch('loadItems')
          this.$router.push('items')
        }
      })
    this.readSetting('carts/displayDone', 'setDisplayDone')
    this.readSetting('carts/sorting', 'setSorting')
    this.readSetting('carts/chipAppearance', 'setChipAppearance')
  }
}
</script>

<style>
</style>
