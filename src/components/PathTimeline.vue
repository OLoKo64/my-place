<template>
  <div>
    <h1>My Path</h1>
    <div :key="block.title" v-for="block in blocks">
      <block
        :datePublished="block.datePublished"
        :title="block.title"
        :content="block.content"
        :readTime="block.readTime"
        :readText="block.readText"
        :readLink="block.readLink"
      >
      </block>
    </div>
    <hr />
  </div>
</template>

<script>
import Block from "~/components/Block.vue";
export default {
  components: {
    Block,
  },
  name: "PathTimeline",
  data() {
    return {
      blocks: [
        {
          datePublished: "datePublished",
          title: "title",
          content: "content",
          readTime: "readTime",
          readText: "readText",
          readLink: "readLink",
        },
        {
          datePublished: "datePublished",
          title: "title2",
          content: "content",
          readTime: "readTime",
          readText: "readText",
          readLink: "readLink",
        },
      ],
    };
  },
};
</script>

<style></style>
