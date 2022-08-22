<template>
  <div>
    <h2>Contact Information</h2>
    <div class="contact__block">
      <a href="https://github.com/OLoKo64" target="_blank">
        <font-awesome :icon="['fab', 'github']" />
      </a>
      <a href="https://t.me/5516997226813" target="_blank">
        <font-awesome :icon="['fab', 'telegram']" />
      </a>
      <a href="https://wa.me/qr/B5FIPTNB2QW2I1" target="_blank">
        <font-awesome :icon="['fab', 'whatsapp']" />
      </a>
      <a href="https://www.linkedin.com/in/reinaldo-rozato-junior-309ba319a/" target="_blank">
        <font-awesome :icon="['fab', 'linkedin']" />
      </a>
      <a href="mailto:reinaldorozatoj@gmail.com" target="_blank">
        <font-awesome :icon="['fab', 'google']" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
.contact__block {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2em;
}

a {
    padding: 0 10px;
}
</style>
