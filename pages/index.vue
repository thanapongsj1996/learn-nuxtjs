<template>
  <b-container>
    <h1>Home Page</h1>
    <nuxt-link to="/user">
      <b-button> goto user all page </b-button>
    </nuxt-link>


    <nuxt-link
      v-for="(user, index) in users"
      :key="index"
      :to="`/user/${user.id}`"
      class="mx-1"
    >
      <b-button>
        {{ user.name }}
      </b-button>
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
