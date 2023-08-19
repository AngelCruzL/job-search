<script>
export default {
  name: 'TextInput',
  emits: ['handleInput'],
  data() {
    return {
      value: ''
    }
  },
  methods: {
    handleInput($event) {
      this.$emit('handleInput', $event.target.value)
    }
  }
}
</script>

<template>
  <input
    :value="value"
    class="w-full text-lg font-normal focus:outline-none"
    type="text"
    @input="handleInput"
  />
</template>

<style scoped></style>
