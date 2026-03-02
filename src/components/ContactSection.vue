<template>
  <section id="contact">
    <div class="contact-bg-text">HELLO</div>

    <div class="contact-content reveal">
      <div class="contact-eyebrow">Let's Build Together</div>
      <h2 class="contact-heading">
        GET IN<br />
        <span class="accent">TOUCH</span><span class="accent">.</span>
      </h2>
      <p class="contact-sub">Open for freelance projects & full-time opportunities</p>

      <a href="bunyeth664@gmail.com" class="contact-email">bunyeth664@gmail.com</a>

      <div class="contact-socials">
        <a
          v-for="link in socials"
          :key="link.label"
          :href="link.url"
          class="social-link"
          target="_blank"
          rel="noopener"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const socials = [
  { label: 'GitHub',      url: 'https://github.com/' },
  { label: 'Facebook',    url: 'https://www.facebook.com/khon.bunyeth' },
  { label: 'Instargram',  url: 'https://www.instagram.com/khon.bunyeth/' },
  { label: 'TikTok',      url: 'https://www.tiktok.com/@khonbunyeth' },
  { label: 'Telegram',    url: 'https://t.me/Khon_Bunyeth' },
]
</script>

<style scoped>
#contact {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 8rem 3rem;
}

.contact-bg-text {
  position: absolute; inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(8rem, 20vw, 22rem);
  color: rgba(232, 255, 71, 0.03);
  letter-spacing: -0.02em;
  pointer-events: none;
  white-space: nowrap;
}

.contact-content {
  position: relative;
  z-index: 1;
}

.contact-eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  color: var(--accent);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.contact-heading {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(4rem, 12vw, 10rem);
  line-height: 0.9;
  margin-bottom: 2rem;
}

.accent { color: var(--accent); }

.contact-sub {
  font-style: italic;
  font-size: 1.2rem;
  color: var(--muted);
  margin-bottom: 3rem;
}

.contact-email {
  display: inline-block;
  font-family: 'DM Mono', monospace;
  font-size: clamp(0.9rem, 2vw, 1.3rem);
  color: var(--text);
  text-decoration: none;
  letter-spacing: 0.05em;
  border-bottom: 1px solid var(--accent);
  padding-bottom: 0.3rem;
  margin-bottom: 3rem;
  transition: color 0.2s;
}

.contact-email:hover {
  color: var(--accent);
}

.contact-socials {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.social-link {
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--border);
  transition: all 0.2s;
}

.social-link:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(232, 255, 71, 0.05);
}

@media (max-width: 768px) {
  #contact { padding: 5rem 1.5rem; }
}
</style>
