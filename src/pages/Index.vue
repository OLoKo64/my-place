<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <profile-header />
    <tech-stack title="Stack" />
    <h1>My Path</h1>
    <block
      datePublished="datePublished"
      title="title"
      content="content"
      readTime="readTime"
      readText="readText"
      readLink="readLink"
    >
    </block>

    <footer-links :links="footerLinks" />
  </Layout>
</template>

<script>
import Block from "~/components/Block.vue";
import ProfileHeader from "~/components/ProfileHeader.vue";
import TechStack from "~/components/TechStack.vue";
import FooterLinks from "~/components/FooterLinks.vue";
export default {
  components: {
    Block,
    ProfileHeader,
    TechStack,
    FooterLinks,
  },
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      footerLinks: [
        {
          name: "Gridsome",
          link: "https://gridsome.org/",
        },
        {
          name: "My GitHub",
          link: "https://github.com/OLoKo64",
        },
        {
          name: "My Email",
          link: "mailto:reinaldorozatoj@gmail.com",
        },
      ],
    };
  },
};
</script>

<style></style>
