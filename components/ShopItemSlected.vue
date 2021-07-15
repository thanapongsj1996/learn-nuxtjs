<template>
    <div class="my-item row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-0">
            <img height="auto" width="100%" :src="imageUrl" />
        </div>
        <div class="col-12 col-sm-3 col-md-4 col-lg-5">
            <h2><b>{{ name }}</b></h2>
            <h5><b>Price : </b> {{ price }} Baht</h5>
        </div>
        <div class="col-12 col-sm-3 col-md-4 col-lg-4 text-center">
            <div>
                <span class="item-count">{{ count }}</span>
                <span>items</span>
            </div>
            <span class="total-price">
                {{ count * price }} Bath
            </span>
        </div>
    </div>    
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        price: {
            type: Number,
            default: 0
        },
        imageUrl: {
            type: String,
            default: ''
        },
        count: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
.my-item {
    width: 100%;
    padding: 10px;
    background-color: rgb(243, 242, 242);
    border-radius: 4px;
}
.item-count {
    font-size: 50px;
    font-weight: bold;
}
.total-price {
    font-size: 14px;
    color: grey;
}
</style>