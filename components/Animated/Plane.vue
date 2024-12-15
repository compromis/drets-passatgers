<script lang="ts" setup>
const props = defineProps({
  bis: { type: Boolean, default: false }
})

const { $gsap } = useNuxtApp()
const airplane = ref(null)
const airplaneInner = ref(null)

const mousePos = useState('mousePos', () => ({ x: 0, y: 0 }))
const setMousePos = ({ pageX, pageY }) => {
  mousePos.value = { x: pageX, y: pageY }
}

onMounted(() => {
  document.addEventListener('mousemove', setMousePos)

  if (props.bis) {
    const mm = $gsap.matchMedia()

    mm.add({
      isDesktop: `(min-width: 768px)`,
      isMobile: `(max-width: 767px)`,
    }, (context) => {
      const { isDesktop } = context.conditions
      $gsap.to(airplane.value, {
        x: isDesktop ? '55vw' : '80vw',
        y: '-40vh',
        scrollTrigger: {
          trigger: '.form-container',
          start: 'top bottom',
          end: '+=2000',
          scrub: true
        }
      })
    })
  } else {
    $gsap.from(airplane.value, {
      x: '-100vw',
      y: '100vh',
      ease: "power4.out",
      duration: 5
    })

    $gsap.to(airplaneInner.value, {
      x: '100vw',
      y: '-100vh',
      ease: "power1.in",
      scrollTrigger: {
        trigger: '.intro-container',
        start: 'top center',
        end: '+=1500',
        scrub: true
      }
    })
  }
})

const computedParallax = computed(() => {
  const strength = props.bis ? 3 : 2
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
    <div ref="airplaneInner">
      <img src="../../assets/images/airplane.png" alt="Airplane" :style="computedParallax" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.airplane {
  position: absolute;
  top: -1rem;
  right: 4rem;
  width: 35vw;

  img {
    width: 100%;
  }

  &.bis {
    top: auto;
    bottom: -35vh;
    left: -50vw;
    right: auto;
    width: 42vw;
  }
}

@include media('<md') {
  .airplane.bis {
    width: 80vw;
    left: -60vw;
  }
}
</style>