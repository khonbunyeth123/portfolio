<template>
  <section id="about">
    <div class="about-left reveal">
      <div class="section-label">About Me</div>
      <h2 class="section-title">
        WHO<br>AM<br>I<span class="accent">?</span>
      </h2>
      <p class="about-desc">
        Hi, I'm <em>Khon Bunyeth</em> — a passionate Frontend Developer based in Cambodia.
        I love building fast, beautiful, and accessible interfaces that feel alive.<br /><br />
        My craft lives where visual design meets clean engineering. Whether it's a smooth
        micro-interaction, a pixel-perfect layout, or a lightning-fast Vue app —
        I care deeply about the <em>details</em>.
      </p>
      <div class="about-cta">
        <a href="#contact" class="btn-primary">Let's Talk →</a>
      </div>
    </div>

    <div class="about-right reveal" style="transition-delay: 0.2s">
      <div class="about-image-frame">
         <img src="/src/img/khon_bunyeth.jpg" alt="">
        <div class="placeholder">
          <span class="avatar">👤</span>
          <p>Your Photo Here</p>
        </div>
        <span class="corner tl" />
        <span class="corner tr" />
        <span class="corner bl" />
        <span class="corner br" />
      </div>
      <div class="accent-block">
        <div class="num">KH</div>
        <div class="lbl">Based in<br />Cambodia</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
  padding: 8rem 3rem;
}

.accent { color: var(--accent); }

.about-desc {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #b8b4ac;
  margin-top: 2.5rem;
}

.about-desc em { color: var(--accent); font-style: italic; }

.about-cta { margin-top: 2.5rem; }

/* Image Frame */
.about-right { position: relative; }

.about-image-frame {
  aspect-ratio: 3 / 4;
  background: var(--surface);
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
  max-width: 380px;
}

.about-image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--muted);
}

.avatar { font-size: 5rem; opacity: 0.3; }

.placeholder p {
  font-family: 'DM Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Corner decorations */
.corner {
  position: absolute;
  width: 24px;
  height: 24px;
  border-color: var(--accent);
  border-style: solid;
}
.corner.tl { top: 12px; left: 12px;   border-width: 2px 0 0 2px; }
.corner.tr { top: 12px; right: 12px;  border-width: 2px 2px 0 0; }
.corner.bl { bottom: 12px; left: 12px;  border-width: 0 0 2px 2px; }
.corner.br { bottom: 12px; right: 12px; border-width: 0 2px 2px 0; }

/* Accent badge */
.accent-block {
  position: absolute;
  right: -2rem;
  bottom: -2rem;
  width: 120px;
  height: 120px;
  background: var(--accent);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.accent-block .num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.5rem;
  color: var(--bg);
  line-height: 1;
}

.accent-block .lbl {
  font-family: 'DM Mono', monospace;
  font-size: 0.5rem;
  color: var(--bg);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@media (max-width: 768px) {
  #about {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 5rem 1.5rem;
  }
}
</style>
