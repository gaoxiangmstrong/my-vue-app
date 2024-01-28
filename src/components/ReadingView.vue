<template>
  <div class="reading-view">
    <h2>今日短文</h2>
    <p>{{ shortStory }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shortStory: '这里是故事内容...'
    };
  }
};
</script>

<style>
.reading-view {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
.reading-view h2 {
  text-align: center;
}
.reading-view p {
  text-align: justify;
}
</style>