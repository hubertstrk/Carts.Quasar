<template>
  <q-timeline-entry :icon="icon" :title="cart.Shop" :subtitle="formatDate(cart.CreationDate)" side="left">
    <div @click.prevent="onCartClick" class="q-title text-tertiary">
      {{cart.Title}}
    </div>
  </q-timeline-entry>
</template>

<script>
import { date } from 'quasar'

export default {
  props: ['cart'],
  data () {
    return {
    }
  },
  computed: {
    selectedCart () {
      return this.$store.state.carts.selectedCart
    },
    icon () {
      if (!this.cart || !this.selectedCart) {
        return
      }
      return this.cart.Id === this.selectedCart.Id ? 'done' : ''
    }
  },
  methods: {
    onCartClick () {
      this.$store.commit('toggleDrawerOpened')
      this.$store.commit('selectCart', {cart: this.cart})
      this.$store.dispatch('loadItems')
      this.$router.push('items')
    },
    formatDate (value) {
      const createdDate = new Date(parseInt(value))
      return date.formatDate(createdDate, 'YYYY-MM-DD')
    }
  }
}
</script>

<style>
</style>
