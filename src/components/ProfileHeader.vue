<template>
  <div>
    <div class="flex-display-block">
      <g-image
        class="profile-pic"
        alt="Profile Image"
        src="~/img/profile_pic.jpg"
        width="175"
      />
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileHeader",
};
</script>

<style>
.flex-display-block {
    display: flex;
    justify-content: flex-start;
    align-items: top;
}

.profile-pic {
    margin-right: 20px;
}
</style>
