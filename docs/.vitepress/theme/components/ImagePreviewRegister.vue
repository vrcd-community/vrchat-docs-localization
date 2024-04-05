<script setup lang="ts">
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'

// https://bddxg.top/article/note/vitepress%E4%BC%98%E5%8C%96/%E7%82%B9%E5%87%BB%E5%9B%BE%E7%89%87%E6%94%BE%E5%A4%A7.html

const route = useRoute()
const initZoom = () => {
    mediumZoom('.doc-content-image', { background: 'var(--vp-c-bg-soft)' })
}
onMounted(() => {
    initZoom()
})
watch(
    () => route.path,
    () => nextTick(() => initZoom())
)
</script>