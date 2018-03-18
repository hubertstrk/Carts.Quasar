<template>
  <q-chip closable :rounded="rounded" :square="square" :color="itemColor" @hide="onClosed" @click="onClicked">
    <div>{{item.Name}}</div>
  </q-chip>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
    }
  },
  methods: {
    onClicked () {
      this.$store.dispatch('setItemState', {id: this.item.Id, isActive: !this.item.IsActive})
    },
    onClosed () {
      this.$store.dispatch('deleteItem', {id: this.item.Id})
    }
  },
  computed: {
    itemColor () {
      return this.item.IsActive ? 'primary' : 'light'
    },
    rounded () {
      if (this.$store.state.view.chipAppearance === 'round') {
        return true
      }
      return false
    },
    square () {
      if (this.$store.state.view.chipAppearance === 'square') {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="css" scoped>
.q-chip {
  margin: 4px;
}
</style>
