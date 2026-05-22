<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from './icons'

defineProps({ dark: Boolean })
const emit = defineEmits(['toggle-dark'])

const open = ref(false)
const activeLink = ref('home')
const links = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

let observer

const goTo = (id) => {
  activeLink.value = id
  open.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const sections = links
    .map((id) => document.getElementById(id))
    .filter(Boolean)

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible.length > 0) {
        activeLink.value = visible[0].target.id
      }
    },
    {
      rootMargin: '-25% 0px -55% 0px',
      threshold: [0.2, 0.4, 0.6]
    }
  )

  sections.forEach((section) => observer.observe(section))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <button class="text-xl font-bold text-slate-900 dark:text-slate-50" @click="goTo('home')">BUNYETH</button>

      <div class="hidden items-center gap-6 md:flex">
        <button
          v-for="link in links"
          :key="link"
          class="capitalize text-sm font-medium transition"
          :class="activeLink === link
            ? 'text-[#5fa6ed]'
            : 'text-slate-600 hover:text-[#5fa6ed] dark:text-slate-300'"
          @click="goTo(link)"
        >
          {{ link }}
        </button>
      </div>

      <div class="flex items-center gap-2">
        <button class="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:border-[#5fa6ed] hover:text-[#5fa6ed] dark:border-slate-700 dark:text-slate-300" @click="emit('toggle-dark')">
          <SunIcon v-if="dark" class="h-4 w-4" />
          <MoonIcon v-else class="h-4 w-4" />
        </button>
        <button class="rounded-lg border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-300 md:hidden" @click="open = !open">
          <XMarkIcon v-if="open" class="h-4 w-4" />
          <Bars3Icon v-else class="h-4 w-4" />
        </button>
      </div>
    </nav>

    <div v-if="open" class="space-y-3 border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-900 md:hidden">
      <button
        v-for="link in links"
        :key="`mobile-${link}`"
        class="block w-full text-left capitalize text-sm font-medium transition"
        :class="activeLink === link
          ? 'text-[#5fa6ed]'
          : 'text-slate-700 dark:text-slate-200'"
        @click="goTo(link)"
      >
        {{ link }}
      </button>
    </div>
  </header>
</template>
