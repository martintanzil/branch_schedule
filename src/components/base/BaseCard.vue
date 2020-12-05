<template>
  <div class="card">
    <div class="card-header card-form">
      <h2>{{ title }}</h2>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
.card-form {
  background-color: #ff7266 !important;
  color: #fff;
}
</style>