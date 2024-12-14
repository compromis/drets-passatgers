<script setup>
import backgroundImage from '@/assets/images/bg.jpg'

const { $gsap } = useNuxtApp()
const background = ref(null)
const wrapper = ref(null)

onMounted(() => {
  const ratio = (wrapper.value) ? window.innerHeight / (window.innerHeight + wrapper.value.offsetHeight) : 0
  $gsap.fromTo(background.value, {
    backgroundPosition: () => "50% 0px"
  }, {
    backgroundPosition: () => `50% ${-1 * window.innerHeight * (1 - ratio)}px`,
    ease: "none",
    scrollTrigger: {
      trigger: wrapper.value,
      start: "top top", 
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true
    }
  });
})
</script>

<template>
  <div ref="wrapper" class="page-wrapper relative">
    <div
      ref="background"
      class="page-background"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    />
    <div class="relative z-10 pt-4 md:pt-safe-area">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  background-position: top;
  background-size: 100% auto;
}
</style>