<template>
  <div class="container">
      <div style="margin-top: 20px;" class="q-display-1">Einstellungen</div>
      <div style="margin-top: 20px;" class="q-headline">Anzeige</div>

      <div style="margin-top: 20px;" class="title">Möchtest du Lebensmittel die du bereits eingekauft hast in der Einkaufsliste anzeigen?</div>
      <div style="margin-top: 5px;">
        <span class="q-body-2">{{displayDone}}</span>
        <q-toggle class="float-right" true-value="Ja"
          false-value="Nein" v-model="displayDone" />
      </div>

      <div style="margin-top: 20px;">
        <div style="margin-top: 20px;" class="title">Sortierung</div>
        <q-select style="margin-top: 5px;" color="text-secondary" separator
          v-model="sortSelection" :options="sortOptions" /></div>

      <div style="margin-top: 20px;">
        <div style="margin-top: 20px;" class="title">Darstellung Chips</div>
        <q-select style="margin-top: 5px;" color="text-secondary" separator
          v-model="chipAppearanceSelection" :options="chipAppearanceOptions" /></div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      displayDone: 'Nein',
      sortSelection: 'alphabet',
      sortOptions: [
        {label: 'Alphabetisch', value: 'alphabet'},
        {label: 'Nach Erstelldatum', value: 'ordered'}
      ],
      chipAppearanceSelection: 'round',
      chipAppearanceOptions: [
        {label: 'Abgerundet', value: 'round'},
        {label: 'Quadratisch', value: 'square'}
      ]
    }
  },
  watch: {
    displayDone () {
      if (this.displayDone === 'Ja') {
        this.$store.commit('setDisplayDone', true)
      } else {
        this.$store.commit('setDisplayDone', false)
      }
    },
    sortSelection () {
      this.$store.commit('setSorting', this.sortSelection)
    },
    chipAppearanceSelection () {
      this.$store.commit('setChipAppearance', this.chipAppearanceSelection)
    }
  },
  mounted () {
    this.displayDone = this.$store.state.view.displayDone ? 'Ja' : 'Nein'
    this.sortSelection = this.$store.state.view.sorting
    this.chipAppearanceSelection = this.$store.state.view.chipAppearance
  }
}
</script>

<style lang="css" scopes>
.container {
  margin: 20px;
}
</style>
