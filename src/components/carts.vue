<template>
  <div>
    <q-list no-border link striped>
      <q-list-header>
        <q-timeline color="secondary" style="padding: 0px 20px;">
          <q-timeline-entry heading>CARTS</q-timeline-entry>
          <template v-for="cart in carts">
            <cart-item :cart="cart" :key="cart.Id"></cart-item>
          </template>
        </q-timeline>
      </q-list-header>
      <!-- <template v-for="cart in carts">
        <cart :cart="cart" :key="cart.Id"></cart>
      </template> -->
    </q-list>
  </div>
</template>

<script>
import cart from './cart.vue'
import cartItem from './cart-time-line-item.vue'

export default {
  data () {
    return {
    }
  },
  computed: {
    carts () {
      return this.$store.getters.carts
    }
  },
  methods: {
  },
  components: {cart, cartItem}
}
</script>

<style lang="css" scopes>

</style>
