<script setup>
const props = defineProps({
  edge: { type: Boolean, default: false },
  animate: { type: Boolean, default: false },
  delay: { type: Number, default: 0 },
  trigger: { type: String, default: null },
  start: { type: String, default: 'top 90%' }
})

const { $gsap } = useNuxtApp()
const card = ref(null)

onMounted(() => {
  if (props.animate) {
    $gsap.to(card.value, {
      y: 0,
      opacity: 1,
      duration: 1,
      scale: 1,
      delay: props.delay,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: props.trigger || card.value,
        start: props.start,
      }
    })
  }
})
</script>

<template>
  <article
    ref="card"
    :class="[
      'card bg-white border-2 rounded-xl',
      {
        'p-8': !edge,
        animate
      }
    ]"
  >
    <slot />
  </article>
</template>

<style lang="scss" scoped>
.card {
  box-shadow: .5rem .5rem 0 0 var(--black);
}

.animate {
  opacity: 0;
  transform: translateY(20%) scale(1.1);
}
</style>