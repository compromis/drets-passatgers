<script setup>
defineProps({
  icon: { type: String, default: null },
  loading: { type: Boolean, default: false }
})
</script>

<template>
  <button class="bg-red text-white flex gap-4 items-center font-extrabold text-md py-2 px-4 rounded-lg" :disabled="loading">
    <span v-if="loading">
      <slot name="loading" />
    </span>
    <span v-else>
      <slot />
    </span>
    <Icon v-if="icon" :name="icon" class="ms-6" />
  </button>
</template>

<style lang="scss" scoped>

</style>