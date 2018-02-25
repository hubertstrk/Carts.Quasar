<template lang="html">
<div class="modal" :class="{active: isActive}">
  <div class="modal-overlay"></div>
  <div class="modal-container">
    <div class="modal-header">
      <button @click="onCancel" class="btn btn-clear float-right"></button>
      <div class="modal-title"><b>Einkaufswagen löschen</b></div>
    </div>
    <div class="modal-body">
      <div class="content">
        <p>Einkausfwagen wirklich löschen?</p>
      </div>
    </div>
    <div class="modal-footer">
        <button class="btn" @click="onCancel">Abbrechen</button>
        <button class="btn btn-primary" @click="onDeleteCart" :class="{ 'btn-primary': canDelete, 'loading': isDeleting }">Löschen</button>
    </div>
  </div>
</div>
</template>

<script>
import _ from 'lodash'
import {mapMutations} from 'vuex'
import {deleteCart, deleteTags} from '../api'

export default {
  data () {
    return {
      isDeleting: false
    }
  },
  props: {
  },
  methods: {
    ...mapMutations([
      'setRemoveCartActive', 'removeCart', 'removeTags'
    ]),
    onCancel () {
      this.setRemoveCartActive(false)
    },
    onDeleteCart () {
      this.isDeleting = true
      const actionTags = this.deleteTagsAsync().then(() => {
        this.removeTagsSync()
      })
      const actionCart = this.deleteCartAsync().then(() => {
        this.removeCartSync()
      })
      Promise.all([actionTags, actionCart]).then(() => {
        this.isDeleting = false
        this.setRemoveCartActive(false)
      })
    },
    deleteCartAsync () {
      return deleteCart(this.cartToDelete.RowKey)
    },
    removeCartSync () {
      this.removeCart(this.cartToDelete.RowKey)
    },
    deleteTagsAsync () {
      return deleteTags(this.tagsToDelete)
    },
    removeTagsSync () {
      this.removeTags(this.tagsToDelete)
    }
  },
  computed: {
    isActive () {
      return this.$store.state.isRemoveCartActive
    },
    canDelete () {
      return !this.isActive
    },
    cartToDelete () {
      return this.$store.state.cartToDelete
    },
    tagsToDelete () {
      const cartToDelete = this.cartToDelete
      const foundTags = _.filter(this.$store.state.tags, function (element) {
        return element.fkCart === cartToDelete.RowKey
      })
      return foundTags
    }
  }
}
</script>

<style lang="css" scoped>
.content {
  height: 40px;
}
.modal-container {
  width: 80%;
}
</style>
