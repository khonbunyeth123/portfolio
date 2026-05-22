<script setup>
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '../icons'
defineProps({ projects: Array })
</script>
<template>
  <section id="projects" class="bg-slate-50 px-4 py-16 dark:bg-slate-950/40 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      <h2 class="text-center text-3xl font-semibold text-slate-900 dark:text-white">Projects</h2>
      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="project in projects" :key="project.title" data-reveal class="translate-y-6 overflow-hidden rounded-2xl border border-slate-200 bg-white opacity-0 shadow-sm transition duration-700 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
          <img :src="project.image" :alt="project.title" class="h-48 w-full object-cover" loading="lazy" />
          <div class="space-y-4 p-5">
            <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">{{ project.title }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag" class="rounded-full bg-[#5fa6ed]/15 px-2.5 py-1 text-xs font-medium text-[#2f6da9] dark:text-[#9bcbf7]">{{ tag }}</span>
            </div>
            <div class="flex gap-3">
              <!-- <a :href="project.liveUrl" class="inline-flex items-center gap-1.5 rounded-lg bg-[#5fa6ed] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#4d95db]">
                <ArrowTopRightOnSquareIcon class="h-3.5 w-3.5"/>
                Live Demo
              </a> -->
              <a :href="project.githubUrl" class="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-[#5fa6ed] hover:text-[#5fa6ed] dark:border-slate-600 dark:text-slate-200" target="_blank">
                <CodeBracketIcon class="h-3.5 w-3.5"/>
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
