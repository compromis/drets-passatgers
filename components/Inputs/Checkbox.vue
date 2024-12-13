<script setup>
const value = defineModel()
</script>

<template>
  <label class="flex items-center gap-2">
    <input
      type="checkbox"
      value="Accepted"
      required
      v-model="value"
      class="text-orange rounded focus:ring-orange"
    />
    <span>
      <slot />
    </span>
  </label>
</template>

<style lang="scss" scoped>

</style>