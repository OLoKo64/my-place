<template>
  <div>
    <h1 class="h1-custom">Timeline</h1>
    <div :key="block.title" v-for="block in blocks">
      <NewsBlock
        :datePublished="block.datePublished"
        :title="block.title"
        :content="block.content"
        :fullContent="block.fullContent"
        :readTime="block.readTime"
        :readText="block.readText"
        :readLink="block.readLink"
      >
      </NewsBlock>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
export default {
  name: "PathTimeline",
  props: {
    blocks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
