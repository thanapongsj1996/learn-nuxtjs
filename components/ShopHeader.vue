<template>
  <div class="my-header pt-2">
    <b-container :class="currentPage === 'shop-cart' ? 'd-flex justify-content-between' : 'text-right'">
      <nuxt-link v-if="currentPage === 'shop-cart'" to="/shop">
        <b-icon class="mt-2" variant="dark" icon="arrow-left-circle-fill" font-scale="1.5" />
      </nuxt-link>

      <nuxt-link to="/shop/cart">
        <b-button variant="warning" class="py-1 px-5">
          <b-icon variant="dark" icon="cart-plus-fill" font-scale="1.5" />
          <b-badge variant="light">4</b-badge>
        </b-button>
      </nuxt-link>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: this.$route.name
    }
  }
}
</script>

<style scoped>
.my-header {
  width: 100%;
  height: 50px;
  background-color: burlywood;
  box-shadow: 1px 5px 23px -4px rgba(0, 0, 0, 0.72);
  -webkit-box-shadow: 1px 5px 23px -4px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 1px 5px 23px -4px rgba(0, 0, 0, 0.72);
}
</style>