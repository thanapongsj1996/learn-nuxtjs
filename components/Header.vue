<template>
    <div class="my-header">
        <b-container class="pt-3 d-flex justify-content-between">
            <b>Header | {{ getName }}</b>
            <div>
                <nuxt-link :to="url">
                    <b-button variant="warning" class="py-0">{{ btnName }}</b-button>
                </nuxt-link>
                <span class="ml-3">
                    <b>{{ getHeaderNumber }}</b>
                </span>
            </div>
        </b-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        url: {
            type: String
        },
        btnName: {
            type: String
        }
    },
  computed: {
      ...mapGetters('hospital', ['getName', 'getHeaderNumber'])
  }
}
</script>

<style scoped>
.my-header {
    width: 100%;
    height: 60px;
    background-color: rgb(255, 68, 68);
}
</style>