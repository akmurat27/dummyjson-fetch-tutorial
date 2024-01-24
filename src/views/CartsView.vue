<script>
import axios from 'axios'

export default {
  data: () => ({
    carts: []
  }),
  created() {
    this.getCarts()
  },
  methods: {
    getCarts() {
      axios.get('https://dummyjson.com/carts')
      .then((res) => {
        this.carts = res.data.carts
        console.log(this.carts)
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
        <div v-for="cart in carts" :key="cart" class="card">
            <div>ID: {{ cart.id }}</div>
            <div>Title: {{ cart.total }}</div>
            <div>Price: {{ cart.discountedTotal }}</div>
            <div>quantity: {{ cart.userId }}</div>
            <div>total: {{ cart.totalProducts }}</div>
            <div>discountPercentage: {{ cart.totalQuantity }}</div>
            
        </div>
    </div>
</template>

<style>
.card {
    cursor: pointer;
    background-color: white;
    color: black;
    margin: 50px;
    width: 400px;
    height: 150px;
  }
</style>