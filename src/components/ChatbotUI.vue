<template>
  <div class="chatbot-ui">
    <div class="messages">
      <!-- 消息列表 -->
    </div>
    <input type="text" v-model="userInput" @keyup.enter="sendMessage">
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: '',
      messages: []
    };
  },
  methods: {
    sendMessage() {
      // 发送消息到 Chatbot 并处理回复
      
    }
  }
};
</script>

<style>
.chatbot-ui {
  /* 样式 */
}
</style>
