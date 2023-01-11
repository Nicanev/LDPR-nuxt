<template>
  <main>
    <MainSectionsHeroSection />
    <MainSectionsMessageSection />
    <MainSectionsNewsSection />
    <MainSectionsAboutSection />
    <MainSectionsContactSection />
  </main>
</template>

<script setup lang="ts">
import MainSectionsNewsSection from '../components/mainSections/NewsSection.vue';
import MainSectionsAboutSection from '../components/mainSections/AboutSection.vue';
import MainSectionsHeroSection from '../components/mainSections/HeroSection.vue';
import MainSectionsMessageSection from '../components/mainSections/MessageSection.vue';
import MainSectionsContactSection from '../components/mainSections/ContactSection.vue';
</script>