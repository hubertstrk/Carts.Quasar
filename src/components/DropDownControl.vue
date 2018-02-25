<template lang="html">
  <div class="form-group">
    <select class="form-select">
      <template v-for="opt in options">
        <option :selected="isSelected(opt)" @click="onChanged(opt)">{{opt}}</option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    options: Array,
    active: String
  },
  methods: {
    onChanged (value) {
      this.$emit('changed', value)
    },
    isSelected (opt) {
      return opt === this.active
    }
  }
}
</script>

<style lang="html">

</style>
