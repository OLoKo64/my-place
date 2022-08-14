<template>
  <div>
    <h1>My Path</h1>
    <div :key="block.title" v-for="block in blocks">
      <news-block
        :datePublished="block.datePublished"
        :title="block.title"
        :content="block.content"
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
  data() {
    return {
      blocks: [
        {
          datePublished: "13/08/2022",
          title: "Creating this website",
          content: "Here I tell why I created this website, the technologies I used and the things I want to improve.",
          readTime: "2 min read",
          readText: "Read More...",
          readLink: "#",
        },
        {
          datePublished: "datePublished",
          title: "This is still under construction",
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
