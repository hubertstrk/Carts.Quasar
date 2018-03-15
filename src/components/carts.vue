<template>
  <div>
    <q-list no-border link>
      <q-list-header>Carts</q-list-header>
      <template v-for="cart in carts">
        <cart :cart="cart" :key="cart.Id"></cart>
      </template>
    </q-list>
  </div>
</template>

<script>
import cart from './cart.vue'

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
  components: {cart}
}
</script>

<style lang="css" scopes>

</style>
