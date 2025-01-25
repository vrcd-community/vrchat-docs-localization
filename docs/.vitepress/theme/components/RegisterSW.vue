<!-- eslint-disable @typescript-eslint/no-unsafe-assignment -->
<script setup lang="ts">
import { VPButton } from 'vitepress/theme';
import { onBeforeMount, ref } from 'vue'

const offlineReady = ref(false)
const needRefresh = ref(false)

let updateServiceWorker: (() => Promise<void>) | undefined

function onOfflineReady() {
    offlineReady.value = true
}
function onNeedRefresh() {
    needRefresh.value = true
}
function close() {
    offlineReady.value = false
    needRefresh.value = false
}

onBeforeMount(async () => {
    // @ts-expect-error ask the vite-pwa why
    const { registerSW } = await import('virtual:pwa-register')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    updateServiceWorker = registerSW({
        immediate: true,
        onOfflineReady,
        onNeedRefresh,
        onRegistered() {
            console.info('Service Worker registered')
        },
        onRegisterError(e: Error) {
            console.error('Service Worker registration error!', e)
        },
    })
})
</script>

<template>
  <template v-if="offlineReady">
    <div
      class="pwa-toast"
      role="alertdialog"
      aria-labelledby="pwa-message"
    >
      <div
        id="pwa-message"
        class="mb-3"
      >
        {{ offlineReady ? '文档已准备好在离线模式下查看' : '有新的内容可用，点击刷新按钮来更新。' }}
      </div>
      <VPButton
        v-if="needRefresh"
        theme="alt"
        text="刷新"
        @click="updateServiceWorker"
      />
      <VPButton
        theme="alt"
        text="关闭"
        @click="close"
      />
    </div>
  </template>
</template>

<style>
.pwa-toast {
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 16px;
    padding: 18px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    z-index: 100;
    text-align: left;
    box-shadow: var(--vp-shadow-3);
    background-color: var(--vp-c-bg);
}

.pwa-toast #pwa-message {
    margin-bottom: 12px;
}
</style>
