<script setup>
defineProps({
  label: { type: String, required: true },
  id: { type: String, default: null },
  name: { type: String, required: true },
  type: { type: String, default: 'text' },
  errors: { type: Object, default: null }
})

const value = defineModel()
</script>

<template>
  <div class="input bg-white">
    <label :for="id || name" class="flex font-mono uppercase text-sm px-4 py-1">
      {{ label }}
    </label>
    <input
      :id="id || name"
      :name="name"
      :type="type"
      v-bind="$attrs"
      v-model="value"
      class="block w-full px-4 py-3 focus:outline-none focus:bg-yellow/25 border-none focus:border-none text-base"
    />
  </div>
</template>

<style lang="scss" scoped>
label {
  background: var(--light-gray);
}

input:focus {
  box-shadow: none !important;
}

.input:focus-within {
  label {
    background: var(--yellow);
  }
}
</style>