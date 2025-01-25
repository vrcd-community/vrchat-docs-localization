<template>
  <div class="banner-container">
    <img
      class="banner-background"
      src="/assets/banner/banner-background.svg"
    >
    <img
      class="banner-shape"
      src="/assets/banner/shape.svg"
    >
    <img
      class="banner-shape"
      src="/assets/banner/text-layer.svg"
    >
  </div>
</template>

<style scoped>
.banner-container {
    display: grid;
    height: 400px;
}

.banner-background {
    height: 400px;
    width: 100%;
    object-fit: cover;

    grid-area: 1 /1;
}

.banner-shape {
    grid-area: 1 / 1;
    justify-self: center;
    align-self: center;
    max-height: 250px;
}
</style>