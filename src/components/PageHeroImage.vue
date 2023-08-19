<script>
import nextElementInList from '@/utils/nextElementInList'

export default {
  name: 'PageHeroImage',
  data() {
    return {
      image: 'react',
      interval: null
    }
  },
  created() {
    this.changeImage()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeImage() {
      this.interval = setInterval(() => {
        const images = ['react', 'vue', 'javascript', 'angular']
        this.image = nextElementInList(images, this.image)
      }, 3000)
    }
  }
}
</script>

<template>
  <img
    :alt="`${image} logo`"
    :src="`/img/logos/${image}.webp`"
    class="h-80 w-80 object-contain"
  />
</template>

<style scoped></style>