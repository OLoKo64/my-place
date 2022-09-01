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
  </div>
</template>

<script lang="ts">
import { onBeforeMount, ref, Ref } from 'vue'
import { fetchTimelineData, TimelineData } from '../utils'

export default {
  setup () {
    const timeline: Ref<TimelineData[]> = ref([])

    async function fetchTimeline () {
      const timelineData = await fetchTimelineData()
      if (timelineData.length) {
        timeline.value = timelineData
      }
    }

    onBeforeMount(() => {
      fetchTimeline()
    })

    return {
      timeline
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
}
</style>
