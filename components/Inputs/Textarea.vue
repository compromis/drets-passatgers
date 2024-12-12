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
  <div class="input bg-white">
    <label :for="id || name" class="flex font-mono uppercase text-sm px-4 py-1">
      {{ label }}
      <span class="ms-auto opacity-50">{{ $t('form.optional') }}</span>
    </label>
    <textarea
      :id="id || name"
      :name="name"
      v-bind="$attrs"
      v-model="value"
      class="block w-full px-4 py-3 focus:outline-none focus:bg-yellow/25""
    />
  </div>
</template>

<style lang="scss" scoped>
label {
  background: var(--light-gray);
}

.input:focus-within {
  label {
    background: var(--yellow);
  }
}

textarea {
  field-sizing: content;
  min-height: 100px;
}
</style>