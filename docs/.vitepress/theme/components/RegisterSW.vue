<script setup lang="ts">
import { VPButton } from 'vitepress/theme';
import { onBeforeMount, ref } from 'vue'

const offlineReady = ref(false)
const onOfflineReady = () => {
    offlineReady.value = true
}
const close = async () => {
    offlineReady.value = false
}

onBeforeMount(async () => {
    const { registerSW } = await import('virtual:pwa-register')
    registerSW({
        immediate: true,
        onOfflineReady,
        onRegistered() {

            console.info('Service Worker registered')
        },
        onRegisterError(e) {
            console.error('Service Worker registration error!', e)
        },
    })
})
</script>

<template>
    <template v-if="offlineReady">
        <div class="pwa-toast" role="alertdialog" aria-labelledby="pwa-message">
            <div id="pwa-message" class="mb-3">
                文档已准备好在离线模式下查看
            </div>
            <VPButton theme="alt" text="关闭" @click="close" />
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