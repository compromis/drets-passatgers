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
  <div class="info bg-gradient-to-b from-blue/0 to-blue pb-10">
    <div class="container mx-auto">
      <LegosCard class="h-[500px]">
        <h2>{{ $t('info.heading') }}</h2>
        <LegosAccordion
          id="accordion"
          :items="items"
        />
      </LegosCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {

}
</style>