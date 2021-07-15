<template>
  <div>
    <shop-header />
    <b-container class="mt-5" style="margin-bottom: 200px">
      <h1 class="mb-3">Cart Page</h1>

      <div class="row">
        <shop-item-slected
          v-for="product in selectedProducts"
          :key="product.id"
          class="col-md-8 offset-md-2 my-2"
          :name="product.name"
          :price="product.price"
          :count="product.count"  
          :imageUrl="product.imageUrl"
        />
      </div>
    </b-container>
    <shop-footer />
  </div>
</template>

<script>
import ShopFooter from '~/components/ShopFooter.vue'
import ShopHeader from '~/components/ShopHeader.vue'
import ShopItemSlected from '~/components/ShopItemSlected.vue'
export default {
  components: { ShopHeader, ShopFooter, ShopItemSlected },
  data() {
    return {
      selectedProducts: [],
    }
  },
  mounted() {
    const productJson = this.getCookie('product-selected')
    if (productJson !== '') {
      this.selectedProducts = JSON.parse(productJson)
    }
  },
  methods: {
    getCookie(cname) {
      const name = cname + '='
      const decodedCookie = decodeURIComponent(document.cookie)
      const ca = decodedCookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    },
  },
}
</script>

<style scoped>
</style>