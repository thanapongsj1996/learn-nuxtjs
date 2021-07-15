<template>
  <b-container class="pb-5">
    <h1 class="mt-5 mb-3">See All Products Here</h1>
    <div class="row">
      <div
        v-for="product in products"
        :key="product.id"
        class="p-1 col-12 col-md-6 col-xl-4"
      >
        <card
          :productName="product.name"
          :productID="product.id"
          :imgSrc="product.img"
        />
      </div>
    </div>
  </b-container>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  components: { Card },
  data() {
    return {
      products: [
        {
          img: 'https://source.unsplash.com/random/320x180',
          name: 'Clock 2013',
          id: 20201,
        },
        {
          img: 'https://source.unsplash.com/random/320x180',
          name: 'Clock 2014',
          id: 20202,
        },
        {
          img: 'https://source.unsplash.com/random/320x180',
          name: 'Clock 2015',
          id: 20203,
        },
        {
          img: 'https://source.unsplash.com/random/320x180',
          name: 'Clock 2016',
          id: 20204,
        },
        {
          img: 'https://source.unsplash.com/random/320x180',
          name: 'Clock 2017',
          id: 20205,
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>