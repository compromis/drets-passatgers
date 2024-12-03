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
  <div class="bg-white">
    <label :for="id || name" class="flex font-mono uppercase bg-gray-light text-sm px-6 py-2">
      {{ label }}
    </label>
    <input
      :id="id || name"
      :name="name"
      v-bind="$attrs"
      v-model="value"
      class="block w-full px-6 py-3"
    />
  </div>
</template>

<style lang="scss" scoped>

</style>