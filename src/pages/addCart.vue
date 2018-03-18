<template>
  <div class="container">
    <div class="title">
      <big>Neuer Einkaufswagen</big>
    </div>
    <div class="quotes">
      <span class="title">{{titleSelection}}</span>
      <span class="float-right"><q-btn size="xs" round color="secondary" icon="autorenew" @click="generateTitleSelection()"/></span>
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
        {label: 'Hungrig?', value: '1'},
        {label: 'Gandalf hat ein Zeichen an meine Tür gemacht', value: '2'},
        {label: 'Eltern kommen über\'s Wochenende', value: '3'},
        {label: 'Kochen ist die Stärke der Frau', value: '4'},
        {label: 'I love cooking!', value: '5'},
        {label: 'Biete Sex für Essen', value: '6'},
        {label: 'Du kochst, ich esse!', value: '7'},
        {label: 'Die Apokalypse scheint nah zu sein', value: '8'},
        {label: 'Ich Bier, du Essen', value: '10'},
        {label: 'Kochen ist mein zweiter Vorname', value: '11'},
        {label: 'Earl Grey Tee kann auch keine Lösung sein', value: '12'}
      ],
      shopSelection: '',
      shopOptions: [
        {label: 'Aldi', value: 'Aldi'},
        {label: 'Penny', value: 'Penny'},
        {label: 'Netto', value: 'Netto'},
        {label: 'DM', value: 'DM'},
        {label: 'Edeka', value: 'Edeka'}
      ]
    }
  },
  computed: {
  },
  methods: {
    randomInt () {
      return Math.floor((Math.random() * this.titleOptions.length))
    },
    generateTitleSelection () {
      const rand = this.randomInt()
      this.titleSelection = this.titleOptions[rand].label
    },
    addCart () {
      this.$store.dispatch('addCart', {title: this.titleSelection, shop: this.shopSelection})
      this.$router.push('items')
    }
  },
  mounted () {
    this.generateTitleSelection()
    this.shopSelection = this.shopOptions[1].label
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
