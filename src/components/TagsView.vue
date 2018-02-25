<template lang="html">
<div class="tags">
  <template v-for="tag in tags">
    <tag-view :tag="tag" :key="key(tag)"></tag-view>
  </template>
</div>
</template>

<script>
import TagView from './TagView.vue'

export default {
  data () {
    return {
    }
  },
  props: {
    tags: Array
  },
  methods: {
    key (tag) {
      return Date.parse(tag.Timestamp)
    }
  },
  components: {
    TagView
  }
}
</script>

<style lang="css">
.tags{
  line-height: 40px;
}
</style>
