<template>
  <transition name="fade" appear>
    <Layout>
      <path-timeline />
    </Layout>
  </transition>
</template>

<script>
import { PathTimeline } from "~/components";
export default {
  components: {
    PathTimeline,
  },
};
</script>
