<script setup>
import { CodeBracketIcon, SwatchIcon, CircleStackIcon, ServerStackIcon } from '../icons'
defineProps({ skills: Array })
const icons = { vue: CodeBracketIcon, palette: SwatchIcon, code: CodeBracketIcon, php: ServerStackIcon, server: ServerStackIcon, mysql: CircleStackIcon, database: CircleStackIcon, github: CodeBracketIcon }
</script>
<template>
  <section id="skills" class="px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      <h2 class="text-center text-3xl font-semibold text-slate-900 dark:text-white">Skills</h2>
      <div class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="skill in skills" :key="skill.name" data-reveal class="translate-y-6 rounded-2xl border border-slate-200 bg-white p-5 opacity-0 shadow-sm transition duration-700 hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-800">
          <div class="mb-4 flex items-center gap-3">
            <component :is="icons[skill.key] || CodeBracketIcon" class="h-5 w-5 text-[#5fa6ed]" />
            <h3 class="font-semibold text-slate-900 dark:text-slate-100">{{ skill.name }}</h3>
          </div>
          <div class="h-2 rounded-full bg-slate-100 dark:bg-slate-700">
            <div class="h-2 rounded-full bg-[#5fa6ed]" :style="{ width: `${skill.level}%` }" />
          </div>
          <p class="mt-2 text-xs text-slate-500 dark:text-slate-400">{{ skill.level }}%</p>
        </article>
      </div>
    </div>
  </section>
</template>
