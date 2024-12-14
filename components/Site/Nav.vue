<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const scrolled = ref(false)

onMounted(() => {
  document.addEventListener('scroll', () => {
    const chart = document.querySelector('.rent-chart')
    const scrollY = window.scrollY
    const threshold = chart?.offsetTop
    scrolled.value = scrollY > threshold
  })
})
</script>

<template>
  <header class="pax-header">
    <nav :class="['pax-nav', { scrolled }]">
      <div class="flex gap-site">
        <a href="https://compromis.net" :aria-label="$t('assist.logo')" class="logo compromis">
          <SiteLogo />
        </a>
        <a href="https://greens-efa.eu" aria-label="Greens/EFA in the European Parliament" class="logo greensefa">
          <SiteGreensEFA />
        </a>
        <a href="https://europarl.compromis.net" aria-label="Oficina Vicent Marzà" class="logo marza">
          <SiteVicentMarza />
        </a>
      </div>
      <div class="pax-languages">
        <template v-for="lang in locales" :key="lang.code">
          <a
            v-if="locale !== lang.code"
            :href="switchLocalePath(lang.code)"
            :aria-label="$t('assist.language', { lang: lang.name })"
            :key="lang.code"
          >
            {{ lang.name }}
          </a>
        </template>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.pax {
  &-nav {
    position: fixed;
    display: flex;
    align-items: center;
    padding: var(--site-padding);
    justify-content: space-between;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1100;

    .logo {
      display: flex;
      align-items: center;
      color: var(--white);
      gap: var(--spacer-2);
      text-decoration: none;

      svg {
        height: 2.25rem;
      }

      &.compromis svg {
        height: 1.6rem;
      }

      &-addon {
        font-size: 1.25rem;
      }
    }
  }

  &-languages {
    display: flex;
    gap: var(--site-padding);

    :deep(a) {
      color: var(--white);
      font-size: 1.1rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 4px;
      }
    }
  }

  &-header {
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 6rem;
      pointer-events: none;
      background: linear-gradient(to bottom, rgba(2, 17, 27, .6), rgba(2, 17, 27, 0));
      z-index: 1000;
    }
  }
}

@include media('<md') {
  .pax {
    &-nav {
      transition: background .25s ease;

      .logo-addon {
        display: none;
      }

      &.scrolled {
        background: var(--green);
      }
    }
  }
}
</style>
