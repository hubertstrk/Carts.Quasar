<template>
  <div>
    <!-- <q-chips-input v-model="items" float-label="Einkaufsliste" /> -->
    <template v-if="items">
      <div>
        <item v-for="item in items" :key="item.Id" :item="item"></item>
      </div>
    </template>
  </div>
</template>

<script>
import item from '../components/item.vue'

export default {
  data () {
    return {
    }
  },
  computed: {
    items () {
      if (this.$store.state.carts.items) {
        return this.$store.state.carts.items
      }
    }
  },
  methods: {
  },
  components: {item}
}
</script>

<style lang="css" scopes>
</style>
