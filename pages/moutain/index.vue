<template>
  <div class="my-main">
    <!-- start jumbotron -->
    <b-jumbotron class="text-center text-white banner" style="padding: 120px 0px">
      <h1>Moutains In This World</h1>
    </b-jumbotron>
    <!-- end jumbotron -->

    <!-- start concepts -->
    <b-container class="my-sm-5 py-4">
      <div class="row">
        <div class="col-12 col-sm-4 text-center my-4 my-sm-0">
          <b-icon icon="star" scale="6" variant="dark" />
          <h4 class="mt-5">เป็นที่นิยม</h4>
        </div>
        <div class="col-12 col-sm-4 text-center my-4 my-sm-0">
          <b-icon icon="book" scale="6" variant="dark" />
          <h4 class="mt-5">อ่านเข้าใจง่าย</h4>
        </div>
        <div class="col-12 col-sm-4 text-center my-4 my-sm-0">
          <b-icon icon="bar-chart-line" scale="6" variant="dark" />
          <h4 class="mt-5">เจริญเติบโต</h4>
        </div>
      </div>
    </b-container>
    <!-- end concepts -->

    <!-- start mountain detail -->
    <b-jumbotron class="text-center" style="padding: 80px 0px">
      <h2>Let's see Mountains</h2>
    </b-jumbotron>
    <b-container>
      <div class="row">
        <div v-for="m in moutains" :key="m.id" class="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-4 mb-3">
          <moutain-card :imageUrl="m.image" :id="m.id" :name="m.title" />
        </div>
      </div>
    </b-container>
    <!-- end concepts -->
  </div>
</template>

<script>
import MoutainCard from '~/components/MoutainCard.vue'
export default {
  components: { MoutainCard },
  async asyncData({ $axios }) {
    const res = await $axios.$get(`https://api.nuxtjs.dev/posts`)
    return {
      moutains: res
    }
  },
  data() {
    return {
      moutains: null
    }
  }  
}
// 1. ดึงข้อมูลด้วย asyncData แล้วยัดเข้าไปเป็น data ของ pages
// 2. วน loop ส่ง data ไปเป็น props ของ component
// 3. component เอา props ไปโชว์
</script>

<style scoped>
.banner {
  border-radius: 0;
  background-image: linear-gradient(rgb(5, 32, 1), rgb(4, 195, 14));
}
.my-main {
  margin-bottom: 200px;
}
</style>
