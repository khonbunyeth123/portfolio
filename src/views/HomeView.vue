<script setup>
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import SkillsSection from '../components/sections/SkillsSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import TimelineSection from '../components/sections/TimelineSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import { profile, skills, projects, experiences } from '../data/portfolio'
import { useReveal } from '../composables/useReveal'

useReveal()
</script>

<template>
  <div>
    <HeroSection :profile="profile" />
    <AboutSection :profile="profile" />
    <SkillsSection :skills="skills" />
    <ProjectsSection :projects="projects" />
    <TimelineSection :experiences="experiences" />
    <ContactSection :profile="profile" /> 
  </div>
</template>
