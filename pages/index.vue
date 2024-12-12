<script setup>
import Rellax from 'rellax'

const { t } = useI18n()
const title = t('meta.title')
const description = t('meta.description')
const ogImage = t('meta.image')
const keywords = t('meta.keywords')
const themeColor = '#148E6C'
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
  const rellax = new Rellax('.rellax')
})
</script>

<template>
  <main class="main-site">
    <LegosBackground>
      <BlocksHero />
      <div class="relative">
        <BlocksIntro class="rellax" data-rellax-speed="1.1" />
        <AnimatedPlane />
      </div>
      <div class="relative form-container">
        <BlocksForm class="rellax" data-rellax-speed="2.2" />
        <AnimatedPlane bis />
      </div>
      <BlocksInfo />
      <BlocksProposal />
      <BlocksShare />
      <BlocksMarquee />
    </LegosBackground>
  </main>
</template>
