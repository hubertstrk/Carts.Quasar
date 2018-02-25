<template lang="html">
  <div>
    <div class="dropdown">
      <a href="#" class="btn btn-link dropdown-toggle" tabindex="0">
        {{active}} <i class="icon icon-caret"></i>
      </a>
      <ul class="menu">
        <li class="menu-item" v-for="opt in options"><a href="#" @click.prevent="onChanged(opt)">{{opt}}</a></li>
      </ul>
    </div>
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
    }
  }
}
</script>

<style lang="css" scoped>
.dropdown {
  margin-top: 10px;
  border: 1px solid rgb(230, 230, 230);
}
</style>
