<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link class="my-name" to="/">{{ name }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/timeline/">Timeline</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Reinaldo Rozato Junior'
    }
  },
}
</script>


<style>
body {
  font-family: 'DM Mono', Arial, sans-serif;
  color: rgb(200, 200, 200);
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #181a1b;
}

a {
  color: rgb(0, 177, 136);
  text-decoration: none;
}

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
</style>
