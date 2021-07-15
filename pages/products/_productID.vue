<template>
  <b-container class="mt-5 h-100">
    <div v-if="productInfo">
      <h1>{{ productInfo.name }}</h1>
      <div>
        <b>ID : </b>
        <span>{{ productInfo.id }}</span>
      </div>
      <div>
        <b>Price : </b>
        <span>{{ productInfo.price }} Baht</span>
      </div>
      <div>
        <b>Count : </b>
        <span>{{ productInfo.count }}</span>
      </div>
      <div>
        <b>Detail : </b>
        <span>{{ productInfo.detail }}</span>
      </div>
      <div class="my-3 text-center">
        <b-button @click="$bvModal.show('bv-modal-example')" variant="primary">BUY NOW</b-button>
        <nuxt-link to="/products">
          <b-button variant="secondary">Go to Home Page</b-button>
        </nuxt-link>
      </div>
      <div class="w-100 d-flex justify-content-center">
        <img width="400" :src="productInfo.img" />
      </div>
    </div>
    <div v-else class="text-center">
      <h1>PRODUCT NOT FOUND !!</h1>
      <nuxt-link to="/products">
        <b-button variant="secondary">Go to Home Page</b-button>
      </nuxt-link>
    </div>

    <b-modal id="bv-modal-example" hide-footer>
      <template #modal-title>Successful</template>
      <div class="d-block text-center">
        <h3>Thank you for submit order &#129505;</h3>
      </div>
      <b-button variant="primary" class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
        >OK</b-button
      >
    </b-modal>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      productInfo: null,
      products: [
        {
          img: 'https://source.unsplash.com/random/320x180',
          name: 'Clock 2013',
          id: 20201,
          price: 900,
          count: 4,
          detail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam porro
        eius in doloribus praesentium. Autem maiores vel cumque dignissimos!
        Voluptates, vitae. Cupiditate placeat officiis magni sapiente, mollitia
        quisquam assumenda earum.`,
        },
        {
          img: 'https://source.unsplash.com/random/320x180',
          name: 'Clock 2014',
          id: 20202,
          price: 1200,
          count: 29,
          detail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam porro
        eius in doloribus praesentium. Autem maiores vel cumque dignissimos!
        Voluptates, vitae. Cupiditate placeat officiis magni sapiente, mollitia
        quisquam assumenda earum.`,
        },
        {
          img: 'https://source.unsplash.com/random/320x180',
          name: 'Clock 2015',
          id: 20203,
          price: 1500,
          count: 13,
          detail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam porro
        eius in doloribus praesentium. Autem maiores vel cumque dignissimos!
        Voluptates, vitae. Cupiditate placeat officiis magni sapiente, mollitia
        quisquam assumenda earum.`,
        },
        {
          img: 'https://source.unsplash.com/random/320x180',
          name: 'Clock 2016',
          id: 20204,
          price: 2100,
          count: 52,
          detail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam porro
        eius in doloribus praesentium. Autem maiores vel cumque dignissimos!
        Voluptates, vitae. Cupiditate placeat officiis magni sapiente, mollitia
        quisquam assumenda earum.`,
        },
        {
          img: 'https://source.unsplash.com/random/320x180',
          name: 'Clock 2017',
          id: 20205,
          price: 7400,
          count: 100,
          detail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam porro
        eius in doloribus praesentium. Autem maiores vel cumque dignissimos!
        Voluptates, vitae. Cupiditate placeat officiis magni sapiente, mollitia
        quisquam assumenda earum.`,
        },
      ],
      productID: this.$route.params.productID,
    }
  },
  methods: {
    getProductInfo() {
      const id = parseInt(this.productID)
      const product = this.products.find((p) => p.id === id)

      

      if (product) {
        this.productInfo = product
      }
    },
  },
  mounted() {
    this.getProductInfo()
  },
}
</script>

<style scoped>
</style>