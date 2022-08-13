<template>
  <div>
    <h1>My Projects</h1>
    <div
      v-on:click="clickCard(card.link)"
      class="projects__card"
      :key="card.title"
      v-for="card in cards"
    >
      <div class="projects__interior-card">
        <h4>{{ card.title }}</h4>
        <p class="projects__card-content">
          {{ cardContentMaxLength(card.content) }}
        </p>
        <p>{{ card.language }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProjects",
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    clickCard(link) {
      window.open(link, "_blank");
    },
    cardContentMaxLength(text) {
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

<style>
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
  background-color: #2b483e;
  border: 1px solid rgba(204, 204, 204, 0);
}

.projects__interior-card {
  padding: 0 15px 0 15px;
}

.projects__card-content {
  height: 100px;
}
</style>
