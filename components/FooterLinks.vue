<template>
  <div class="footer-links">
    <hr />
    <div class="footer-links">
      <span class="home-links" :key="link.name" v-for="link in links">
        <span>|</span>
        <a :href="link.link" target="_blank">{{ link.name }}</a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FooterLinks",
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
.footer-links {
  margin-top: 25px;
  margin-bottom: 25px;
  .home-links a {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
}
</style>
