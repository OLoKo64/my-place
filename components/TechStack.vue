<template>
  <div class="tech-stack">
    <h3 class="stack__title">{{ title }}</h3>
    <div>
      <img
        class="stack-image"
        alt="Rust"
        src="../assets/img/tech_stack/rust.png"
        width="45"
      />
      <img
        class="stack-image"
        alt="Rust"
        src="../assets/img/tech_stack/python.png"
        width="25"
      />
      <img
        class="stack-image"
        alt="Rust"
        src="../assets/img/tech_stack/typescript.png"
        width="25"
      />
      <img
        class="stack-image"
        alt="Rust"
        src="../assets/img/tech_stack/javascript.png"
        width="25"
      />
      <img
        class="stack-image"
        alt="Rust"
        src="../assets/img/tech_stack/vuejs.png"
        width="25"
      />
      <img
        class="stack-image"
        alt="Rust"
        src="../assets/img/tech_stack/linux.png"
        width="25"
      />
      <img
        class="stack-image"
        alt="Rust"
        src="../assets/img/tech_stack/react.png"
        width="25"
      />
      <img
        class="stack-image"
        alt="Rust"
        src="../assets/img/tech_stack/git.png"
        width="25"
      />
      <img
        class="stack-image"
        alt="Rust"
        src="../assets/img/tech_stack/html5.png"
        width="25"
      />
      <img
        class="stack-image"
        alt="Rust"
        src="../assets/img/tech_stack/nodejs.png"
        width="25"
      />
      <img
        class="stack-image"
        alt="Rust"
        src="../assets/img/tech_stack/bootstrap.png"
        width="25"
      />
      <img
        class="stack-image"
        alt="Rust"
        src="../assets/img/tech_stack/sass.png"
        width="25"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TechStack",
  props: {
    title: {
      type: String,
      default: "My Stack",
    },
  },
};
</script>

<style scoped lang="scss">
.tech-stack {
  margin: 20px 0;

  .stack-image {
    margin-right: 15px;
    border-radius: 15%;
  }

  .stack-image:hover {
    transform: scale(1.3);
  }

  .stack__title {
    font-size: 1.3rem;
    font-weight: bold;
  }
}
</style>
