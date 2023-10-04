<template>
  <div>
    <Layout>
      <transition name="fade" appear>
        <div>
          <ProfileHeader />
          <ContactInformation />
          <TechStack title="Work Stack" />
          <MyProjects :cards="myProjects" />
          <FooterLinks :links="footerLinks" />
        </div>
      </transition>
    </Layout>
    <div class="spacer layer" />
  </div>
</template>

<script lang="ts">
import { ProjectsData } from '../utils'
import { getters } from '../store/data'

export default {
  setup () {
    const footerLinks = [
      {
        name: 'Nuxt.js',
        link: 'https://nuxtjs.org/'
      },
      {
        name: 'My GitHub',
        link: 'https://github.com/oloko64'
      },
      {
        name: 'My Email',
        link: 'mailto:reinaldorozatoj.11cg1@aleeas.com'
      }
    ]

    return { footerLinks }
  },
  computed: {
    myProjects () {
      // @ts-ignore
      const myProjects: ProjectsData[] = this.$store.getters['data/getProjects'] as ReturnType<typeof getters.getProjects>
      return myProjects
    }
  },
  beforeMount () {
    // @ts-ignore
    if (!this.$store.getters['data/getProjects'].length) {
      // @ts-ignore
      this.$store.dispatch('data/fetchProjectsDataStore')
    }
  }
}
</script>

<style scoped lang="scss">
.spacer {
  margin-top: -22%;
  aspect-ratio: 1200/300;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.layer {
  background-image: url('../assets/img/layered-waves-haikei-middle.svg');
}
</style>
