<script>
export default {
  name: 'TextInput',
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  methods: {
    handleInput($event) {
      this.$emit('update:modelValue', $event.target.value)
    }
  }
}
</script>

<template>
  <input
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    type="text"
    @input="handleInput"
  />
</template>

<style scoped></style>
