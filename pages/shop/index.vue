<template>
  <div>
    <shop-header />
    <b-container class="mb-5">
      <h1 class="mt-5">Shop Page</h1>
      <div class="row">
        <div
          v-for="product in products"
          :key="product.id"
          class="col-12 col-sm-6 col-md-4 col-xl-3 my-2"
        >
          <shop-item
            :id="product.id"
            :name="product.name"
            :price="product.price"
            :image-url="product.image"
          />
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import ShopHeader from '~/components/ShopHeader.vue'
import ShopItem from '~/components/ShopItem.vue'
export default {
  components: { ShopHeader, ShopItem },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Pizza',
          price: 800,
          image:
            'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        },
        {
          id: 2,
          name: 'Burger',
          price: 450,
          image:
            'https://images.unsplash.com/photo-1610970878459-a0e464d7592b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1396&q=80',
        },
        {
          id: 3,
          name: 'BBQ',
          price: 800,
          image:
            'https://images.unsplash.com/photo-1592309102027-ca85af1d95ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1454&q=80',
        },
        {
          id: 4,
          name: 'Steak',
          price: 750,
          image:
            'https://images.unsplash.com/photo-1611354574034-9655b5b72d59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        },
        {
          id: 5,
          name: 'Hotdog',
          price: 120,
          image:
            'https://images.unsplash.com/photo-1547424450-75ec164925ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        },
        {
          id: 6,
          name: 'Ice cream',
          price: 75,
          image:
            'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        },
        {
          id: 7,
          name: 'Water melon',
          price: 50,
          image:
            'https://images.unsplash.com/photo-1563114773-84221bd62daa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        },
        {
          id: 8,
          name: 'Strawberries',
          price: 350,
          image:
            'https://images.unsplash.com/photo-1564518087238-8d82baa9d7cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>
