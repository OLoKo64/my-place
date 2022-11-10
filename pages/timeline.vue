<template>
  <div class="timeline">
    <Layout>
      <transition name="fade" appear>
        <div v-if="timeline.length">
          <path-timeline :blocks="timeline" />
        </div>
        <div v-else class="loading-block">
          <b-spinner label="Spinning" variant="secondary" />
        </div>
      </transition>
    </Layout>
    <div class="spacer layer" />
  </div>
</template>

<script lang="ts">
import { TimelineData } from '../utils'
import { getters } from '../store/data'

export default {
  data: () => ({
  }),
  computed: {
    timeline () {
      // @ts-ignore
      const timeline: TimelineData[] = this.$store.getters['data/getTimeline'] as ReturnType<typeof getters.getTimeline>
      return timeline
    }
  },
  beforeMount () {
    // @ts-ignore
    if (!this.$store.getters['data/getTimeline'].length) {
      // @ts-ignore
      this.$store.dispatch('data/fetchTimelineDataStore')
    }
  }
}
</script>

<style scoped lang="scss">
.timeline {
  .loading-block {
    display: flex;
    justify-content: center;
    margin-top: 80px;
  }
  .spacer {
    aspect-ratio: 1300/300;
    margin-top: -10%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .layer {
    background-image: url('../assets/img/layered-waves-haikei.svg');
  }
}
</style>
