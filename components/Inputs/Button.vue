<script setup>
defineProps({
  icon: { type: String, default: null },
  loading: { type: Boolean, default: false }
})
</script>

<template>
  <button class="bg-red text-white flex gap-4 items-center font-extrabold text-md py-2 px-4 rounded-lg disabled:opacity-50" :disabled="loading">
    <span v-if="loading" class="me-6">
      <slot name="loading" />
    </span>
    <span v-else class="me-6">
      <slot />
    </span>
    <Icon v-if="icon" :name="icon" class="icon transition" />
    <Icon v-if="loading" name="line-md:loading-twotone-loop" class="loading-icon transition" />
  </button>
</template>

<style lang="scss" scoped>
button:hover {
  .icon {
    transform: translate(10%, -10%);
  }
}

button:disabled {
  .icon {
    transform: translate(40%, -40%);
    opacity: 0;
  }

  .loading-icon {
    transform: translate(0, 0);
    opacity: 1;
  }
}

.loading-icon {
  opacity: 0;
  transform: translate(-40%, -40%);
}
</style>