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

    const myProjects = [
      {
        title: 'TransferSh Helper Rusted',
        content:
          'Store your transfer.sh links, so you can remember them later and know when they will expire, but now written in Rust.',
        language: 'Rust',
        link: 'https://github.com/OLoKo64/transfer-sh-helper-rusted'
      },
      {
        title: 'Regrep',
        content: 'Recreate grep in Rust, mostly for learning.',
        language: 'Rust',
        link: 'https://github.com/OLoKo64/regrep'
      },
      {
        title: 'Turing Machine',
        content: 'Recreation of the Turing Machine in PHP.',
        language: 'PHP',
        link: 'https://github.com/'
      },
      {
        title: 'Steam Prices Crawler',
        content:
          'Crawler to get prices from Steam and output them to a csv file.',
        language: 'Python',
        link: 'https://github.com/OLoKo64/steam-game-prices'
      },
      {
        title: 'OLoKo64-dev',
        content: 'The website where you are right now. Built using the Nuxt.js framework.',
        language: 'Vue',
        link: 'https://github.com/OLoKo64/oloko64-dev'
      }
    ]

    return { footerLinks, myProjects }
  }
}
</script>
