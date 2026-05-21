<template>
  <section class="about">
    <div class="reveal">
      <h1 class="title">About</h1>
      <p class="intro">
        I'm a Vue.js developer focused on building scalable, performant
        web applications with clean, maintainable code.
      </p>
    </div>

    <div class="grid">
      <div class="bio reveal">
        <h2 class="heading">Background</h2>
        <p>
          My expertise spans Vue 3, Vue Router, Pinia, TypeScript, and modern
          frontend tooling. I enjoy creating intuitive interfaces and solving
          complex problems.
        </p>
        <p>
          When I'm not coding, I explore new technologies and stay current
          with web development trends.
        </p>
      </div>

      <div class="skills reveal">
        <h2 class="heading">Skills</h2>
        <div class="tags">
          <span v-for="skill in skills" :key="skill" class="tag">{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useScrollReveal } from '../composables/useScrollReveal'

export default {
  name: 'AboutView',
  setup() {
    useScrollReveal()
  },
  data() {
    return {
      skills: [
        'Vue.js',
        'Vue Router',
        'Pinia',
        'TypeScript',
        'Tailwind CSS',
        'Vite',
        'JavaScript',
        'HTML & CSS',
        'Git'
      ]
    }
  }
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.025em;
  margin-bottom: 0.75rem;
}

.intro {
  font-size: 1.0625rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 580px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.heading {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1.25rem;
}

.bio p {
  color: var(--color-text-secondary);
  line-height: 1.75;
  margin-bottom: 0.875rem;
  font-size: 0.9375rem;
}

.bio p:last-child {
  margin-bottom: 0;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: var(--color-bg-subtle);
  border: 1px solid var(--color-border);
  padding: 0.375rem 0.875rem;
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: all var(--transition);
}

.tag:hover {
  color: var(--color-text);
  border-color: var(--color-text-secondary);
}

@media (max-width: 640px) {
  .title {
    font-size: 1.75rem;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
