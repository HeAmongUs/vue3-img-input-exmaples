<template>
  <header class="header d-flex align-center">
    <h1 class="header-title">vue3-img-input</h1>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped lang="scss">
.header {
  padding: 24px;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #eaecef;

  &-title {
    font-size: 20px;
    color: #2c3e50;
  }
}
</style>
