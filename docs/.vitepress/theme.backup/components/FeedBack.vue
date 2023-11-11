<script lang="ts" setup>
import { VPButton } from 'vitepress/theme'
import ModalDialog from './ModalDialog.vue'
import { ref, type Ref } from 'vue'

const openFeedbackModal = ref(false)
const url = ref('')
const content = ref('')
const form: Ref<null | HTMLFormElement> = ref(null)

const isLoading = ref(false)
const isSubmitSuccess = ref(false)

function showModal() {
  openFeedbackModal.value = true
  url.value = location.href

  isSubmitSuccess.value = false
  isLoading.value = false
}

async function submit(event: Event) {
  event.preventDefault()
  if (form.value === null) return;

  const formData = new FormData(form.value);

  isLoading.value = true

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    // @ts-ignore
    body: new URLSearchParams(formData).toString(),
  })

  isLoading.value = false

  if (response.ok) {
    openFeedbackModal.value = false
    isSubmitSuccess.value = true

    content.value = ''
    return
  }

  alert(`提交建议失败: ${response.statusText}`)
}
</script>

<template>
  <VPButton text="为该页提供建议" style="margin-top: 1rem;" @click="showModal" />

  <ModalDialog title="为该页提供建议" :show-dialog="openFeedbackModal">
    <form ref="form" @submit="submit" v-if="!isLoading">
      <input type="hidden" name="form-name" value="feedback" />
      <input v-model="url" type="hidden" required name="url" />

      <p>页面 URL: {{ url }}</p>
      <p>反馈内容
        <textarea v-model="content" required name="content" placeholder="反馈内容"></textarea>
      </p>

      <div style="display: flex; justify-content: right;">
        <VPButton text="取消并关闭" theme="alt" @click="openFeedbackModal = false" />
        <VPButton type="submit" text="提交" style="margin-left: 0.5rem;" />
      </div>
    </form>

    <div class="center-content" v-if="isLoading">
      <h1>正在提交...</h1>
    </div>
  </ModalDialog>

  <ModalDialog title="提交建议成功" :show-dialog="isSubmitSuccess">
    <div class="center-content">
      <h1>感谢反馈</h1>
      <VPButton text="关闭" @click="isSubmitSuccess = false" />
    </div>
  </ModalDialog>
</template>

<style scoped>
textarea {
  background-color: var(--vp-c-bg-soft);
  height: 150px;
  margin: 4px;
  padding: 4px 12px;
  border-radius: 8px;
  width: 100%;
}

h1 {
  font-size: larger;
  font-weight: bold;
  margin: 8px 0;
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>