<template>
<div id="app">
  <menu-bar></menu-bar>
  <template v-if="!hasCarts">
    <div class="empty">
      <div class="empty-icon">
        <img src="../assets/cart.png" />
      </div>
      <h4 class="empty-title">Es ist noch kein Einkaufswagen angelegt</h4>
      <p class="empty-subtitle">Drücke den Button um einen Einkausfwagen zu erstellen und Lebensmittel hinzuzufügen</p>
      <div class="empty-action">
        <button @click="openModal" class="btn btn-primary">Einkaufswagen erstellen</button>
      </div>
    </div>
  </template>
  <template v-else>
    <carts-view :carts="carts"></carts-view>
  </template>
  <add-modal></add-modal>
</div>
</template>

<script>
import _ from 'lodash'
import AddModal from './AddModal'
import MenuBar from './MenuBar'
import CartsView from './CartsView'
import {getAllCarts, getAllTags} from '../api'
import {mapMutations, mapGetters} from 'vuex'

export default {
  components: { MenuBar, CartsView, AddModal },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'sortedCarts'
    ]),
    hasCarts () {
      return this.$store.state.carts.length > 0
    },
    carts () {
      return _.orderBy(this.$store.state.carts, ['Timestamp'], ['desc'])
    }
  },
  methods: {
    ...mapMutations([
      'isLoading',
      'storeCarts',
      'storeTags'
    ]),
    openModal () {
      this.$store.commit('setAddCartActive', true)
    },
    loadAllCarts () {
      this.isLoading(true)
      getAllCarts().then((carts) => {
        this.storeCarts(carts)
        this.isLoading(false)
      })
    },
    loadAllTags () {
      this.isLoading(true)
      getAllTags().then((tags) => {
        this.storeTags(tags)
        this.isLoading(false)
      })
    }
  },
  async mounted () {
    this.loadAllCarts()
    this.loadAllTags()
  }
}
</script>

<style lang="css" scoped>
</style>
