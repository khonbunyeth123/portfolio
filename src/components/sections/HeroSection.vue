<script setup>
import { ArrowDownTrayIcon } from '../icons'

defineProps({ profile: Object })

const socialIcons = {
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/></svg>`,
}
</script>

<template>
  <section id="home" class="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8">
    <div class="absolute -left-10 top-12 h-40 w-40 rounded-full bg-[#5fa6ed]/20 blur-2xl"></div>
    <div class="absolute -right-16 bottom-8 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-500/20"></div>

    <div data-reveal class="mx-auto grid max-w-6xl translate-y-6 grid-cols-1 items-center gap-12 opacity-0 transition duration-700 md:grid-cols-2">

      <div class="space-y-6">
        <p class="inline-flex rounded-full border border-[#5fa6ed]/30 bg-[#5fa6ed]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2f6da9] dark:text-[#9bcbf7]">
          Available for work
        </p>

        <h1 class="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
          {{ profile.name }}<br />
          <span class="text-[#5fa6ed]">{{ profile.role }}</span>
        </h1>

        <p class="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {{ profile.intro }}
        </p>

        <div class="flex flex-wrap gap-3">
          <a :href="profile.cvUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-[#5fa6ed] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-[#5fa6ed]/40 transition hover:-translate-y-0.5 hover:bg-[#4d95db]">
            <ArrowDownTrayIcon class="h-4 w-4"></ArrowDownTrayIcon>
            Download CV
          </a>
          <a href="#contact" class="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#5fa6ed] hover:text-[#5fa6ed] dark:border-slate-600 dark:text-slate-200">
            Let's talk
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex gap-3">
          <a
            v-for="social in profile.socials"
            :key="social.name"
            :href="social.url"
            target= "_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-600 transition hover:border-[#5fa6ed] hover:text-[#5fa6ed] dark:border-slate-700 dark:text-slate-300"
            v-html="(socialIcons[social.key] || socialIcons.mail) + social.name"
          ></a>
        </div>
      </div>

      <div class="mx-auto w-full max-w-md">
        <div class="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/70 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-900/40">
          <img
            :src="profile.avatar"
            alt="Profile"
            class="h-[520px] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </div>

    </div>
  </section>
</template>
