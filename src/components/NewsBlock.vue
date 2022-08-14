<template>
  <div>
    <hr />
    <p>{{ datePublished }}</p>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <div class="block__time">
      <span class="block__read-time">{{ readTime }}</span>
      <a :href="readLink">{{ readText }}</a>
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
