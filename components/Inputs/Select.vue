<script setup>
defineProps({
  options: { type: Array, required: true },
  label: { type: String, required: true },
  id: { type: String, default: null },
  name: { type: String, required: true }
})

const value = defineModel()
</script>

<template>
  <div>
    <label :for="id || name">
      {{ label }}
    </label>
    <select
      :id="id || name" 
      :name="name"
      v-model="value" 
      v-bind="$attrs"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>

</style>