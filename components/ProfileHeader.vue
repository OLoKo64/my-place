<template>
  <div class="profile-header">
    <div class="flex-display-block">
      <div class="profile-pic-block">
        <img
          class="profile-pic"
          alt="Profile Image"
          src="../assets/img/profile_pic.jpg"
          width="175"
        />
      </div>
      <div>
        <p>
          My name is Reinaldo Rozato Junior, graduated in Computer Science at
          UNIP.
        </p>
        <p>I'm 24 years old living in Araraquara-SP, Brazil.</p>
        <p>
          Some of my favorite languages are Python, JavaScript and Rust, which
          I'm currently learning and loving using it.
        </p>
        <p>
          I have 2 years of work experience, mostly using Vue in the front end
          and Python in the backend.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ProfileHeader",
};
</script>

<style scoped lang="scss">
.profile-header {
  margin: 20px 0;
  
  /* Smartphones (portrait) ----------- */
  @media only screen and (max-width: 600px) {
    .flex-display-block {
      display: block !important;
    }

    .profile-pic-block {
      display: flex;
      justify-content: center;
    }
  }

  .flex-display-block {
    display: flex;
    justify-content: flex-start;
    align-items: top;
  }

  .profile-pic {
    margin-right: 20px;
    border-radius: 50%;
    border: 2px solid #ffffff;
  }
}
</style>
