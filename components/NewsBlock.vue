<template>
  <div class="news-block">
    <hr />
    <p>{{ datePublished }}</p>
    <h2 class="h2-custom block__title">{{ title }}</h2>
    <p>{{ content }}</p>
    <div v-if="show">
      <p :key="paragraph" v-for="paragraph in fullContent">{{ paragraph }}</p>
    </div>
    <div class="block__time">
      <span class="block__read-time">{{ readTime }}</span>
      <a @click="show = !show" v-if="!show">{{ readText }}</a>
      <a @click="show = !show" v-else>Hide</a>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "NewsBlock",
  props: {
    datePublished: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    fullContent: {
      type: Array,
      default: () => [],
    },
    readTime: {
      type: String,
      default: "",
    },
    readText: {
      type: String,
      default: "Read More...",
    },
    readLink: {
      type: String,
      default: "",
    },
  },
  setup() {
    const show = ref(false);

    return { show };
  },
};
</script>

<style scoped lang="scss">
.news-block {
  .block__time {
    margin-bottom: 15px;
  }

  .block__title {
    margin-bottom: 30px;
  }

  .block__read-time {
    font-size: 0.8rem;
    color: rgb(200, 200, 200);
    margin-right: 10px;
  }
}
</style>
