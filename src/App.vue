<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import {auth} from './data/auth'
import {readCookie} from './data/cookie'
import {convert} from './data/helper'
import netlifyIdentity from 'netlify-identity-widget'

window.netlifyIdentity = netlifyIdentity
netlifyIdentity.init()

export default {
  name: 'App',
  methods: {
    readSetting (name, commit) {
      const value = readCookie(name)
      if (value !== undefined) {
        this.$store.commit(commit, convert(value))
      }
    },
    isUserLoggedIn () {
      const user = netlifyIdentity.currentUser()
      console.info(user)
      return user
    }
  },
  mounted () {
    this.readSetting('carts/displayDone', 'setDisplayDone')
    this.readSetting('carts/sorting', 'setSorting')
    this.readSetting('carts/chipAppearance', 'setChipAppearance')

    if (auth.enabled) {
      netlifyIdentity.on('login', (user) => {
        this.$store.dispatch('login')
        this.$router.push('/')
        netlifyIdentity.close()
      })
      netlifyIdentity.on('logout', (user) => {
        this.$store.dispatch('logout')
        this.$router.push('/')
      })
      netlifyIdentity.on('open', () => {
        this.$store.commit('hideApp')
      })
      netlifyIdentity.on('close', () => {
        this.$store.commit('displayApp')
      })

      if (!this.isUserLoggedIn()) {
        netlifyIdentity.open('login')
      } else {
        this.$store.dispatch('login')
        this.$router.push('/')
      }
    } else {
      this.$store.dispatch('login')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
