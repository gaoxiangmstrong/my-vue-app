<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <div v-if="loginError" class="error-message">{{ loginError }}</div>
  </div>
</template>

<script>
import axios from "axios";
import { handleLoginError } from '@/services/errorHandler';

export default {
  data() {
    return {
      email: "",
      password: "",
      loginError: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/login",
          {
            email: this.email,
            password: this.password,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        this.$router.push("/protected"); // 保持重定向逻辑
      } catch (error) {
        console.log(error.response.data.msg);
        this.loginError = handleLoginError(error)
      }
    },
  },
};
</script>

<style>
/*测试用的样式*/
h2 {
  color: red;
}
.error-message {
  color: red;
}
</style>
