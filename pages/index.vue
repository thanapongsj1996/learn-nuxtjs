<template>
  <b-container>
    <h1>Home Page</h1>
    <nuxt-link to="/hospital">
      <b-button> goto hospital </b-button>
    </nuxt-link>
    <nuxt-link to="/moutain">
      <b-button> goto moutain </b-button>
    </nuxt-link>
    <nuxt-link to="/products">
      <b-button> goto products </b-button>
    </nuxt-link>
    <nuxt-link to="/shop">
      <b-button> goto shop </b-button>
    </nuxt-link>
    <nuxt-link to="/user">
      <b-button> goto user </b-button>
    </nuxt-link>
    <nuxt-link to="/testapi">
      <b-button> goto testapi </b-button>
    </nuxt-link>
    
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 123,
          name: 'boy',
        },
        {
          id: 456,
          name: 'pong',
        },
        {
          id: 789,
          name: 'bank',
        },
      ],
    }
  },
  methods: {

  }
}
</script>
