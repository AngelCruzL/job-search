<script>
import MainNav from '@/components/MainNav.vue'
import PageHero from '@/components/PageHero.vue'

export default {
  name: 'App',
  components: {
    PageHero,
    MainNav
  }
}
</script>

<template>
  <main-nav />
  <page-hero />
</template>