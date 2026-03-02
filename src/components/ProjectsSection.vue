<template>
  <section id="projects">
    <div class="projects-header reveal">
      <div>
        <div class="section-label">Selected Work</div>
        <h2 class="section-title">PROJ<span class="accent">-</span><br />ECTS<span class="accent">.</span></h2>
      </div>
      <p class="projects-sub">A collection of things I've built with care.</p>
    </div>

    <div class="projects-grid reveal">
      <div
        v-for="(project, i) in projects"
        :key="project.title"
        class="project-card"
        :class="{ featured: i === 0 }"
      >
        <div class="project-bg">{{ String(i + 1).padStart(2, '0') }}</div>
        <div class="project-gradient" :style="{ background: project.gradient }" />

        <div class="project-info">
          <div class="project-num">{{ String(i + 1).padStart(2, '0') }}{{ i === 0 ? ' / Featured' : '' }}</div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.desc }}</p>
          <div class="project-tech">
            <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
          </div>
        </div>

        <a :href="project.url" class="project-link" target="_blank" rel="noopener">↗</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'E-COMMERCE PLATFORM',
    desc: 'A full-featured online store with cart, auth & payments',
    tech: ['Vue 3', 'Pinia', 'Tailwind', 'Laravel API'],
    gradient: 'linear-gradient(135deg, #1a0533 0%, #0a2a1a 100%)',
    url: '#',
  },
  {
    title: 'HR Managerment SYSTEM',
    desc: 'Analytics dashboard with real-time charts',
    tech: ['Vue 3', 'Chart.js', 'REST API'],
    gradient: 'linear-gradient(135deg, #1a2a00 0%, #0a1a33 100%)',
    url: 'https://web.facebook.com/khon.bunyeth',
  },
  {
    title: 'PORTFOLIO V1',
    desc: 'Previous personal portfolio, now open source',
    tech: ['HTML', 'CSS', 'GSAP'],
    gradient: 'linear-gradient(135deg, #33100a 0%, #1a1a2a 100%)',
    url: 'https://t.me/Khon_Bunyeth',
  },
]
</script>

<style scoped>
#projects {
  padding: 8rem 3rem;
}

.accent { color: var(--accent); }

.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  gap: 2rem;
}

.projects-sub {
  font-style: italic;
  color: var(--muted);
  max-width: 280px;
  font-size: 1rem;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
}

.project-card {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: var(--surface);
  cursor: none;
  border: 1px solid var(--border);
}

.project-card.featured {
  grid-column: 1 / -1;
  aspect-ratio: 21 / 9;
}

.project-bg {
  position: absolute; inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 12rem;
  color: rgba(255, 255, 255, 0.02);
  letter-spacing: -0.05em;
  transition: transform 0.6s ease;
}

.project-card:hover .project-bg {
  transform: scale(1.1);
}

.project-gradient {
  position: absolute; inset: 0;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.project-card:hover .project-gradient {
  opacity: 0.8;
}

.project-info {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 2.5rem;
  background: linear-gradient(to top, rgba(10, 10, 8, 0.95), transparent);
}

.project-num {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem;
  color: var(--accent);
  letter-spacing: 0.2em;
  margin-bottom: 0.75rem;
}

.project-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.2rem;
  letter-spacing: 0.04em;
  line-height: 1;
}

.project-desc {
  font-style: italic;
  color: #888;
  font-size: 0.95rem;
  margin-top: 0.5rem;
}

.project-tech {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.project-tech span {
  font-family: 'DM Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  padding: 0.2rem 0.5rem;
  background: rgba(232, 255, 71, 0.1);
  color: var(--accent);
  text-transform: uppercase;
}

.project-link {
  position: absolute;
  top: 1.5rem; right: 1.5rem;
  width: 44px; height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transform: translateY(-10px);
  opacity: 0;
  transition: all 0.3s;
  background: rgba(0, 0, 0, 0.5);
}

.project-card:hover .project-link {
  opacity: 1;
  transform: translateY(0);
}

.project-link:hover {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
}

@media (max-width: 768px) {
  #projects { padding: 5rem 1.5rem; }
  .projects-grid { grid-template-columns: 1fr; }
  .project-card.featured { grid-column: 1; aspect-ratio: 16 / 10; }
}
</style>
