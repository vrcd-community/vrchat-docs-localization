<template>
  <div class="banner">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    subtitle: string
}>()
</script>

<style scoped>
.banner {
    background-image: url('/assets/banner.jpg');
    background-repeat: repeat;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 5rem 2rem;

    color: var(--vp-c-white);
}

.banner h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.25;
    margin: 1rem 0;
}

.banner p {
    font-size: 1.5rem;
}
</style>