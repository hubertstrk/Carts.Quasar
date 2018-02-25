<template lang="html">
<div v-if="isLoading">
  <div class="loading-screen"></div>
  <div class="loading-animation">
    <img class="cart" src="../assets/cart.png"></img>
    <div class="text"><h4>Loading...</h4></div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang="css" scoped>
.loading-screen {
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: black;
  position: fixed;
  opacity: 0.7;
  z-index: 10;
}

.loading-animation {
  position: fixed;
  height: 130px;
  width: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  border: 1px solid gray;
  background-color: rgb(230,230,230);
}

.text {
  position: relative;
  margin-top: 10px;
  z-index: 30;
  text-align: center;
}

.cart {
  position: relative;
  transform: translate(-50%, -50%);
  animation-name: example;
  animation-duration: 1.4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 30;
}

@keyframes example {
  0%   {
    left: 20%;
    top: 40px;
    opacity: 0;
  }
  50%   {
    opacity: 1;
  }
  100%   {
    left: 80%;
    top: 40px;
    opacity: 0;
  }
}
</style>
