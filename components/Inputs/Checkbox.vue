<script setup>
const value = defineModel()
</script>

<template>
  <label>
    <input
      type="checkbox"
      value="Accepted"
      required
      v-model="value"
    />
    <span>
      <slot />
    </span>
  </label>
</template>

<style lang="scss" scoped>

</style>