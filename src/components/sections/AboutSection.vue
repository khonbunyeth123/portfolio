<script setup>
defineProps({ profile: Object })
</script>

<template>
  <section id="about" class="px-4 py-16 sm:px-6 lg:px-8">
    <div data-reveal class="mx-auto grid max-w-6xl translate-y-6 grid-cols-1 gap-8 opacity-0 transition duration-700 md:grid-cols-2">
      
      <article class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">
          About Me
        </h2>

        <p class="mt-4 text-slate-600 dark:text-slate-300">
          I am a Computer Science student passionate about web development and modern frontend technologies.
        </p>

        <p class="mt-3 text-slate-600 dark:text-slate-300">
          I enjoy building clean, responsive, and user-friendly web applications using Vue, PHP, and MySQL while continuously learning new technologies.
        </p>
      </article>

      <article class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
          Experience & Education
        </h3>

        <div class="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">

          <div>
            <p class="font-medium text-slate-900 dark:text-slate-100">
              Web Development
            </p>
            <p>Frontend and backend web application development</p>
          </div>

          <div>
            <p class="font-medium text-slate-900 dark:text-slate-100">
              Computer Science Student
            </p>
            <p>Norton University - Year 4</p>
          </div>

          <div>
            <p class="font-medium text-slate-900 dark:text-slate-100">
              Technical Support Internship
            </p>
            <p>Completed internship at Ezecom</p>
          </div>

          <div>
            <p class="font-medium text-slate-900 dark:text-slate-100">
              Location
            </p>
            <p>{{ profile.location }}</p>
          </div>

        </div>
      </article>

    </div>
  </section>
</template>
