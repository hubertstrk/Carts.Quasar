<template lang="html">
<div>
  <div class="card">
    <div class="card-header">
      <div class="card-title">
        <!--<figure class="avatar avatar-sm" :data-initial="initials()" style="background-color: #5764c6;"></figure>-->
        <h5>{{cart.name}}
          <span class="badge" :data-badge="tags.length"></span>
          <div class="float-right">
            <button class="btn btn-primary circle tooltip tooltip-left" 
              data-tooltip="Lösche Einkaufswagen" @click="onRemoveCart">
            <i class="icon icon-delete"></i></button>
          </div>
        </h5>
        <div class="card-subtitle">
          <span class="date label label-success">{{formatDate(cart.Timestamp)}}</span>
          <span class="date label label-warning">{{formatTime(cart.Timestamp)}}</span>
          <select-control :active="this.cart.shop" :options="shopOptions" @changed="onShopChanged"></select-control>
        </div>
      </div>
    </div>
    <div class="card-body">
      <template v-if="tags.length > 0">
        <div class="bar bar-sm">
          <div class="bar-item" role="progressbar" :style="{ width: getProgress() + '%', 'background-color': getProgressColor()}"></div>
        </div>
        <tags-view :tags="tags"></tags-view>
      </template>
      <template v-else>
        <empty-cart title="Es befinden sich keine Lebensmittel im Wagen." subtitle="Erstelle deinen ersten Eintrag und füge neue Lebensmittel über das Textfeld hinzu."></empty-cart>
      </template>
    </div>
    <div class="card-footer">
      <div class="columns col-gapless">
        <div class="column col-md-8 col-8">
          <div class="form-autocomplete">
            <!--input-->
            <div class="form-autocomplete-input form-input">
              <input class="form-input" type="text" v-model="text" placeholder="Lebensmittel..." />
            </div>
            <!--auto-complete list-->
            <ul v-if="suggestions.length > 0 && text.length > 0" class="menu">
              <li class="menu-item">
                <a href="#">
                  <div class="tile tile-centered" v-for="(suggestion, index) in suggestions">
                    <div class="tile-content" @click.prevent="setSuggestions(index)">
                      <a @click.prevent="setSuggestions(index)">{{suggestion}}</a>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="column col-md-4 col-4">
          <button @click="createTag" class="btn btn-primary input-group-btn">Hinzufügen</button>
        </div>
      </div>
    </div>
  </div>
  <delete-cart-modal></delete-cart-modal>
</div>
</template>

<script>
import TagsView from './TagsView.vue'
import SelectControl from './SelectControl.vue'
import EmptyCart from './EmptyCart'
import {addTag, updateCart, search} from '../api'
import DeleteCartModal from './DeleteCartModal'
import {getColor} from '../color'
import {mapMutations} from 'vuex'
import _ from 'lodash'

export default {
  data () {
    return {
      done: [],
      text: '',
      suggestions: [],
      isActive: false
    }
  },
  props: ['cart', 'index'],
  components: {
    TagsView, SelectControl, EmptyCart, DeleteCartModal
  },
  methods: {
    ...mapMutations([
      'isLoading', 'setRemoveCartActive', 'storeTag', 'setCartToDelete'
    ]),
    setSuggestions (index) {
      this.text = this.suggestions[index]
    },
    createTag () {
      if (!this.text) { return }
      if (this.text.length === 0) { return }
      // this.isLoading(true)
      const tag = {
        fkCart: this.cart.RowKey,
        name: this.text,
        active: true
      }
      addTag(tag).then((result) => {
        this.storeTag(result)
        // this.isLoading(false)
        this.text = ''
      })
    },
    initials () {
      return `${this.name.charAt(0)}${this.name.charAt(1)}`
    },
    getProgress () {
      const active = _.filter(this.tags, function (t) { return !t.active })
      const progress = active.length / this.tags.length * 100
      return progress
    },
    getProgressColor () {
      const progress = this.getProgress()
      const color = getColor(progress)
      if (!color) {
        return
      }
      return color.toRGB()
    },
    getProgressDisplay () {
      return `$(getProgress() %)`
    },
    tagCount () {
      if (!this.tags) { return }
      return this.tags.length
    },
    onShopChanged (value) {
      this.cart.shop = value
      updateCart(this.cart)
    },
    onRemoveCart () {
      this.setCartToDelete(this.cart) // cart which might be deleted in modal
      this.setRemoveCartActive(true) // modal
    },
    formatDate (value) {
      const date = new Date(value)
      return date.toLocaleDateString()
    },
    formatTime (value) {
      const date = new Date(value)
      return date.toLocaleTimeString()
    }
  },
  computed: {
    tags () {
      const cartId = this.cart.RowKey
      const foundTags = _.filter(this.$store.state.tags, function (element) {
        return element.fkCart === cartId
      })
      if (!foundTags) { return [] }
      return _.sortBy(foundTags, [function (el) { return !el.active }, function (el) { return el.name }])
    },
    shopOptions () {
      return this.$store.state.shopOptions
    }
  },
  watch: {
    text () {
      if (this.text === '' || this.text.length < 3) {
        this.suggestions = []
        return
      }
      const result = search(this.text)
      this.suggestions = result.map(f => f.name)
    }
  }
}
</script>

<style lang="css" scoped>
.card {
  margin-top: 10px;
  border-color: rgb(230, 230, 230);
}
.bar.bar-sm {
  height: .5rem;
}
.menu {
  padding: 0px !important;
}
.tile-content {
  font-size: 11pt;
  padding: 3px;
}
</style>

 // text: _.debounce(function () {
    //   if (this.text === '') { return }
    //   suggest(this.text).then((result) => {
    //     this.suggestions = []
    //     if (result.length === 0) {
    //       if (this.text.charAt(0) !== this.text.charAt(0).toUpperCase()) {
    //         this.suggestions.push(this.text.charAt(0).toUpperCase() + this.text.slice(1))
    //       }
    //     } else {
    //       this.suggestions = result
    //     }
    //   })
    // }, 250)
