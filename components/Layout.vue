<template>
  <div class="layout">
    <header class="header">
      <strong>
        <NuxtLink class="my-name" to="/">{{ name }}</NuxtLink>
      </strong>
      <nav class="nav__links">
        <NuxtLink class="nav__link" to="/">Home</NuxtLink>
        <NuxtLink class="nav__link" to="/timeline/">Timeline</NuxtLink>
      </nav>
    </header>
    <slot />
  </div>
</template>

<script lag="ts">
export default {
  data() {
    return {
      name: "Reinaldo Rozato Junior",
    };
  },
};
</script>

<style scoped lang="scss">
.my-name {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.layout {
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.nav__links {
  display: flex;
}
</style>
