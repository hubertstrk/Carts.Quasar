<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          CARTS
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="leftDrawerOpen" content-class="bg-grey-2'" >
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
    openURL
  },
  components: {carts}
}
</script>

<style lang="css" scoped>
</style>
