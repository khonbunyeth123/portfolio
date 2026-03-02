<template>
  <footer>
    <p>© 2026 Yeth — Frontend Developer</p>
    <div class="footer-status">
      <span class="dot" />
      <p class="available">Available for work</p>
    </div>
    <p>Phnom Penh, Cambodia</p>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--border);
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

footer p {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem;
  color: var(--muted);
  letter-spacing: 0.1em;
}

.footer-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dot {
  width: 6px;
  height: 6px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.available {
  color: #4ade80 !important;
}

@media (max-width: 768px) {
  footer { padding: 2rem 1.5rem; }
}
</style>
