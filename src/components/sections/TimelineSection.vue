<script setup>
defineProps({ experiences: Array })
</script>

<template>
  <section id="experience" class="px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl">
      <h2 class="text-center text-3xl font-semibold text-slate-900 dark:text-white">Experience</h2>
      <div class="relative mt-10 space-y-8 before:absolute before:left-4 before:top-1 before:h-[calc(100%-8px)] before:w-px before:bg-slate-200 dark:before:bg-slate-700">
        <article v-for="item in experiences" :key="item.company + item.date" data-reveal class="relative translate-y-6 rounded-2xl border border-slate-200 bg-white p-5 opacity-0 shadow-sm transition duration-700 dark:border-slate-700 dark:bg-slate-800 sm:ml-10">
          <span class="absolute -left-[30px] top-6 h-3 w-3 rounded-full bg-[#5fa6ed] sm:-left-[34px]"></span>
          <p class="text-xs font-semibold uppercase tracking-wide text-[#5fa6ed]">{{ item.date }}</p>
          <h3 class="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">{{ item.position }}</h3>
          <p class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ item.company }}</p>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
