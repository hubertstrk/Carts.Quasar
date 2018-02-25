<template lang="html">
  <span>
    <!--<transition appear name="fade">-->
      <label @click.prevent="toggle" class="chip" v-bind:class="[tag.active ? tagActive : tagStrike]">
        {{tag.name}}
        <button @click.stop.prevent="removed" class="btn btn-clear"></button>
      </label>
    <!--</transition>-->
    <!--<span class="label label-primary">primary label</span>-->
  </span>
</template>

<script>
import {toggleTag, deleteTag} from '../api'
import { mapMutations } from 'vuex'
// import _ from 'lodash'
export default {
  data () {
    return {
      tagActive: 'tagActive',
      tagStrike: 'tagStrike'
    }
  },
  props: {
    tag: Object
  },
  methods: {
    ...mapMutations([
      'isLoading', 'removeTag'
    ]),
    removed (event) {
      this.isLoading(true)
      deleteTag(this.tag).then(() => {
        this.removeTag(this.tag)
        this.isLoading(false)
      })
    },
    toggle () {
      this.tag.active = !this.tag.active
      toggleTag(this.tag).then(() => {
      })
    }
  }
}
</script>

<style lang="css">
.chip {
  margin-right: 7px;
}
.chip:hover {
  cursor: pointer;
  background-color: darkgray;
}

.tagActive{
  text-decoration: none;
}
.tagStrike {
  text-decoration: line-through;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
