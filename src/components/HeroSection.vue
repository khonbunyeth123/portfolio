<template>
  <section id="hero">
    <div class="hero-grid-lines" />

    <div class="hero-content">
      <div class="hero-tag">Frontend Developer · Available for work</div>

      <h1 class="hero-name">
        Bunyeth<span class="accent">.</span>
      </h1>

      <p class="hero-subtitle">
        I craft bold, interactive web experiences that live at the
        intersection of <em>design</em> and <em>code</em>.
      </p>

      <div class="hero-cta">
        <a href="#projects" class="btn-primary">View My Work →</a>
        <a href="#contact" class="btn-outline">Get In Touch</a>
      </div>
    </div>

    <div class="hero-bottom">
      <div class="hero-stats">
        <div v-for="stat in stats" :key="stat.label">
          <div class="stat-num">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
      <div class="scroll-hint">Scroll to explore</div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: 'No',  label: 'Years Exp.' },
  { value: '2', label: 'Projects' },
]
</script>

<style scoped>
#hero {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 0 3rem;
  position: relative;
  overflow: hidden;
}

.hero-grid-lines {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(232, 255, 71, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(232, 255, 71, 0.03) 1px, transparent 1px);
  background-size: 80px 80px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 8rem;
  position: relative;
  z-index: 1;
}

.hero-tag {
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  color: var(--accent);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeUp 0.8s 0.2s forwards;
}

.hero-tag::before {
  content: '';
  display: block;
  width: 40px;
  height: 1px;
  background: var(--accent);
}

.hero-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(4rem, 12vw, 12rem);
  line-height: 0.85;
  letter-spacing: -0.01em;
  color: var(--text);
  opacity: 0;
  animation: fadeUp 0.8s 0.4s forwards;
}

.hero-name .accent { color: var(--accent); }

.hero-subtitle {
  font-style: italic;
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: var(--muted);
  margin-top: 1.5rem;
  max-width: 550px;
  opacity: 0;
  animation: fadeUp 0.8s 0.6s forwards;
  line-height: 1.5;
}

.hero-subtitle em { color: var(--accent); font-style: italic; }

.hero-cta {
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeUp 0.8s 0.8s forwards;
}

.hero-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 0;
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--border);
}

.hero-stats {
  display: flex;
  gap: 4rem;
}

.stat-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.5rem;
  color: var(--accent);
  line-height: 1;
}

.stat-label {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem;
  color: var(--muted);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-top: 0.25rem;
}

.scroll-hint {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem;
  color: var(--muted);
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.scroll-hint::after {
  content: '↓';
  color: var(--accent);
  animation: bounce 1.5s infinite;
}

@media (max-width: 768px) {
  #hero { padding: 0 1.5rem; }
  .hero-stats { gap: 2rem; }
}
</style>
