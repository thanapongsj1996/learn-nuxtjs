<template>
  <div>
    <Header url="/hospital" btnName="Go to Homepage" />
    <h1>Summary</h1>
    <b-container>
      <div>
        <b-button variant="warning" @click="clearPatients">Clear</b-button>
      </div>
      <div>
        <b-table striped hover :items="getPatients" :fields="fields" />
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
       fields: [
          {
            key: 'name',
            sortable: false
          },
          {
            key: 'age',
            sortable: true
          }
        ]
    }
  },
  methods: {
    ...mapActions('hospital', ['clearPatients']),
  },
  computed: {
    ...mapGetters('hospital', ['getPatients']),
  },
}
</script>

<style scoped>
</style>