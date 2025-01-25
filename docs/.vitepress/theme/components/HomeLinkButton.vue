<template>
  <div class="button-container">
    <div class="button-title">
      <img
        v-if="icon !== undefined"
        :src="icon"
      >
      <h2>{{ text }}</h2>
      <p>{{ description }}</p>
    </div>
    <VPButton
      class="button"
      theme="brand"
      text="了解更多"
      :href="link"
    />
  </div>
</template>

<script setup lang="ts">
import { VPButton } from 'vitepress/theme'

defineProps<{
    text: string,
    link: string,
    description: string,
    icon?: string
}>()
</script>

<style scoped>
.button-container {
    display: flex;
    flex-direction: column;

    padding: 2rem 1rem;
}

.button-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    flex: 1;
}

.button-title p {
    margin: 0 0 1rem 0;
}

.button-title h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5;
    margin: 1rem 0;
}

.button-title img {
    flex: 0 0 auto;
}

.spacer {
    flex-grow: 1;
}
</style>
