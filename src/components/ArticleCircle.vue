<template>
  <div
    class="article-circle"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip">
    {{ article.title }}
    <div class="tooltip" v-if="isTooltipVisible">
      {{ article.content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isTooltipVisible: false,
    };
  },
  methods: {
    showTooltip() {
      this.isTooltipVisible = true;
    },
    hideTooltip() {
      this.isTooltipVisible = false;
    },
  },
};
</script>

<style scoped>
.article-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4a4a4a;
    color: white;
    cursor: pointer;
}

.article-circle:hover {
    background-color: #6b6b6b;
}

.hidden {
    display: none;
}
.tooltip {
    position: absolute;
    padding: 10px;
    background-color: black;
    color: white;
    border-radius: 5px;
    font-size: 0.8rem;
}
</style>
