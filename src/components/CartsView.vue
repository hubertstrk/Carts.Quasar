<template lang="html">
<div>
  <section>
    <template v-for="(cart, index) in carts">
      <cart-view appear :cart="cart" :key="key(cart)"></cart-view>
    </template>
  </section>
</div>
</template>

<script>

import CartView from './CartView'

export default {
  data () {
    return {
    }
  },
  props: {
    carts: undefined
  },
  head () {
    return {
      title: 'Carts'
    }
  },
  methods: {
    key (cart) {
      return Date.parse(cart.Timestamp)
    }
  },
  components: {
    CartView
  }
}
</script>

<style lang="css" scoped>

</style>
