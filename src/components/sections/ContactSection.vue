<script setup>
import { onBeforeUnmount, reactive, ref } from 'vue'
import { EnvelopeIcon } from '../icons'
defineProps({ profile: Object })

const previewImage = ref('')
const isDragging = ref(false)
const fileError = ref('')
const form = reactive({ name: '', email: '', message: '' })
const submitError = ref('')

function handleSubmit() {
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    submitError.value = 'Please fill in name, email, and message.'
    return
  }

  submitError.value = ''
  const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
  )

  window.location.href = `mailto:bunyeth664@gmail.com?subject=${subject}&body=${body}`
}

function setPreview(file) {
  if (!file) return
  if (!file.type.startsWith('image/')) {
    fileError.value = 'Please choose an image file.'
    return
  }
  fileError.value = ''
  if (previewImage.value) URL.revokeObjectURL(previewImage.value)
  previewImage.value = URL.createObjectURL(file)
}

function onFileSelect(event) {
  const file = event.target.files?.[0]
  setPreview(file)
  event.target.value = ''
}

function onDrop(event) {
  isDragging.value = false
  const file = event.dataTransfer?.files?.[0]
  setPreview(file)
}

onBeforeUnmount(() => {
  if (previewImage.value) URL.revokeObjectURL(previewImage.value)
})
</script>
<template>
  <section id="contact" class="px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
      <div data-reveal class="translate-y-6 space-y-4 opacity-0 transition duration-700">
        <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">Contact</h2>
        <p class="text-slate-600 dark:text-slate-300">If you have an idea, opportunity, or project, let’s build it together.</p>
        <a :href="`mailto:${profile.email}`" class="inline-flex items-center gap-2 text-[#5fa6ed]">
          <EnvelopeIcon class="h-4 w-4"/>
          {{ profile.email }}
        </a>
      </div>
      <form data-reveal class="translate-y-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 opacity-0 shadow-sm transition duration-700 dark:border-slate-700 dark:bg-slate-800" @submit.prevent="handleSubmit">
        <input v-model="form.name" type="text" placeholder="Name" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#5fa6ed] dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
        <input v-model="form.email" type="email" placeholder="Email" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#5fa6ed] dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
        <textarea v-model="form.message" rows="5" placeholder="Message" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#5fa6ed] dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"></textarea>
        <p v-if="submitError" class="text-sm text-red-500">{{ submitError }}</p>
        <p v-if="fileError" class="text-sm text-red-500">{{ fileError }}</p>
        <button type="submit" class="rounded-xl bg-[#5fa6ed] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4d95db]">Send Message</button>
      </form>
    </div>
  </section>
</template>
