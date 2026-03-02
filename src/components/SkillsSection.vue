<template>
  <section id="skills">
    <div class="skills-header reveal">
      <div>
        <div class="section-label">What I Do</div>
        <h2 class="section-title">SKILLS<span class="accent">.</span></h2>
      </div>
      <p class="skills-sub">Technologies and tools I use to bring ideas to life.</p>
    </div>

    <div class="skills-grid">
      <div
        v-for="(skill, i) in skills"
        :key="skill.name"
        class="skill-card reveal"
        :style="{ transitionDelay: `${i * 0.1}s` }"
      >
        <div class="skill-icon">{{ skill.icon }}</div>
        <div class="skill-name">{{ skill.name }}</div>
        <p class="skill-desc">{{ skill.desc }}</p>
        <div class="skill-tags">
          <span v-for="tag in skill.tags" :key="tag" class="skill-tag">{{ tag }}</span>
        </div>
        <div class="skill-bar">
          <div class="skill-bar-fill" :style="{ width: skill.level + '%' }" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  {
    icon: '⚡',
    name: 'Vue.js',
    desc: 'Composition API, Pinia, Vue Router, Nuxt.js',
    tags: ['Pinia', 'Router', 'Nuxt', 'Vite'],
    level: 90,
  },
  {
    icon: '🎨',
    name: 'CSS / UI',
    desc: 'Tailwind CSS, animations, responsive design, GSAP',
    tags: ['Tailwind', 'GSAP', 'CSS Grid'],
    level: 85,
  },
  {
    icon: '🛠',
    name: 'JavaScript',
    desc: 'ES2022+, TypeScript, async/await, REST APIs',
    tags: ['TypeScript', 'ES2022+', 'Axios'],
    level: 80,
  },
  {
    icon: '🔧',
    name: 'Tooling',
    desc: 'Git, Vite, ESLint, Figma, VS Code',
    tags: ['Git', 'Figma', 'Vite'],
    level: 88,
  },
]
</script>

<style scoped>
#skills {
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 8rem 3rem;
}

.skills-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  gap: 2rem;
}

.skills-sub {
  font-style: italic;
  color: var(--muted);
  max-width: 300px;
  font-size: 1rem;
  line-height: 1.6;
}

.accent { color: var(--accent); }

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  border: 1px solid var(--border);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s;
  background: var(--bg);
}

.skill-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
}

.skill-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.skill-card:hover::after {
  transform: scaleX(1);
}

.skill-icon { font-size: 2rem; margin-bottom: 1rem; }

.skill-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.skill-desc {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.6;
  margin-top: 0.5rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;
}

.skill-tag {
  font-family: 'DM Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.6rem;
  border: 1px solid var(--border);
  color: var(--muted);
  text-transform: uppercase;
}

.skill-bar {
  height: 2px;
  background: var(--border);
  margin-top: 1.5rem;
}

.skill-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  transition: width 1s ease;
}

@media (max-width: 768px) {
  #skills { padding: 5rem 1.5rem; }
}
</style>
