<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <profile-header />

    <h1>My path</h1>
    <block
      datePublished="datePublished"
      title="title"
      content="content"
      readTime="readTime"
      readText="readText"
      readLink="readLink"
    >
    </block>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <span>|</span>
      <a href="https://github.com/OLoKo64" target="_blank" rel="noopener"
        >My GitHub</a
      >
    </p>
  </Layout>
</template>

<script>
import Block from "~/components/Block.vue";
import ProfileHeader from "~/components/ProfileHeader.vue";
export default {
  components: {
    Block,
    ProfileHeader,
  },
  metaInfo: {
    title: "Home",
  },
};
</script>

<style>
.profile-pic {
  border-radius: 50%;
}

.home-links a {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
</style>
