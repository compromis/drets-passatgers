<script setup>
const { locale, t } = useI18n()

/* Url and text */
const url = computed(() => {
  const lang = locale.value === 'val' ? '' : `/${locale.value}`
  return encodeURIComponent(`https://maletaperduda.com${lang}`)
})

const text = computed(() => {
  return encodeURIComponent(t('share.shareable_text'))
})

const urlAndText = computed(() => {
  return `${text.value} ${url.value}`
})

/* Share dialog */
const payload = {
  title: t('share.shareable_title'),
  text: text.value,
  url: url.value,
  image: t('share.shareable_image')
}

const canShare = computed(() => window && window.navigator.share)
const share = async () => {
  if (canShare.value) {
    await navigator.share(payload)
  }
}
</script>

<template>
  <section class="bg-gradient-to-b to-blue/0 from-blue py-24">
    <div class="container container-sm p-site text-white">
      <div class="border-2 border-white rounded-2xl overflow-clip">
        <div class="py-site px-8 border-b-2 border-white">
          <h2 class="font-extrabold text-lg">{{ $t('share.title') }}</h2>
          <p class="text-base">{{ $t('share.text') }}</p>
        </div>
        <div class="buttons grid md:grid-cols-2">
          <a :href="`https://wa.me/?text=${urlAndText}`" class="md:border-r-2 border-b-2 border-white">
            <span>-&gt;</span> WhatsApp
          </a>
          <a :href="`https://t.me/share/url?url=${urlAndText}`" class="border-b-2 border-white">
            <span>-&gt;</span> Telegram
          </a>
          <a :href="`https://x.com/intent/post/?text=${text}&url=${url}.com&hashtags=`" class="md:border-r-2 border-b-2 md:border-b-0 border-white">
            <span>-&gt;</span> X / Twitter
          </a>
          <a v-if="canShare" href="#" @click.prevent="share">
            <span>-&gt;</span> {{ $t('share.other') }}
          </a>
          <a v-else :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`">
            <span>-&gt;</span> Facebook
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.buttons a {
  padding: var(--spacer-6);
  font-size: var(--text-lg);
  color: var(--white);
  display: flex;
  gap: .5em;
  transition: .5s ease;

  span {
    max-width: 0;
    overflow: clip;
    transition: .5s ease;
    white-space: nowrap;
    color: var(--blue);
  }

  &:hover {
    background: var(--white);
    color: var(--blue);
    text-decoration: none;

    span {
      max-width: 2em;
    }
  }
}
</style>