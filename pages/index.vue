<script setup>
import Rellax from 'rellax'

const { t } = useI18n()
const title = t('meta.title')
const description = t('meta.description')
const ogImage = t('meta.image')
const keywords = t('meta.keywords')
const themeColor = '#000'
const twitterSite = '@compromis'

useServerSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage,
  twitterCard: 'summary_large_image',
  keywords,
  ogSiteName: title,
  themeColor,
  twitterSite,
  ogType: 'website',
  ogLocale: 'ca'
})
useHead({ title })

onMounted(() => {
  const rellax = new Rellax('.rellax', { breakpoints: [576, 768, 1201] })
})
</script>

<template>
  <main class="main-site overflow-clip">
    <LegosBackground>
      <BlocksHero />
      <div class="relative intro-container">
        <BlocksIntro class="rellax" data-rellax-speed="1" data-rellax-desktop-speed="1.1" />
        <ClientOnly>
          <AnimatedPlane class="hidden md:block" />
        </ClientOnly>
      </div>
      <div class="relative form-container">
        <BlocksForm class="rellax" data-rellax-speed="1.9" data-rellax-desktop-speed="2.1" />
        <ClientOnly>
          <AnimatedPlane bis />
        </ClientOnly>
      </div>
      <BlocksInfo />
      <BlocksProposal />
      <ClientOnly>
        <BlocksShare />
        <BlocksMarquee />
      </ClientOnly>
    </LegosBackground>
  </main>
</template>
