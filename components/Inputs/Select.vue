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
  <div class="bg-white">
    <label :for="id || name" class="flex font-mono uppercase bg-gray-light text-sm px-6 py-2">
      {{ label }}
    </label>
    <select
      :id="id || name" 
      :name="name"
      v-model="value" 
      v-bind="$attrs"
      class="block w-full px-6 py-3"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>

</style>