<script>
import axios from 'axios'

export default {
  data: () => ({
    products: []
  }),
  created() {
    this.getProducts()
  },
  methods: {
    getProducts() {
      axios.get('https://dummyjson.com/products')
      .then((res) => {
        this.products = res.data.products
        console.log(this.products)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<template>
  <div style="display: flex;  flex-wrap: wrap; justify-content: space-around">
    <div v-for="product in products" :key="product" class="card">
      <img :src="product.thumbnail" style="width: 100%; height: 315px">
      <div class="container">
        <div>Title: {{product.title}}</div>
        <div>Description: {{product.description}}</div>
        <div>Price: {{product.price}}</div>
        <div>discountPercentage: {{product.discountPercentage}}</div>
        <div>rating: {{product.rating}}</div>
        <div>stock: {{product.stock}}</div>
        <div>brand: {{product.brand}}</div>
        <div>category: {{product.category}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
  background-color: white;
  color: black;
  margin: 50px;
  width: 500px;
  height: 580px;
}
.container{
  margin: 20px;
}
</style>
