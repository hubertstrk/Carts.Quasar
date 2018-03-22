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
        v-model="chipAppearanceSelection" :options="chipAppearanceOptions" />
    </div>
    <div style="margin-top: 20px;" class="float-right">
      <q-btn color="primary" icon="replay" label="Zurück zur Einkaufsliste" @click="back" />
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      sortOptions: [
        {label: 'Alphabetisch', value: 'alphabet'},
        {label: 'Nach Erstelldatum', value: 'ordered'}
      ],
      chipAppearanceOptions: [
        {label: 'Abgerundet', value: 'round'},
        {label: 'Quadratisch', value: 'square'}
      ]
    }
  },
  computed: {
    displayDone: {
      get: function () {
        return this.$store.state.view.displayDone ? 'Ja' : 'Nein'
      },
      set: function (value) {
        if (value === 'Ja') {
          this.$store.commit('setDisplayDone', true)
        } else {
          this.$store.commit('setDisplayDone', false)
        }
      }
    },
    sortSelection: {
      get: function () {
        return this.$store.state.view.sorting
      },
      set: function (value) {
        this.$store.commit('setSorting', value)
      }
    },
    chipAppearanceSelection: {
      get: function () {
        return this.$store.state.view.chipAppearance
      },
      set: function (value) {
        this.$store.commit('setChipAppearance', value)
      }
    }
  },
  methods: {
    back () {
      this.$router.push('items')
    }
  }
}
</script>

<style lang="css" scopes>
.container {
  margin: 20px;
}
</style>
