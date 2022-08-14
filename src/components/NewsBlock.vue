<template>
  <div>
    <hr />
    <p>{{ datePublished }}</p>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <div v-if="show">
      <p :key="paragraph" v-for="paragraph in fullContent">{{ paragraph }}</p>
    </div>
    <div class="block__time">
      <span class="block__read-time">{{ readTime }}</span>
      <a href="" @click="show = !show" v-if="!show">{{ readText }}</a>
      <a href="" @click="show = !show" v-else>Hide</a>
    </div>
  </div>
</template>

<script>
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
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.block__time {
  margin-bottom: 15px;
}

.block__read-time {
  font-size: 0.8rem;
  color: rgb(200, 200, 200);
  margin-right: 10px;
}
</style>
