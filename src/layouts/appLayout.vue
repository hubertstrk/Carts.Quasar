<template>
  <q-layout view="lHh Lpr lFf" v-if="displayApp">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn flat dense @click="leftDrawerOpen = !leftDrawerOpen">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          CARTS
          <span slot="subtitle">Shopping</span>
        </q-toolbar-title>
        <q-btn v-if="loggedIn" flat round dense icon="add shopping cart" @click="onNewCartClicked" aria-label="Add new cart" />
        <q-btn v-if="loggedIn" flat round dense icon="settings" @click="onSettingsClicked" aria-label="Toggle menu on right side" />
        <q-btn flat round dense icon="perm identity" @click="displayAuthModal()" aria-label="Login"></q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="leftDrawerOpen" :content-class="['bg-grey-3']">
      <carts ></carts>
    </q-layout-drawer>

    <q-page-container>
      <template>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </template>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import carts from '../components/carts.vue'
import netlifyIdentity from 'netlify-identity-widget'

export default {
  name: 'LayoutDefault',
  data () {
    return {
    }
  },
  computed: {
    leftDrawerOpen: {
      get () {
        return this.$store.state.view.leftDrawerOpen
      },
      set (value) {
        this.$store.commit('toggleDrawerOpened')
      }
    },
    selectedCart () {
      return this.$store.state.carts.selectedCart
    },
    displayApp () {
      return this.$store.state.view.displayApp
    },
    loggedIn () {
      return this.$store.state.view.loggedIn
    },
    platformStyle () {
      console.info(this.$q.platform.is.mobile)
      return {
        mobile: this.$q.platform.is.mobile,
        desktop: this.$q.platform.is.desktop
      }
    }
  },
  methods: {
    openURL,
    onSettingsClicked () {
      this.$router.push('settings')
    },
    onNewCartClicked () {
      this.$router.push('addCart')
    },
    displayAuthModal () {
      netlifyIdentity.open()
    }
  },
  mounted () {
  },
  components: {carts}
}
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.mobile {
  width: 400px;
}
.desktop {
  width: 700px;
}
</style>
