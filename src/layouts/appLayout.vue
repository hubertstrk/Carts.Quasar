<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          CARTS
          <span slot="subtitle">Shopping</span>
        </q-toolbar-title>
        <q-btn flat round dense icon="add shopping cart" @click="onNewCartClicked" aria-label="Add new cart" />
        <q-btn flat round dense icon="settings" @click="onSettingsClicked" aria-label="Toggle menu on right side" />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="leftDrawerOpen" content-class="" >
      <carts></carts>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import carts from '../components/carts.vue'

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
    }
  },
  methods: {
    openURL,
    onSettingsClicked () {
      this.$router.push('settings')
    },
    onNewCartClicked () {
      this.$router.push('addCart')
    }
  },
  components: {carts}
}
</script>

<style lang="css" scoped>
</style>
