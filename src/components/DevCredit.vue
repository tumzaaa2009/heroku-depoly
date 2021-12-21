<template>
  <section class="mb-5">
    <h3 class="section-title-small" style="margin-left: 10px">Credit && Dev  </h3>
    <ul class="right-list">
      <li
        class="right-list-item"
        v-for="(credit, index) in designDev"
        :key="index"
      >
        <span v-if="index ==0">Design By {{ credit.name }} </span>
        <span v-else>Dev By {{credit.name}}
        <p>Language Build {{credit.Dev}}</p>
        </span>
        <!--<small style="color: #6c757d !important;"> ({{credit.dev}})</small> -->
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    designDev: {
      type: Object,
    },
  },
};
</script>

<style></style>
