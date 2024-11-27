<script setup>
defineProps({
  label: { type: String, required: true },
  id: { type: String, default: null },
  name: { type: String, required: true },
  errors: { type: Object, default: null }
})

const value = defineModel()
</script>

<template>
  <div>
    <pre>{{errors}}</pre>
    <label :for="id || name">{{ label }}</label>
    <input
      :id="id || name"
      :name="name"
      v-bind="$attrs"
      v-model="value"
    />
  </div>
</template>

<style lang="scss" scoped>

</style>