<script setup>

</script>

<template>
  <section class="card bg-white border-2 rounded-xl p-8">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.card {
  box-shadow: .5rem .5rem 0 0 var(--black);
}
</style>