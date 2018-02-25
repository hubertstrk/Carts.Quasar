<template>
  <div class="modal" :class="{active: isActive}">
    <div class="modal-overlay"></div>
    <div class="modal-container" >
      <div class="modal-header">
        <button @click="onCancel" class="btn btn-clear float-right"></button>
        <b>Einkaufswagen erstellen</b>
      </div>
      <div class="modal-body">
        <div class="content">
          <cite><kbd class="title">"{{title}}"</kbd></cite>
          <p>Bevorzugtes Lebensmitelgeschäft</p>
          <drop-down-control :active="shopSelection" :options="shopOptions" @changed="onShopChanged"></drop-down-control>
        </div>
      </div>
      <div class="modal-footer">
        <button style="margin-right:5px;" @click="onCancel" class="btn">Abbrechen</button>
        <button @click="createCart" class="btn" :class="{ 'btn-primary': 'canAdd', loading: isAdding }">Hinzufügen</button>
      </div>
    </div>
  </div>
</template>

<script>
import {addCart} from '../api'
import DropDownControl from './DropDownControl'
import {mapMutations} from 'vuex'

export default {
  data () {
    return {
      title: '',
      shopSelection: '',
      isAdding: false
    }
  },
  props: {
    active: false
  },
  computed: {
    shopOptions () {
      return this.$store.state.shopOptions
    },
    titles () {
      return this.$store.state.titles
    },
    isActive () {
      return this.$store.state.isAddCartActive
    },
    canAdd () {
      return !this.isActive
    }
  },
  methods: {
    ...mapMutations([
      'isLoading',
      'setAddCartActive',
      'storeCart'
    ]),
    randomInt () {
      return Math.floor((Math.random() * this.titles.length))
    },
    createTitle () {
      const rand = this.randomInt()
      return this.titles[rand]
    },
    createCart () {
      const cart = {
        name: this.title,
        shop: this.shopSelection
      }
      this.isAdding = true
      addCart(cart).then((response) => {
        this.storeCart(response)
        this.setAddCartActive(false)
        this.isAdding = false
        this.title = this.createTitle()
      })
    },
    onCancel () {
      this.setAddCartActive(false)
      this.title = this.createTitle()
    },
    onShopChanged (value) {
      // this.setAddCartActive(false)
    }
  },
  mounted () {
    this.title = this.createTitle()
    this.shopSelection = this.shopOptions[this.shopOptions.length - 1]
    this.createTitle()
  },
  components: {
    DropDownControl
  }
}
</script>

<style lang="css" scoped>
.modal-container {
  width: 80%;
}
.content {
  height: 140px;
}
.title {
  /*background-color: red;*/
  width: 100%;
  margin-bottom: 10px;
  padding: 6px 10px;
  line-height: 25px;
}
</style>
