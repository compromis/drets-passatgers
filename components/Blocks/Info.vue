<script setup>
const { t } = useI18n()

const items = [
  {
    icon: 'mdi:clock-outline',
    title: t('info.delayed.heading'),
    component: resolveComponent('ContentInfoDelayed'),
    color: 'orange',
  },
  {
    icon: 'material-symbols:close',
    title: t('info.cancelled.heading'),
    component: resolveComponent('ContentInfoCancelled'),
    color: 'red',
  },
  {
    icon: 'ri:hand',
    title: t('info.denied.heading'),
    component: resolveComponent('ContentInfoDenied'),
    color: 'black',
  },
  {
    icon: 'mingcute:luggage-line',
    title: t('info.luggage.heading'),
    component: resolveComponent('ContentInfoLuggage'),
    color: 'brown',
  },
  {
    icon: 'mdi:wheelchair',
    title: t('info.accessibility.heading'),
    component: resolveComponent('ContentInfoAccessibility'),
    color: 'blue',
  }
]
</script>

<template>
  <div class="info bg-gradient-to-b from-blue/0 to-blue pb-10">
    <div class="container p-site mx-auto text-base">
      <LegosCard class="info-card overflow-clip" edge>
        <h2 class="font-bold px-6 py-4 text-md">{{ $t('info.heading') }}</h2>
        <div class="px-6 pb-4 border-b-2 info-text">
          <p>
            La directiva <a href="">EC 261/2004</a> protege a los pasajeros en vuelos
          </p>
          <ul>
            <li>Que partan desde <strong>cualquier aeropuerto dentro de la UE🇪🇺</strong>.</li>
            <li>Operados por <strong>aerolíneas con sede en la UE🇪🇺</strong>, incluso desde aeropuertos fuera de la UE.</li>
          </ul>
          <p>Aquí tienes un resumen de los derechos que ya te pertenecen:</p>
        </div>
        <LegosAccordion
          id="accordion"
          :items="items"
        />
      </LegosCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-card {
  max-width: 1250px;
  margin-inline: auto;
}

.info-text {
  ul {
    list-style: disc;
    padding: var(--spacer-4);
  }
}
</style>