<template>
  <div class="my-container">
    <nuxt-link :to="`/moutain/${id}`">
      <div class="img-container">
        <img
          width="100%"
          :src="imageUrl"
        />
        <div class="mountain-name">{{ name }}</div>
        <div class="black-cover"></div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    imageUrl: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.my-container {
  padding: 10px;
  background-color: rgb(211, 255, 211);
  border-radius: 5px;
}
.img-container {
  position: relative;
}
.black-cover {
  background: rgba(0, 0, 0, 0.45);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.mountain-name {
  position: absolute;
  color: whitesmoke;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 24px;
}
</style>