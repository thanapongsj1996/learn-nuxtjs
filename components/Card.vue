<template>
    <div class="card-container">
        <img width="100%" height="auto" :src="imgSrc" />
        <h4 class="my-3">{{ productName }}</h4>
        <nuxt-link :to="`/products/${productID}`">
            <b-button class="w-100" variant="primary">Detail >></b-button>
        </nuxt-link>
    </div>    
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: String
        },
        productName: {
            type: String
        },
        productID: {
            type: Number
        }
    }
}
</script>

<style scoped>
.card-container {
    padding: 20px;
    background-color: #F5F2F2;
    border-radius: 10px;
}
</style>