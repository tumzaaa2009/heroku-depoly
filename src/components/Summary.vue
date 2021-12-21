<template>
  <section class="mb-5">
    <h3 class="section-title">
      <i class="fa fa-list-alt" aria-hidden="true"></i> Summary
    </h3>
    <span>{{ summaryInfo }}</span>
  </section>
</template>

<script>
export default {
  props: {
    summaryInfo: {
      type: String,
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;1,100&family=Prompt:ital,wght@1,100;1,500&display=swap");
span {
  font-family: "Kanit", sans-serif;
  font-family: "Prompt", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
