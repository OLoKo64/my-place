<template>
  <div>
    <h1>My Path</h1>
    <div :key="block.title" v-for="block in blocks">
      <news-block
        :datePublished="block.datePublished"
        :title="block.title"
        :content="block.content"
        :fullContent="block.fullContent"
        :readTime="block.readTime"
        :readText="block.readText"
        :readLink="block.readLink"
      >
      </news-block>
    </div>
    <hr />
  </div>
</template>

<script>
import { NewsBlock } from "~/components";
export default {
  components: {
    NewsBlock,
  },
  name: "PathTimeline",
  props: {
    blocks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
