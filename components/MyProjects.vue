<template>
  <div class="my-projects">
    <h1 class="h1-custom">My Projects</h1>
    <div class="project__all-cards">
      <div
        v-on:click="clickCard(card.link)"
        class="projects__card"
        :key="card.title"
        v-for="card in cards"
      >
        <div class="projects__interior-card">
          <h4 class="h4-custom card__title">{{ card.title }}</h4>
          <p class="projects__card-content">
            {{ cardContentMaxLength(card.content) }}
          </p>
          <p class="card-language-text">{{ card.language }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MyProjects",
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    clickCard(link: string) {
      window.open(link, "_blank");
    },
    cardContentMaxLength(text: string) {
      const maxLength = 100;
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      } else {
        return text;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.my-projects {
  margin: 20px 0;
  @media only screen and (max-width: 680px) {
    .project__all-cards {
      margin: auto;
      width: 80%;
    }
  }

  .card__title {
    margin: 20px 0;
  }

  .card-language-text {
    margin-top: 40px;
  }

  .projects__card {
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 300px;
    display: inline-block;
    margin: 10px 10px 0 0;
    cursor: pointer;
  }

  .projects__card:hover {
    transition: all 0.2s ease-in-out;
    background-color: rgb(0, 55, 42);
    border: 1px solid rgba(204, 204, 204, 0);
    transform: scale(1.05);
  }

  .projects__interior-card {
    padding: 0 15px 0 15px;
  }

  .projects__card-content {
    height: 100px;
  }
}
</style>
