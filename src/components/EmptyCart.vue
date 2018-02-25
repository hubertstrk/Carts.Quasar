<template>
<div class="empty">
  <div class="empty-icon">
    <!--<i class="icon icon-time"></i>-->
    <img class="cart" src="../assets/cart.png" />
  </div>
  <h4 class="empty-title">{{title}}</h4>
  <p class="empty-subtitle">{{subtitle}}</p>
</div>
</template>

<script>
export default {
  props: {
    'title': String,
    'subtitle': String
  }
}
</script>

<style lang="css" scoped>
.empty {
  padding: 1rem 2rem;
}

.cart {
  height: 32px;
  width: 32px;
}
</style>
