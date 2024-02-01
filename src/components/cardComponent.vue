<template>
  <v-card class="ma-4 cardHeight">
    <v-card-title>{{ article.title }}</v-card-title>
    <v-card-text>
      <div>{{ getContent(article.content) }}</div>
      <v-chip class="ma-2" :color="getColor(article.difficulty)" dark>
        {{ article.category }}
      </v-chip>
      <div class="text-grey">{{ formatDate(article.created_at) }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="blue">Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getColor(difficulty) {
      // Map difficulty level to a color
      const colors = ["green", "blue", "orange", "red"];
      return colors[Math.min(difficulty, colors.length) - 1];
    },
    formatDate(dateString) {
      // Format the date
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    // 限制10个单词并加。。。
    getContent(content) {
      if (content.length < 10) return content + "...";
      const firstTenWords = content.slice(0, 20) + "..."
      return firstTenWords      
    },
  },
};
</script>

<style>
.cardHeight {
  height: 100%;
  width: 90%;
}
</style>
