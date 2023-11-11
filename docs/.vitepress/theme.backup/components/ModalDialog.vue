<script setup lang="ts">
import { watch, ref } from 'vue'

const props = defineProps<{
  showDialog: boolean,
  title: string
}>()

const enableTeleport = ref(false)

watch(() => props.showDialog, () => {
  if (props.showDialog)
    enableTeleport.value = true
})
</script>

<template>
  <Teleport to="#app" :disabled="!enableTeleport">
    <div v-if="showDialog" class="modal">
      <div class="model-content">
        <h1>{{ title }}</h1>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.model-content {
  background-color: var(--vp-c-bg);

  height: auto;
  width: 100vw;
  max-width: 500px;
  padding: 1.5rem;
  border-radius: 8px;
}

.model-content h1 {
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>