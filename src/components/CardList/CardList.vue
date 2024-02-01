<template>
  <v-container class="container">
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="article in articles" :key="article.id">
        <card-component :article="article" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardComponent from '@/components/cardComponent.vue';
import axios from 'axios';

export default {
  components: {
    CardComponent
  },
  data() {
    return {
      articles: []
    };
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/user/1/newspapers');
        this.articles = response.data;
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }
  }
};
</script>
<style>
.container {
  height : 100vh;
  border: 1px solid black;
}
</style>
