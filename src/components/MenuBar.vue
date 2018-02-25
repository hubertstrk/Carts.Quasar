<template lang="html">
<div>
  <header class="navbar">
    <section class="navbar-section">
      <h3>Carts</h3>
    </section>
    <section class="navbar-center">
    </section>
    <section class="navbar-section">
      <button @click="openModal" class="btn btn-primary btn-action btn-lg circle tooltip tooltip-left" data-tooltip="Erstelle einen neuen Einkaufswagen">
        <i class="icon icon-plus"></i>
      </button>
    </section>
  </header>
  <add-modal></add-modal>
</div>
</template>

<script>
import AddModal from './AddModal.vue'
import {mapMutations} from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations([
      'setAddCartActive'
    ]),
    openModal () {
      this.setAddCartActive(true)
    }
  },
  components: {
    AddModal
  }
}
</script>

<style lang="css" scoped>
</style>
