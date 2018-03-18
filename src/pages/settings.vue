<template>
  <div class="container">
      <div class="q-display-1">Einstellungen</div>
      <div class="q-headline">Anzeige</div>
      <div class="title">Möchtest du Lebensmittel die du bereits eingekauft hast im Einkauswagen anzeigen? {{displayDone}}</div>
      <q-toggle class="float-right" true-value="Ja"
        false-value="Nein" v-model="displayDone" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      displayDone: 'Nein'
    }
  },
  watch: {
    displayDone () {
      if (this.displayDone === 'Ja') {
        this.$store.commit('setDisplayDone', true)
      } else {
        this.$store.commit('setDisplayDone', false)
      }
    }
  },
  mounted () {
    this.displayDone = this.$store.state.view.displayDone ? 'Ja' : 'Nein'
  }
}
</script>

<style lang="css" scopes>
.container {
  margin: 10px;
}
</style>
