<template>
  <div class="reading-chatbot-container">
    <reading-view></reading-view>
    <chatbot-ui></chatbot-ui>
  </div>
</template>

<script>
import ReadingView from '@/components/ReadingView.vue';
import ChatbotUi from '@/components/ChatbotUI.vue';

export default {
  components: {
    ReadingView,
    ChatbotUi
  }
};
</script>

<style>
/* 添加样式以协调阅读区域和聊天区域的布局 */
.reading-chatbot-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
</style>