<template>
  <div @click.prevent="onCartClick">
    <q-item-separator />
    <q-item tag="label">
      <q-item-side icon="shopping cart"/>
      <q-item-main :label="cart.Title" :sublabel="cart.Shop" />
    </q-item>
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
      this.$router.push('items')
    }
  }
}
</script>

<style>
</style>
