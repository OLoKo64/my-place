<template>
  <div class="path-timeline">
    <h1 class="h1-custom">
      Timeline
    </h1>
    <div v-for="block in blocks" :key="block.title">
      <NewsBlock
        :date-published="block.datePublished"
        :title="block.title"
        :content="block.content"
        :full-content="block.fullContent"
        :read-time="block.readTime"
        :read-text="block.readText"
        :read-link="block.readLink"
      />
    </div>
    <hr>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PathTimeline',
  props: {
    blocks: {
      type: Array,
      default: () => []
    }
  }
}
</script>
