<template>
  <div>
    <h2>Protected View</h2>
    <p>This view is only accessible with a valid access token.</p>
  </div>
  <button @click="getUsers">获取所有用户</button>
  <div>{{ users }}</div>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}, {{ user.email }},{{ user.password }}
    </li>
  </ul>
</template>

<script>
import axios from "../axios";


export default {
  data() {
    return { users: [] };
  },
  methods: {
    getUsers() {
      axios
        .get("http://127.0.0.1:5000/users")
        .then((res) => {
          this.users = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
