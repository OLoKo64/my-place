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
        link: 'https://github.com/OLoKo64'
      },
      {
        name: 'My Email',
        link: 'mailto:reinaldorozatoj@gmail.com'
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
