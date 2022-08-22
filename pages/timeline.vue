<template>
  <Layout>
    <transition name="fade" appear>
      <div v-if="timeline.length > 0">
        <path-timeline :blocks="timeline" />
      </div>
      <div v-else>
        <h1>Empty Timeline</h1>
      </div>
    </transition>
  </Layout>
</template>

<script lang="ts">
import { onBeforeMount, ref } from "vue";
import { fetchTimelineData } from "../utils";

export default {
  setup() {
    const timeline = ref([
      {
        datePublished: "13/08/2022",
        title: "Creating this website",
        content:
          "Here I tell why I created this website, the technologies I used and the things I want to improve.",
        fullContent: [
          "This is my second website, which I made using the tools I know at the moment. The first one was made using React and was way more complex than it should had been.",
          "This one focus on the basic features first, using tools that are made for this type of content. Then later on I will add more features as I need them.",
          "It was created using Gridsome, a really cool Jamstack framework for building static generated websites using Vue under the hud.",
          "I was not happy with my old website and it was very hard to update it, so I decided to create a new one. I used Vue and Gridsome for the frontend and a simple file server to provide the data for this timeline.",
        ],
        readTime: "1 min read",
        readText: "Read More...",
        readLink: "#",
      },
    ]);

    async function fetchTimeline() {
      const timelineData = await fetchTimelineData();
      if (timelineData.length > 0) {
        timeline.value = timelineData;
      }
    }

    onBeforeMount(() => {
      fetchTimeline();
    });

    return {
      timeline,
    };
  },
};
</script>
