<template>
  <div @click.prevent="onCartClick">
    <q-item>
      <q-item-side icon="shopping cart"/>
      <q-item-main :label="cart.Title" :sublabel="cart.Shop" />
    </q-item>
    <q-item-separator />
  </div>
</template>

<script>
export default {
  props: ['cart'],
  data () {
    return {
    }
  },
  methods: {
    onCartClick () {
      this.$store.commit('toggleDrawerOpened')
      this.$store.commit('selectCart', {cart: this.cart})
      this.$store.dispatch('loadItems')
    }
  }
}
</script>

<style>
</style>
