<template>
<div class="item-page" >
  <q-pull-to-refresh :handler="refresher">
    <div>
      <div v-if="selectedCart !== null">
        <div class="q-headline">{{selectedCart.Title}}</div>
        <div class="q-subheading">{{selectedCart.Shop}}</div>

        <div style="margin-top: 5px;">
          <!-- <span class="q-caption">{{formatDate(selectedCart.CreationDate)}}</span>
          <span class="text-blue-grey-5 q-caption">{{formatTime(selectedCart.CreationDate)}}</span> -->
          <q-chip square  small color="black">{{formatDate(selectedCart.CreationDate)}}</q-chip>
          <q-chip square  small color="black">{{formatTime(selectedCart.CreationDate)}}</q-chip>
        </div>
        <div class="item-container">
          <div class="item-input">
            <q-input v-model="text" @keyup.enter="addItem" float-label="Zur Einkausliste hinzufügen" />
          </div>
          <div class="item-list">
            <template v-if="sortedItems">
              <item v-for="item in sortedItems" :key="item.Id" :item="item"></item>
            </template>
          </div>
        </div>
      </div>
    </div>
  </q-pull-to-refresh>
  <q-page-sticky position="bottom-right" :offset="[80, 80]">
    <q-fab class="fixed" color="positive" icon="keyboard_arrow_up" direction="up">
      <q-fab-action color="secondary" @click="deleteCart" icon="delete"/>
      <q-fab-action color="secondary" @click="addCart" icon="add" />
    </q-fab>
  </q-page-sticky>
</div>
</template>

<script>
import item from '../components/item.vue'
import { date } from 'quasar'
import _ from 'lodash'

export default {
  data () {
    return {
      text: ''
    }
  },
  computed: {
    items () {
      return this.$store.state.carts.items
    },
    filteredItems () {
      if (this.items) {
        return this.items.filter(i => !i.IsDeleted)
      }
    },
    sortedItems () {
      return _.sortBy(this.filteredItems, ['Name'])
    },
    selectedCart () {
      return this.$store.state.carts.selectedCart
    }
  },
  methods: {
    refresher (done) {
      this.$store.dispatch('loadItems').then(() => {
        done()
      })
    },
    deleteCart () {
      this.$store.dispatch('deleteCart')
    },
    addCart () {
      this.$router.push('addCart')
    },
    addItem () {
      if (this.filteredItems.map(s => s.Name).includes(this.text)) {
        return
      }
      this.$store.dispatch('addItem', {text: this.text})
      this.text = ''
    },
    formatDate (value) {
      const createdDate = new Date(parseInt(value))
      return date.formatDate(createdDate, 'YYYY-MM-DD')
    },
    formatTime (value) {
      const createdDate = new Date(parseInt(value))
      return date.formatDate(createdDate, 'HH:mm:ss')
    }
  },
  components: {item}
}
</script>

<style lang="css" scopes>
.item-page {
  margin: 10px;
}
.item-input {
  margin-top: 10px;
}
.item-list {
  margin-top: 10px;
}
</style>
