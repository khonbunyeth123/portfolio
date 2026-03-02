<template>
  <div class="marquee-section">
    <div class="marquee-track">
      <div
        v-for="item in [...items, ...items]"
        :key="item + Math.random()"
        class="marquee-item"
      >
        <span>{{ item }}</span>
        <span class="dot" />
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  'HTML', 'CSS', 'Bootstrap', 'Vue.js', 'Tailwind CSS', 'JavaScript',
]
</script>

<style scoped>
.marquee-section {
  overflow: hidden;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 1.2rem 0;
  background: var(--surface);
}

.marquee-track {
  display: flex;
  gap: 2rem;
  white-space: nowrap;
  animation: marquee 18s linear infinite;
}

.marquee-item {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 2rem;
}

.dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--accent);
  border-radius: 50%;
  flex-shrink: 0;
}
</style>
