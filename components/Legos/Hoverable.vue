<script setup>
const props = defineProps({
  id: { type: [String, Number], required: true },
  icon: { type: String, default: null },
})

const { random } = useUtils()
const { data: rotate } = await useAsyncData(
  'rotate' + props.id,
  () => random(-3,3)
)
</script>

<template>
  <div class="relative hoverable" :style="{
    '--rotate': `${rotate}deg`
  }">
    <slot />
    <img v-if="icon" :src="`/images/emojis/${icon}`" alt="" class="icon" />
  </div>
</template>

<style lang="scss" scoped>
.hoverable {
  transition: .5s ease;
  cursor: default;
}

.icon {
  position: absolute;
  right: 0;
  top: 0;
  width: 25%;
  scale: 0;
  rotate: calc(var(--rotate) * -3);
  translate: 30% 50%;
  transition: .5s ease;
}

.hoverable:hover {
  transform: rotate(var(--rotate)) scale(1.07);
  z-index: 100;

  .icon {
    scale: 1;
  }
}
</style>