<template>
  <!-- Custom cursor -->
  <div class="cursor" ref="cursor" />
  <div class="cursor-ring" ref="cursorRing" />

  <!-- Layout -->
  <TheNavbar />
  <main>
    <HeroSection />
    <MarqueeStrip />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <TheFooter />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import TheNavbar      from '@/components/TheNavbar.vue'
import HeroSection    from '@/components/HeroSection.vue'
import MarqueeStrip   from '@/components/MarqueeStrip.vue'
import AboutSection   from '@/components/AboutSection.vue'
import SkillsSection  from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import TheFooter      from '@/components/TheFooter.vue'

// ─── Cursor ────────────────────────────────────────────────────────────────
const cursor    = ref(null)
const cursorRing = ref(null)

let mx = 0, my = 0
let rx = 0, ry = 0
let rafId = null

function onMouseMove(e) {
  mx = e.clientX
  my = e.clientY
  cursor.value.style.left = `${mx}px`
  cursor.value.style.top  = `${my}px`
}

function animateRing() {
  rx += (mx - rx) * 0.12
  ry += (my - ry) * 0.12
  cursorRing.value.style.left = `${rx}px`
  cursorRing.value.style.top  = `${ry}px`
  rafId = requestAnimationFrame(animateRing)
}

// ─── Scroll reveal ─────────────────────────────────────────────────────────
let observer = null

function initReveal() {
  observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
}

// ─── Lifecycle ─────────────────────────────────────────────────────────────
onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  animateRing()
  // Small delay so all child components have mounted
  setTimeout(initReveal, 50)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(rafId)
  observer?.disconnect()
})
</script>
