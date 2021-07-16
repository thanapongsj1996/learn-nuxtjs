<template>
  <b-container>
      <b-button variant="warning" @click="plus">plus price</b-button>
    <div v-if="jobs !== null && jobs.length > 0">
      <div v-for="j in jobs" :key="j._id" style="border: solid 1px blue">
        <h1>asyncData {{ priceWithVat }}</h1>
        <p><b>Owner : </b> {{ j.owner.fname }}</p>
        <p><b>Subject : </b> {{ j.subject }}</p>
        <p><b>Price : </b> {{ j.price }}</p>
        <p><b>Time : </b> {{ j.learnTime }}</p>
      </div>
    </div>

    <div v-else-if="jobs !== null && jobs.length === 0">
      <h2>No jobs now..</h2>
    </div>

    <div v-else-if="jobs === null">
      <h2>Error Jobs not found..</h2>
    </div>

    <b-button variant="primary" class="mt-5 px-5 py-2" @click="getJobsv2"
      >GET JOBS</b-button
    >

    <div v-if="isLoading">
      <div class="p-4">
        <b-icon
          icon="clock"
          animation="spin"
          font-scale="4"
          shift-v="8"
        ></b-icon>
      </div>
    </div>

    <div v-else-if="jobs2 !== null && jobs2.length > 0">
      <div v-for="j in jobs2" :key="j._id" style="border: solid 1px red">
        <h1>On click</h1>
        <p><b>Owner : </b> {{ j.owner.fname }}</p>
        <p><b>Subject : </b> {{ j.subject }}</p>
        <p><b>Price : </b> {{ j.price }}</p>
        <p><b>Time : </b> {{ j.learnTime }}</p>
      </div>
    </div>

    <div v-else-if="jobs2 !== null && jobs2.length === 0">
      <h2>No jobs2 now..</h2>
    </div>

    <div v-else-if="jobs2 === null">
      <h2>Error Jobs2 not found..</h2>
    </div>

    <b-button variant="secondary" class="mt-5 px-5 py-2" @click="getJobsv3"
      >GET JOBS STORE</b-button
    >

    <div v-if="getLoading">
      <div class="p-4">
        <b-icon
          icon="clock"
          animation="spin"
          font-scale="4"
          shift-v="8"
          variant="warning"
        ></b-icon>
      </div>
    </div>

    <div v-else-if="getJobs !== null && getJobs.length > 0">
      <div v-for="j in getJobs" :key="j._id" style="border: solid 2px black;">
        <h1>On click Store</h1>
        <p><b>Owner : </b> {{ j.owner.fname }}</p>
        <p><b>Subject : </b> {{ j.subject }}</p>
        <p><b>Price : </b> {{ j.price }}</p>
        <p><b>Time : </b> {{ j.learnTime }}</p>
      </div>
    </div>

    <div v-else-if="getJobs !== null && getJobs.length === 0">
      <h2>No getJobs now..</h2>
    </div>

    <div v-else-if="getJobs === null">
      <h2>Error getJobs not found..</h2>
    </div>

    <input v-model="email" placeholder="input email" type="email" />
    <input v-model="password" placeholder="input email" type="password" />
    <b-button variant="dark" @click="loginClick">login</b-button>


  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  async asyncData({ $axios }) {
    let jobsArr = null
    const res = await $axios.$get(`${process.env.TUTOR_API}/student-job`)
    if (res.status_code === 200) {
      jobsArr = res.data.jobs
    }

    return {
      jobs: jobsArr,
    }
  },
  data() {
    return {
      jobs: null,
      jobs2: null,
      isLoading: false,
      price: 100,
      vat: 7,
      email: null,
      password: null
    }
  },
  methods: {
    ...mapActions('jobs', ['getJobsStore', 'updateLoading']),
    async getJobsv2() {
      this.isLoading = true

      const res = await this.$axios.$get(`${process.env.TUTOR_API}/student-job`)
      if (res.status_code === 200) {
        this.jobs2 = res.data.jobs
      }

      this.isLoading = false
    },
    async getJobsv3() {
        this.updateLoading(true)

        await this.getJobsStore()

        this.updateLoading(false)
    },
    plus() {
        this.price += 100
    },
    async loginClick() {
      const payload = {
        email: this.email,
        password: this.password
      }

      const res = await this.$axios.$post(`${process.env.TUTOR_API}/users/login` , payload)
      console.log('res : ', res)
    }
  },
  computed: {
    ...mapGetters('jobs', ['getJobs', 'getLoading']),
    priceWithVat() {
        return this.price * (1 + this.vat/100)
    }
  },
}
</script>

<style scoped>
</style>
