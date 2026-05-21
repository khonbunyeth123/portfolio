<template>
  <section class="contact">
    <div class="reveal">
      <h1 class="title">Contact</h1>
      <p class="intro">Have a project in mind? I'd love to hear from you.</p>
    </div>

    <div class="grid">
      <div class="info reveal">
        <div class="info-item">
          <span class="label">Email</span>
          <a href="mailto:bunyeth664@gmail.com">bunyeth664@gmail.com</a>
        </div>
        <div class="info-item">
          <span class="label">Location</span>
          <span>Available for remote work</span>
        </div>
        <div class="info-item">
          <span class="label">Status</span>
          <span>Open to opportunities</span>
        </div>
      </div>

      <div class="form-wrap reveal">
        <form @submit.prevent="handleSubmit">
          <div class="field">
            <label for="name">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Your name"
              :class="{ error: errors.name }"
            />
            <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
          </div>

          <div class="field">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="your@email.com"
              :class="{ error: errors.email }"
            />
            <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
          </div>

          <div class="field">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Your message..."
              rows="5"
              :class="{ error: errors.message }"
            ></textarea>
            <span v-if="errors.message" class="error-msg">{{ errors.message }}</span>
          </div>

          <button type="submit" class="submit" :disabled="submitting">
            {{ submitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>

        <div v-if="submitted" class="success">
          Thank you! Your message has been sent.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useScrollReveal } from '../composables/useScrollReveal'

export default {
  name: 'ContactView',
  setup() {
    useScrollReveal()
  },
  data() {
    return {
      form: { name: '', email: '', message: '' },
      errors: {},
      submitted: false,
      submitting: false
    }
  },
  methods: {
    validate() {
      this.errors = {}
      if (!this.form.name.trim()) this.errors.name = 'Name is required'
      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = 'Enter a valid email'
      }
      if (!this.form.message.trim()) this.errors.message = 'Message is required'
      return Object.keys(this.errors).length === 0
    },
    handleSubmit() {
      if (!this.validate()) return
      this.submitting = true
      setTimeout(() => {
        this.submitted = true
        this.submitting = false
        this.form = { name: '', email: '', message: '' }
        setTimeout(() => { this.submitted = false }, 4000)
      }, 1000)
    }
  }
}
</script>

<style scoped>
.contact {
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
  margin-bottom: 3rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
}

.info-item {
  margin-bottom: 1.5rem;
}

.label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.25rem;
}

.info-item a {
  font-weight: 500;
}

.info-item span:not(.label) {
  color: var(--color-text);
  font-size: 0.9375rem;
}

.field {
  margin-bottom: 1.25rem;
}

.field label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 0.375rem;
}

.field input,
.field textarea {
  width: 100%;
  padding: 0.625rem 0.875rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 0.9375rem;
  font-family: inherit;
  color: var(--color-text);
  background: var(--color-bg);
  transition: border-color var(--transition);
}

.field input::placeholder,
.field textarea::placeholder {
  color: #aaa;
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--color-border-focus);
}

.field input.error,
.field textarea.error {
  border-color: var(--color-error);
}

.error-msg {
  display: block;
  font-size: 0.75rem;
  color: var(--color-error);
  margin-top: 0.25rem;
}

.field textarea {
  resize: vertical;
  min-height: 120px;
}

.submit {
  width: 100%;
  padding: 0.625rem 1.5rem;
  background: var(--color-text);
  color: var(--color-bg);
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all var(--transition);
}

.submit:hover:not(:disabled) {
  background: var(--color-text-secondary);
}

.submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success {
  margin-top: 1rem;
  padding: 0.875rem 1rem;
  background: var(--color-success-bg);
  color: var(--color-success);
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
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
