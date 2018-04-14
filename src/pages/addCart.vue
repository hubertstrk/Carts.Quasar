<template>
  <div class="container">
    <div class="title">
      <big>Neuer Einkaufswagen</big>
    </div>
    <div class="quotes" @click="generateTitleSelection()">
      <span class="title">{{titleSelection}}</span>
      <!-- <span class="float-right"><q-btn size="xs" round color="secondary" icon="autorenew" @click="generateTitleSelection()"/></span> -->
    </div>

    <div style="margin-top: 20px;">
      <q-select stack-label="Shop" color="text-secondary" separator
        v-model="shopSelection" :options="shopOptions" />
    </div>

    <div style="margin-top: 20px;">
      <q-btn class="float-right" color="positive" icon="add shopping cart" icon-right="send" label="Einkausfwagen erstellen" @click="addCart()" />
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      titleSelection: '',
      titleOptions: [
        {label: 'Hungrig?', category: 'food'},
        {label: 'Gandalf hat ein Zeichen an meine Tür gemacht', category: 'food'},
        {label: 'Eltern kommen über\'s Wochenende', category: 'food'},
        {label: 'Kochen ist die Stärke der Frau', category: 'food'},
        {label: 'I love cooking!', category: 'food'},
        {label: 'Biete Sex für Essen', category: 'food'},
        {label: 'Du kochst, ich esse!', category: 'food'},
        {label: 'Die Apokalypse scheint nah zu sein', category: 'food'},
        {label: 'Ich Bier, du Essen', category: 'food'},
        {label: 'Kochen ist mein zweiter Vorname', category: 'food'},
        {label: 'Earl Grey Tee kann auch keine Lösung sein', category: 'food'},
        {label: 'Ketchkups ist alle', category: 'food'},
        {label: 'Jo, wir schaffen das!', category: 'construction'},
        {label: 'Meister Manni wäre stolz auf uns', category: 'construction'}
      ],
      shopSelection: '',
      shopOptions: [
        {label: 'Baumarkt', value: 'Baumarkt', category: 'construction'},
        {label: 'Penny', value: 'Penny', category: 'food'},
        {label: 'Aldi', value: 'Aldi', category: 'food'},
        {label: 'Netto', value: 'Netto', category: 'food'},
        {label: 'DM', value: 'DM', category: 'food'},
        {label: 'Edeka', value: 'Edeka', category: 'food'}
      ]
    }
  },
  computed: {
  },
  methods: {
    randomInt (max) {
      return Math.floor((Math.random() * max))
    },
    generateTitleSelection () {
      if (!this.shopSelection) {
        return
      }
      const category = this.shopOptions.find(s => s.label === this.shopSelection).category
      const titles = this.titleOptions.filter(s => s.category === category)
      const rand = this.randomInt(titles.length)
      console.info(rand)
      this.titleSelection = titles[rand].label
    },
    addCart () {
      this.$store.dispatch('addCart', {title: this.titleSelection, shop: this.shopSelection})
      this.$router.push('items')
    }
  },
  mounted () {
    this.generateTitleSelection()
    this.shopSelection = this.shopOptions[1].label
  },
  watch: {
    shopSelection () {
      this.generateTitleSelection()
    }
  }
}
</script>

<style lang="css" scopes>
.container {
  margin: 10px;
}
.title {
  margin-top: 30px;
}
.quotes {
  margin-top: 10px;
}
</style>
