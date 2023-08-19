<script>
import MainNav from '@/components/Navigation/MainNav.vue'
import PageHero from '@/components/JobSearch/PageHero.vue'

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