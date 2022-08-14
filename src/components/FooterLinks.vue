<template>
  <div class="footer-links">
    <hr />
    <div class="footer-links">
      <span class="home-links" :key="link.name" v-for="link in links">
        <span>|</span>
        <a :href="link.link" target="_blank" rel="noopener">{{ link.name }}</a>
      </span>
    </div>
  </div>
</template>

<script>
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

<style>
.footer-links {
  margin-top: 25px;
  margin-bottom: 25px;
}

.home-links a {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
</style>
