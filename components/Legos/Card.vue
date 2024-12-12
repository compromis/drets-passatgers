<script setup>
defineProps({
  edge: { type: Boolean, default: false }
})
</script>

<template>
  <article :class="['card bg-white border-2 rounded-xl', { 'p-8': !edge }]">
    <slot />
  </article>
</template>

<style lang="scss" scoped>
.card {
  box-shadow: .5rem .5rem 0 0 var(--black);
}
</style>