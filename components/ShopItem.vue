<template>
  <div class="my-item">
    <img :src="imageUrl" width="100%" height="auto" />
    <div class="d-flex justify-content-between mt-2">
      <div class="food-name">{{ name }}</div>
      <div class="food-price">{{ price }} Baht</div>
    </div>
    <b-form-input v-model="count" type="number" class="my-1" placeholder="Amount" />
    <b-button @click="addToCart" class="mt-1 w-100 py-1" variant="primary">Add to Cart</b-button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addToCart() {
      const item = {
        id: this.id,
        name: this.name,
        price: this.price,
        count: parseInt(this.count),
        imageUrl: this.imageUrl
      }

      // 1. ดึงค่าจาก cookie แล้วเช็คว่า มีตัวแปร product-selected หรือยัง
      const productSelected = this.getCookie('product-selected')
      if (productSelected === '') {
        // 1.1 ถ้ายังไม่มี product-selected ให้เพิ่มเข้าไปได้เลย
        const jsonItem = JSON.stringify([item])
        this.setCookie('product-selected', jsonItem, 5)
        return
      }
      
      // 1.2 ถ้ามี product-selected แล้ว ให้เช็คค่าด้านในว่า มีสินค้า ที่เราเลือกอยู่ใน product-selected แล้วรึยัง
      const productSelectedArr = JSON.parse(productSelected)
      const isSelected = productSelectedArr.some(p => p.id === item.id)

      // 1.2.1 ถ้ายังไม่มีสินค้่าที่เลือก ใน product-selected ให้ push สินค้าเข้าไป ใน product-selected ได้เลย
      if (isSelected === false) {
        productSelectedArr.push(item)
        const productSelectedArrJson = JSON.stringify(productSelectedArr)
        this.setCookie('product-selected', productSelectedArrJson, 5)
        return
      }
      
      // 1.2.2 ถ้ามีสินค้าที่เลือกอยู่ใน product-selected แล้ว ให้ count ของสินค้านั้นเพิ่มตามที่ user กรอกเข้ามา
      for (let i = 0; i < productSelectedArr.length; i++) {
        if (productSelectedArr[i].id === item.id) {
          productSelectedArr[i].count += item.count
        }
      }
      const productSelectedArrJson = JSON.stringify(productSelectedArr)
      this.setCookie('product-selected', productSelectedArrJson, 5)
    },
    setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      const expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie(cname) {
      const name = cname + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  }
}
</script>

<style scoped>
.my-item {
  padding: 10px;
  background-color: #f5f2f2;
  border-radius: 2px;
  -webkit-box-shadow: 0px 0px 13px 6px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 0px 13px 6px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 0px 13px 6px rgba(0, 0, 0, 0.09);
}
.my-item:hover {
  -webkit-box-shadow: 0px 0px 13px 6px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 13px 6px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 13px 6px rgba(0, 0, 0, 0.15);
}
.food-name {
  font-weight: bold;
  font-size: 18px;
  color: darkblue;
}
.food-price {
  font-size: 18px;
  color: firebrick;
}
</style>