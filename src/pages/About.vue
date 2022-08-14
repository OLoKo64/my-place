<template>
  <transition name="fade" appear>
    <Layout>
      <div v-if="timeline.length > 0">
        <path-timeline :blocks="timeline" />
      </div>
      <div v-else>
        <h1>Empty Timeline</h1>
      </div>
    </Layout>
  </transition>
</template>

<script>
import { fetchTimelineData } from "~/utils";
import { PathTimeline } from "~/components";
export default {
  components: {
    PathTimeline,
  },
  data() {
    return {
      timeline: [
        {
          datePublished: "13/08/2022",
          title: "Creating this website",
          content:
            "Here I tell why I created this website, the technologies I used and the things I want to improve.",
          fullContent: [
            "This is my second website, which I made using the tools I know about. The first one was made using React and was way more complex than it should be.",
            "This one focus on the basic features first, using tools that are made for this type of content. Then I will add more features and improve them.",
          ],
          readTime: "1 min read",
          readText: "Read More...",
          readLink: "#",
        },
      ],
    };
  },
  methods: {
    async fetchData() {
      const timelineData = await fetchTimelineData();
      if (timelineData.length > 0) {
        this.timeline = timelineData;
      }
    },
  },
  beforeMount() {
    this.fetchData();
  },
};
</script>
