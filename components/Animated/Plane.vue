<script lang="ts" setup>
const props = defineProps({
  bis: { type: Boolean, default: false }
})

const { $gsap } = useNuxtApp()
const airplane = ref(null)

const mousePos = useState('mousePos', () => ({ x: 0, y: 0 }))
const setMousePos = ({ pageX, pageY }) => {
  mousePos.value = { x: pageX, y: pageY }
}

onMounted(() => {
  document.addEventListener('mousemove', setMousePos)

  if (props.bis) {
    $gsap.to(airplane.value, {
      x: '43vw',
      y: '-40vh',
      ease: "power4.out",
      duration: 5,
      scrollTrigger: {
        trigger: '.form-container',
        start: 'top center',
        markers: true
      }
    })
  } else {
    $gsap.from(airplane.value, {
      x: '-100vw',
      y: '100vh',
      ease: "power4.out",
      duration: 5,
    })
  }
})

const computedParallax = computed(() => {
  const strength = 2
  let transform = {}
  if (typeof window !== 'undefined') {
    const x = (window.innerWidth - mousePos.value.x * strength) / 100
    const y = (window.innerHeight - mousePos.value.y * strength) / 100
    transform = { transform: `translate(${x}px, ${y}px)`}
  }
  return {...transform}
})

</script>

<template>
  <div ref="airplane" :class="['airplane', { bis }]">
    <img src="../../assets/images/airplane.png" alt="Airplane" :style="computedParallax" />
  </div>
</template>

<style lang="scss" scoped>
.airplane {
  position: absolute;
  top: 4rem;
  right: 4rem;
  width: 35vw;

  img {
    width: 100%;
  }

  &.bis {
    top: auto;
    bottom: -45vh;
    left: -50vw;
    right: auto;
    width: 42vw;
  }
}
</style>