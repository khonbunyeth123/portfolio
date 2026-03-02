<template>
  <nav :class="{ scrolled }">
    <div class="nav-logo">BUNYETH</div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s, background 0.3s;
}

nav.scrolled {
  border-color: var(--border);
  background: rgba(10, 10, 8, 0.92);
  backdrop-filter: blur(12px);
}

.nav-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.8rem;
  letter-spacing: 0.05em;
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-links a {
  font-family: 'DM Mono', monospace;
  font-size: 0.75rem;
  color: var(--muted);
  text-decoration: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--accent);
}

@media (max-width: 768px) {
  nav { padding: 1.2rem 1.5rem; }
  .nav-links { display: none; }
}
</style>
