<template>
  <div id="articles-container">
    <article-circle
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import ArticleCircle from "@/components/ArticleCircle.vue"
// import axios from '@/axios.js'
export default {
  components: {
    ArticleCircle
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
      // 假设您有一个API端点来获取文章
      // 例如: axios.get('http://your-backend/api/articles')
      // 这里使用静态数据作为示例
      this.articles = [
        { id: 1, title: "spiderman", content: "This is a story about spider man " },
        // ...其他文章
      ];
    }
  }
};
</script>

<style>
#articles-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}
</style>
