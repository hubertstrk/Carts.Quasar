<template>
  <div>
    <h3>AddCart</h3>
    <h5>{{titleSelection}}</h5>
    <q-btn icon="autorenew" @click="generateTitleSelection()"/>
    <q-select clearable v-model="shopSelection" :options="shopOptions" />
    <q-btn icon="add shopping cart" @click="addCart()">Einkausfwagen erstellen</q-btn>
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
</style>
