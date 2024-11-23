<script setup>

</script>

<template>
  <aside class="pax-bottom-bar">
    <div class="marquee">
      <div v-for="line in $tm('marquee.questions')">
        {{ $rt(line) }}
      </div>
    </div>
    <div class="cta">
      <a href="#form">
        {{ $t('marquee.cta') }}
      </a>
    </div>
  </aside>
</template>

<style lang="scss" scoped>

</style>