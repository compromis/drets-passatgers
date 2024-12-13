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
  <div class="input bg-white">
    <label :for="id || name" class="flex font-mono uppercase text-sm px-4 py-1">
      {{ label }}
    </label>
    <select
      :id="id || name" 
      :name="name"
      v-model="value" 
      v-bind="$attrs"
      class="block w-full px-4 py-3 focus:outline-none focus:bg-yellow/25 border-none focus:border-none text-base"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
label {
  background: var(--light-gray);
}

select:focus {
  box-shadow: none !important;
}

.input:focus-within {
  label {
    background: var(--yellow);
  }
}
</style>