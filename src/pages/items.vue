<template>
<div class="item-page" >
  <q-pull-to-refresh :handler="refresher">
    <div>
      <div v-if="selectedCart !== null">
        <div class="q-headline">{{selectedCart.Title}}</div>
        <q-progress :percentage="progress" :color="color" />
        <div class="caption">{{selectedCart.Shop}}</div>

        <div style="margin-top: 5px;">
          <q-chip square small color="red">{{formatDate(selectedCart.CreationDate)}}</q-chip>
          <q-chip square small color="yellow-9">{{formatTime(selectedCart.CreationDate)}}</q-chip>
        </div>
        <div class="item-container">
          <div class="item-input">
            <q-input :after="[{icon: '', handler () {}}]" v-model="text" icon="add" @keyup.enter="addItem" float-label="Hinzufügen" />
          </div>
          <div class="item-list">
            <template v-if="displayItems">
              <item v-for="item in displayItems" :key="item.Id" :item="item"></item>
            </template>
          </div>
        </div>
      </div>
    </div>
  </q-pull-to-refresh>
  <q-page-sticky v-if="selectedCart" position="bottom-right" :offset="[80, 80]">
    <q-fab push class="fixed" color="secondary" icon="keyboard_arrow_up" direction="up">
      <q-fab-action color="negative" @click="onDeleteClicked" icon="delete"/>
      <!-- <q-fab-action color="positive" @click="addCart" icon="add" /> -->
    </q-fab>
  </q-page-sticky>
  <q-modal v-model="modalOpen" position="bottom" :content-css="{padding: '20px', 'background-color': '#F2C037'}">
      <div class="q-display-1 q-mb-md">Löschen</div><p>Bist du sicher dass du diesen Einkaufswagen löschen möchtest?</p>
      <q-btn class="float-right" color="secondary" @click="modalOpen = false" label="Nein" />
      <q-btn style="margin-right: 10px;" class="float-right" color="negative" @click="deleteCart" label="Ja" />
    </q-modal>
</div>
</template>

<script>
import item from '../components/item.vue'
import { date } from 'quasar'
import _ from 'lodash'

export default {
  data () {
    return {
      text: '',
      checked: false,
      modalOpen: false
    }
  },
  computed: {
    selectedCart () {
      return this.$store.state.carts.selectedCart
    },
    sorting () {
      return this.$store.state.view.sorting
    },
    items () {
      return this.$store.state.carts.items
    },
    displayDone () {
      return this.$store.state.view.displayDone
    },
    displayItems () {
      if (!this.items) { return }
      const filtered = this.items.filter(item => !item.IsDeleted)
        .filter((item) => {
          if (this.displayDone) {
            return true
          } else {
            if (item.IsActive) {
              return true
            } else {
              return false
            }
          }
        })
      if (this.sorting === 'alphabet') {
        return _.sortBy(filtered, ['Name'])
      } else {
        return filtered
      }
    },
    progress: {
      get: function () {
        if (!this.items) { return }
        const deleted = this.items.filter(i => i.IsDeleted)
        const inactive = this.items.filter(i => !i.IsActive && !i.IsDeleted)
        return (inactive.length / (this.items.length - deleted.length)) * 100
      },
      set: function (value) {
      }
    },
    color () {
      if (this.progress >= 0 && this.progress < 25) {
        return 'negative'
      }
      if (this.progress >= 25 && this.progress < 50) {
        return 'warning'
      }
      if (this.progress >= 50 && this.progress < 75) {
        return 'info'
      }
      return 'positive'
    }
  },
  methods: {
    refresher (done) {
      this.$store.dispatch('loadItems').then(() => {
        done()
      })
    },
    deleteCart () {
      this.modalOpen = false
      this.$store.dispatch('deleteCart')
    },
    addCart () {
      this.$router.push('addCart')
    },
    addItem () {
      if (this.displayItems.map(s => s.Name).includes(this.text)) {
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
    },
    onDeleteClicked () {
      this.modalOpen = true
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
