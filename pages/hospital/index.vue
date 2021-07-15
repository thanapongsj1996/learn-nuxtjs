<template>
  <div>
    <Header url="/hospital/summary" btnName="Summary" />

    <div class="jumbotron text-center pb-5">
      <h1>Hospital Page</h1>
      <b-button variant="primary" @click="updateHeaderNumber(1)">ADD</b-button>
      <b-button variant="danger" @click="updateHeaderNumber(-1)">REMOVE</b-button>
      <div class="d-flex justify-content-center py-2">
          <b-form-input class="w-50" v-model="newName" placeholder="Enter your name" />
          <b-button class="ml-2" @click="changeName(newName)" variant="light">Update name</b-button>
      </div>
    </div>

    <b-container>
      <div class="row">
        <div
          v-for="(user, index) in users"
          :key="index"
          class="
            col-12 col-md-10
            offset-md-1
            col-lg-6
            offset-lg-3
            d-flex
            justify-content-between
            my-2
          "
        >
          <div class="mr-4 font-weight-bold">{{ user.name }}</div>
          <b-button @click="addPatients(user)" class="ml-4 py-0" variant="primary">ADD</b-button>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '~/components/Header.vue'
export default {
  components: { Header },
  data() {
    return {
      homepageNumber: 0,
      newName: null,
      users: [
        {
          name: 'Prayuth Chan-O-Cha',
          age: 55
        },
        {
          name: 'Prawit Wongsuwan',
          age: 59
        },
        {
          name: 'Anutin Wongsuwan',
          age: 48
        },
        {
          name: 'Pareena Trikub',
          age: 120
        },
        {
          name: 'Srira Janraka',
          age: 80
        },
        {
          name: 'Witsanu Krenam',
          age: 71
        },
        {
          name: 'Watchira long',
          age: 33
        },
      ],
    }
  },
  methods: {
      ...mapActions('hospital', ['updateHeaderNumber', 'addPatients', 'changeName'])
  },
  computed: {
      ...mapGetters('hospital', ['getName', 'getHeaderNumber'])
  }
}
</script>

<style scoped>
</style>