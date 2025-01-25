<template>
  <VPButton
    text="查看原文"
    :href="link"
    style="margin-top: 1rem;"
  />
  <VPButton
    text="在浮动窗口中查看原文"
    @click="isWindowOpen = true"
    style="margin-top: 1rem;"
  />
  <ClientOnly>
    <div>
      <Teleport to="#app">
        <div style="position: fixed;top: 0;left: 0;z-index: 100;">
          <vue-draggable-resizable
            v-if="isWindowOpen"
            :w="500"
            :h="600"
            :resizable="true"
            :prevent-deactivation="true"
            :active="true"
            class-name-handle="handle"
            class="floating-window"
          >
            <div class="floating-window-title-bar">
              <span class="floating-window-title-bar-text">查看原文</span>
              <button
                class="floating-window-close-button"
                @click="isWindowOpen = false"
              >
                X
              </button>
            </div>
            <div class="floating-window-content">
              <iframe :src="link" />
            </div>
          </vue-draggable-resizable>
        </div>
      </Teleport>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress';
import { VPButton } from 'vitepress/theme'
import { ref, watch } from 'vue'
// @ts-expect-error it don't have types
import VueDraggableResizable from 'vue-draggable-resizable'

const route = useRoute()
const link = ref('')

link.value = 'https://' + route.path.slice(1)

watch(() => route.path, () => {
  link.value = 'https://' + route.path.slice(1)
})

const isWindowOpen = ref(false)
</script>
<style scoped>
.floating-window-title-bar-text {
  flex: 1;
  font-weight: bold;
}

.floating-window-close-button {
  font-weight: bolder;
  font-size: 1rem;
}

.floating-window-title-bar {
  display: flex;
  padding: 12px;
  user-select: none;
}

.floating-window {
  display: flex;
  flex-direction: column;

  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-elv);
  border-radius: 12px;
  box-shadow: var(--vp-shadow-3);
}

.floating-window-content {
  height: 100%;
}

.floating-window iframe {
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 0 0 12px 12px;
}
</style>
