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
import { fetchPathData } from "~/utils";
import { PathTimeline } from "~/components";
export default {
  components: {
    PathTimeline,
  },
  data() {
    return {
      timeline: () => [],
    };
  },
  methods: {
    async fetchData() {
      this.timeline = await fetchPathData()
    },
  },
  beforeMount() {
    this.fetchData();
  },
};
</script>
