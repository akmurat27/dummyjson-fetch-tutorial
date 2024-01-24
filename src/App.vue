<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="tab">
    <ul>
      <li>
        <RouterLink to="/product">
          <button>Product</button>
        </RouterLink>
      </li>
      <li>
        <router-link to="/carts">
          <button>Carts</button>
        </router-link>
      </li>
      <li>
        <router-link to="/users">
          <button>Users</button>
        </router-link>
      </li>
    </ul>
  </div>
  <RouterView />
</template>

<style scoped>
ul{
  display: flex;
  justify-content: center;
  align-items: center;
  
}
li{
  list-style: none;
  margin: 15px
}
/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: rgb(97, 97, 97);
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: rgb(97, 97, 97);
}

</style>