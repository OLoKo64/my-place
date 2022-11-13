<template>
  <div class="path-timeline">
    <h1 class="h1-custom">Timeline</h1>
    <NewsBlock
      :is-open="true"
      :date-published="firstBlock.datePublished"
      :title="firstBlock.title"
      :content="firstBlock.content"
      :full-content="firstBlock.fullContent"
      :read-time="firstBlock.readTime"
      :read-text="firstBlock.readText"
      :read-links="firstBlock.readLinks"
    />
    <div v-for="block in restBlocks" :key="block.title">
      <NewsBlock
        :date-published="block.datePublished"
        :title="block.title"
        :content="block.content"
        :full-content="block.fullContent"
        :read-time="block.readTime"
        :read-text="block.readText"
        :read-links="block.readLinks"
      />
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
  computed: {
    firstBlock() {
      return this.blocks[0];
    },
    restBlocks () {
      return this.blocks.slice(1);
    },
  },
};
</script>
