<template>
  <div class="mb-5">
    <b-jumbotron class="text-center">
        <h1>{{ moutain.title }}</h1>
    </b-jumbotron>
    <b-container>
        <div class="row">
            <div class="col-12 col-md-4">
                <img width="100%" :src="moutain.image" />
            </div>
            <div class="col-12 col-md-8 moutain-content">
                <p><b>Detail : </b>{{ moutain.description }}</p>
                <p><b>Height : </b>{{ moutain.height }}</p>
                <p>
                    <b>Countries : </b>
                    <span v-for="c in moutain.countries" :key="c" class="country-name">{{ c }}</span>
                </p>
                <p><b>Continent : </b>{{ moutain.continent }}</p>
            </div>
        </div>
        <div class="row mt-5">
            <nuxt-link class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3" to="/moutain">
                <b-button variant="dark" class="w-100 font-weight-bold py-2">Back</b-button>
            </nuxt-link>
        </div>
    </b-container>
  </div>
</template>

<script>
export default {
    async asyncData({ $http, route }) {
        const res = await $http.$get(`https://api.nuxtjs.dev/posts/${route.params.id}`)
        return {
            moutain: res
        }
    },
    data() {
        return {
            moutain: null
        }
    }
}
</script>

<style scoped>
.moutain-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.country-name {
    padding: 10px;
    background-color: rgb(0, 219, 11);
    color: whitesmoke;
    border-radius: 10px;
    border: solid 1px rgb(255, 255, 223);
}
</style>