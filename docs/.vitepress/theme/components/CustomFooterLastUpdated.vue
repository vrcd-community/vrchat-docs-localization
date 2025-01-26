<!-- https://github.com/vuejs/vitepress/blob/9b5c0377cd3474447c84b2901801287f3caf3d82/src/client/theme-default/components/VPDocFooterLastUpdated.vue -->

<script setup lang="ts">
import { ref, computed, watchEffect, onMounted } from 'vue'
import { useData } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'

import { data as syncData } from '../../syncStatus.data'

const { theme, page, lang } = useData<DefaultTheme.Config>()

const date = computed(
  () => page.value.lastUpdated ? new Date(page.value.lastUpdated) : undefined
)
const isoDatetime = computed(() => date.value?.toISOString())
const datetime = ref('')

const syncStatus = computed(() => {
  const syncDataKeys = Object.keys(syncData)

  for (const key of syncDataKeys) {
    if (page.value.relativePath.includes(key)) {
      return syncData[key]
    }
  }

  return undefined
})
const upstreamCommit = computed(() => page.value.frontmatter.upstreamCommit as string | undefined)
const upstreamLink = computed(() => {
  if (!syncStatus.value?.upstreamRepo || !upstreamCommit.value) {
    return undefined
  }

  const pathParts = page.value.relativePath.split('/')
  pathParts[0] = syncStatus.value.root !== '/' ? syncStatus.value.root : ''
  const finalPath = pathParts[0] !== '/' ? pathParts.join('/') : pathParts.slice(1).join('/')

  return `https://github.com/${syncStatus.value.upstreamRepo}/blob/${upstreamCommit.value}/${finalPath}`
})

// set time on mounted hook to avoid hydration mismatch due to
// potential differences in timezones of the server and clients
onMounted(() => {
  watchEffect(() => {
    datetime.value = new Intl.DateTimeFormat(
      theme.value.lastUpdated?.formatOptions?.forceLocale ? lang.value : undefined,
      theme.value.lastUpdated?.formatOptions ?? {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    ).format(date.value)
  })
})
</script>

<template>
  <div>
    <p
      v-if="isoDatetime && datetime"
      class="VPLastUpdated"
    >
      {{ theme.lastUpdated?.text || 'Last updated' }}:
      <time :datetime="isoDatetime">{{ datetime }}</time>
    </p>
    <p
      v-if="upstreamCommit"
      class="VPLastUpdated upstream-text"
    >
      对应上游 Commit Hash:
      <code :title="upstreamCommit"><a
        :href="upstreamLink"
        target="_blank"
      >{{ upstreamCommit?.substring(0, 7) }}</a></code>
      的版本
    </p>
  </div>
</template>

<style scoped>
.VPLastUpdated {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-align: right;
}

.VPLastUpdated a {
  color: var(--vp-c-brand-2);
}

.upstream-text {
  font-size: x-small;
  line-height: normal;
  color: var(--vp-c-text-3);
}
</style>
