<script setup>
const props = defineProps({
  id: { type: [String, Number], required: true },
  icon: { type: String, default: null },
})

const card = ref(null)
const { $gsap } = useNuxtApp()
const { random } = useUtils()
const { data: rotate } = await useAsyncData(
  'rotate' + props.id,
  () => random(-3,3)
)

onMounted(() => {
  const mm = $gsap.matchMedia()
  mm.add("(hover: none)", () => {
    $gsap.to(card.value, {
      scrollTrigger: {
        trigger: card.value,
        start: 'top center',
        end: '+=200',
        toggleClass: 'active'
      }
    })
  })
})
</script>

<template>
  <div ref="card" class="relative hoverable" :style="{
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

@media (hover: hover) {
  .hoverable {
    &:hover {
      transform: rotate(var(--rotate)) scale(1.07);
      z-index: 100;

      .icon {
        scale: 1;
      }
    }
  }
}

@media (hover: none) {
  .hoverable {
    scale: .95;
    padding-inline: var(--spacer-2);

    :deep(.card) {
      padding-right: 20%;
    }
  }

  .active {
    transform: rotate(var(--rotate)) scale(1.07);
    
    .icon {
      scale: 1;
    }
  }
}
</style>