<script setup>
const { t } = useI18n()

const items = [
  {
    icon: '',
    title: t('info.delayed.heading'),
    component: resolveComponent('ContentInfoDelayed'),
    color: '',
  },
  {
    icon: '',
    title: t('info.cancelled.heading'),
    component: resolveComponent('ContentInfoCancelled'),
    color: '',
  }
]
</script>

<template>
  <LegosCard>
    <h2>{{ $t('info.heading') }}</h2>
    <LegosAccordion
      :items="items"
    />
  </LegosCard>
</template>

<style lang="scss" scoped>

</style>