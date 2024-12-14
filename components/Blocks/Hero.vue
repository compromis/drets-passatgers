<script setup>
const { t } = useI18n()
const { $gsap } = useNuxtApp()
const CHARACTERS = ' abcdefghijklmnopqrstuvwxyz '.split('')
const tls = []

onMounted(() => {
  const flips = Array.from(document.querySelectorAll('.hero-panel .letter'))
  $gsap.defaults({ duration: 1 })

  for (const flip of flips) {
    const [foldTop, foldBottom, unfoldTop, unfoldBottom] = Array.from(flip.querySelectorAll('.hero-panel .letter span'))
    foldTop.innerText = foldBottom.innerText = CHARACTERS[0]
    unfoldTop.innerText = unfoldBottom.innerText = CHARACTERS[1]

    const tl = $gsap.timeline({
      paused: true,
      repeat: CHARACTERS.length - 2,
      onRepeat: function () {
        const index = Math.floor(tl.totalTime() / tl.duration())
        foldTop.innerText = foldBottom.innerText = CHARACTERS[index]
        unfoldTop.innerText = unfoldBottom.innerText = CHARACTERS[(index + 1) % CHARACTERS.length]
      }
    })

    tl.set(unfoldTop, { rotateX: 1 });
    tl.set(unfoldBottom, { rotateX: 180 });

    tl.to(unfoldTop, { rotateX: 0 }, 0);
    tl.to(unfoldBottom, { rotateX: 0 }, 0);
    tl.to(foldTop, { rotateX: -180 }, 0);
    tl.to(foldBottom, { rotateX: 0 }, 0);

    const duration = tl.totalDuration()

    const scrub = $gsap.to(tl, {
      totalTime: duration,
      repeat: -1,
      paused: true,
      duration: duration,
      ease: 'none'
    })

    scrub.time(tl.totalDuration())

    tls.push(scrub)
  }


  const text = t('hero.headline').toLowerCase()
  const chars = text.split('')
  const pilot = $gsap.timeline()

  for (let i = 0; i < chars.length; i++) {
    const desired = chars[i]
    const currentIndex = CHARACTERS.indexOf(CHARACTERS[tls[i].time()])
    const desiredIndex = CHARACTERS.indexOf(desired)
    const shift = currentIndex > desiredIndex ?
      CHARACTERS.length - 1 - currentIndex + desiredIndex :
      desiredIndex - currentIndex

    const pad = currentIndex === desiredIndex ? 0 : CHARACTERS.length - 1

    pilot.to(tls[i], {
      time: `+=${shift + pad}`,
      duration: (shift + pad) * $gsap.utils.random(0.02, 0.06)
    }, 0)
  }
})
</script>

<template>
  <header class="container mx-auto p-site">
    <div class="hero-panel bg-black text-white">
      <h1 class="font-headline flex flex-col gap-5">
        <Icon name="material-symbols:flight-takeoff" class="icon text-yellow" />
        <div class="line">
          <span class="letter" v-for="(letter, l) in $t('hero.line1')" :key="l">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div class="line text-yellow">
          <span class="letter" v-for="(letter, l) in $t('hero.line2')" :key="l">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .hero-panel {
    padding: var(--spacer-8) var(--spacer-12) var(--spacer-10);
    border-radius: 1rem;
  }

  .icon {
    font-size: 4.5rem;
  }

  .line {
    display: flex;
    gap: 0.5ch;
    text-transform: uppercase;
  }

  .letter {
    font-size: 4rem;
  }

  .letter::before,
  .letter::after {
    content: '';
    position: absolute;
    width: 10%;
    height: 20%;
    background: color-mix(in oklch, canvas, canvasText 15%);
    top: 50%;
    translate: 0 -50%;
    border: 0.025em solid var(--black);
  }

  .letter::before {
    left: 0;
  }
  .letter::after {
    right: 0;
  }

  .letter {
    width: 1.5ch;
    line-height: 1;
    display: inline-block;
    height: 1lh;
    /* outline: 2px dashed hotpink; */
    text-align: center;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1em;
  }

  .letter span {
    position: absolute;
    border-radius: .25rem;
    transform-style: preserve-3d;
    position: absolute;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    overflow: hidden;
    inset: 0;
    background: radial-gradient(
        100% 100% at 50% 100%,
        hsla(0, 0%, 100%, 0.2),
        #0000
      ),
      hsl(218, 13%, 17%);
  }

  .letter span:nth-of-type(odd) {
    clip-path: polygon(
      0 0,
      100% 0,
      100% 40%,
      90% 40%,
      90% 48%,
      10% 48%,
      10% 40%,
      0 40%
    );
  }

  .letter span:nth-of-type(even) {
    clip-path: polygon(
      0 60%,
      10% 60%,
      10% 52%,
      90% 52%,
      90% 60%,
      100% 60%,
      100% 100%,
      0 100%
    );
  }
</style>