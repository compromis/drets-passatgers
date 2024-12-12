<template>
  <aside class="pax-bottom-bar border-[3px] rounded-xl flex fixed bottom-site left-site right-site overflow-clip bg-yellow z-[1000]">
    <Vue3Marquee class="marquee self-center p-3 text-md font-extrabold flex h-full" :duration="50">
      <div v-for="line in $tm('marquee.questions')" class="mx-4">
        {{ $rt(line) }}
      </div>
    </Vue3Marquee>
    <div class="cta flex border-l-[3px]">
      <a href="#form" class="p-site bg-red h-full flex gap-2 items-center text-white font-extrabold text-md hover:bg-black hover:text-white focus-yellow">
        <Icon name="wpf:paperplane" />
        {{ $t('marquee.cta') }}
      </a>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.pax-bottom-bar {
}
</style>