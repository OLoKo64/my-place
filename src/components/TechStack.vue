<template>
  <div>
    <h3>{{ title }}</h3>
    <div>
      <g-image
        class="stack-image"
        alt="Rust"
        src="~/img/tech_stack/rust.png"
        width="45"
      ></g-image>
      <g-image
        class="stack-image"
        alt="Rust"
        src="~/img/tech_stack/python.png"
        width="25"
      ></g-image>
      <g-image
        class="stack-image"
        alt="Rust"
        src="~/img/tech_stack/typescript.png"
        width="25"
      ></g-image>
      <g-image
        class="stack-image"
        alt="Rust"
        src="~/img/tech_stack/javascript.png"
        width="25"
      ></g-image>
      <g-image
        class="stack-image"
        alt="Rust"
        src="~/img/tech_stack/vuejs.png"
        width="25"
      ></g-image>
      <g-image
        class="stack-image"
        alt="Rust"
        src="~/img/tech_stack/linux.png"
        width="25"
      ></g-image>
      <g-image
        class="stack-image"
        alt="Rust"
        src="~/img/tech_stack/react.png"
        width="25"
      ></g-image>
      <g-image
        class="stack-image"
        alt="Rust"
        src="~/img/tech_stack/git.png"
        width="25"
      ></g-image>
      <g-image
        class="stack-image"
        alt="Rust"
        src="~/img/tech_stack/html5.png"
        width="25"
      ></g-image>
      <g-image
        class="stack-image"
        alt="Rust"
        src="~/img/tech_stack/nodejs.png"
        width="25"
      ></g-image>
      <g-image
        class="stack-image"
        alt="Rust"
        src="~/img/tech_stack/bootstrap.png"
        width="25"
      ></g-image>
      <g-image
        class="stack-image"
        alt="Rust"
        src="~/img/tech_stack/sass.png"
        width="25"
      ></g-image>
    </div>
  </div>
</template>

<script>
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

<style>
.stack-image {
  margin-right: 15px;
  border-radius: 15%;
}
</style>
