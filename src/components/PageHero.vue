<script>
import PageHeadline from '@/components/PageHeadline.vue'
import JobSearchForm from '@/components/JobSearchForm.vue'

export default {
  name: 'PageHero',
  components: { JobSearchForm, PageHeadline }
}
</script>

<template>
  <main>
    <section class="flex h-screen flex-col pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>

        <div class="col-span-5 col-start-2">
          <page-headline />
          <job-search-form />
        </div>

        <div class="col-span-5 col-start-7"></div>

        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>