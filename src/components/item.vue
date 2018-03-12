<template>
  <q-chip closable icon="alarm" color="primary">
    {{item.Name}}
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
  }
}
</script>

<style lang="css" scoped>
</style>
