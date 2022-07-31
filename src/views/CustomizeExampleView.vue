<template>
  <div class="example d-flex flex-column gap-16">
    <h1 class="example-title">Customize</h1>
    <h2>Just component</h2>
    <div class="example__container size-240">
      <v-image-input v-model="image1" removable />
    </div>
    <h2>Removable component</h2>
    <div class="example__container size-120">
      <v-image-input v-model="image2" removable />
    </div>

    <div class="markdown">
      {{ code }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseExampleView",
  data() {
    return {
      image1: null,
      image2: require("@/assets/logo.png"),
      code: `
$v-image-input-color: #402fa4;
$v-image-input-color-hover: #0bd094;
$v-image-input-background: #e1b547;
$v-image-input-background-hover: #0004ff;

$v-image-input-empty-layout-padding: 50px;
$v-image-input-border-radius: 50%;

$v-image-input-rm-icon-color: #fff;
$v-image-input-rm-icon-size: 48px;
@import "~vue3-img-input/src/styles/style.scss";`,
    };
  },
};
</script>

<style lang="scss">
$v-image-input-color: #402fa4;
$v-image-input-color-hover: #0bd094;
$v-image-input-background: #e1b547;
$v-image-input-background-hover: #0004ff;

$v-image-input-empty-layout-padding: 50px;
$v-image-input-border-radius: 50%;

$v-image-input-rm-icon-color: #fff;
$v-image-input-rm-icon-size: 48px;
@import "~vue3-img-input/src/styles/style.scss";
</style>
