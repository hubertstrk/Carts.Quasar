<template>
  <div>
    <div class="item-page" v-if="selectedCart !== null">
        <div class="q-headline">{{selectedCart.Title}}</div>
        <div class="q-subheading">{{selectedCart.Shop}} | {{creationDateTime}}</div>
      <div class="item-container">
        <div class="item-input">
          <q-input v-model="text" float-label="Float Label" />
        </div>
        <div class="item-list">
          <template v-if="filteredItems">
            <item v-for="item in filteredItems" :key="item.Id" :item="item"></item>
          </template>
        </div>
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[80, 80]">
      <q-fab class="fixed" color="purple" icon="keyboard_arrow_up" direction="up">
        <q-fab-action color="secondary" @click="deleteCart" icon="delete"/>
        <q-fab-action color="secondary" @click="addCart" icon="add" />
      </q-fab>
    </q-page-sticky>
  </div>
</template>

<script>
import item from '../components/item.vue'

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
    selectedCart () {
      return this.$store.state.carts.selectedCart
    },
    creationDateTime () {
      const date = new Date(parseInt(this.selectedCart.CreationDate))
      const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
      return formattedDate
    }
  },
  methods: {
    deleteCart () {
      this.$store.dispatch('deleteCart')
    },
    addCart () {
      this.$router.push('addCart')
    }
  },
  components: {item}
}
</script>

<style lang="css" scopes>
.item-page {
  margin: 20px;
}
</style>
