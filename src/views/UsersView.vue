<script>
import axios from 'axios'

export default {
  data: () => ({
    users: []
  }),
  created() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      axios.get('https://dummyjson.com/users')
      .then((res) => {
        this.users = res.data.users
        console.log(this.users)
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
        <div v-for="user in users" :key="user" class="card" >
            <img :src="user.image" style="width: 100%; height: 315px">
            <div class="container">
                <div>FirstName: {{ user.firstName }}</div>
                <div>LastName: {{ user.lastName }}</div>
                <div>MaidenName: {{ user.maidenName }}</div>
                <div>Age: {{ user.age }}</div>
                <div>Gender: {{ user.gender }}</div>
                <div>Email: {{ user.email }}</div>
                <div>Phone: {{ user.phone }}</div>
                <div>Username: {{ user.username }}</div>
                <div>password: {{ user.password }}</div>
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
    width: 380px;
    height: 580px;
  }
.container{
    background-color: white;
    color: black;
    margin: 30px;
}
</style>