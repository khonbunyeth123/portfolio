<script setup>
import { onMounted, ref, watch } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const dark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  dark.value = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
})

watch(dark, (value) => {
  document.documentElement.classList.toggle('dark', value)
  localStorage.setItem('theme', value ? 'dark' : 'light')
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 transition-colors dark:bg-slate-900 dark:text-slate-100">
    <Navbar :dark="dark" @toggle-dark="dark = !dark" />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
