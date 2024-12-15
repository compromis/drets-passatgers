<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <div class="p-6 pt-0 flex flex-col gap-6 text-base">
    <ul class="flex flex-col gap-6">
      <li class="line">
        <div class="icon bg-blue/25 aspect-square shrink-0">
          1
        </div>
        <p class="self-center">
          {{ t('item1') }}
        </p>
      </li>
      <li class="line">
        <div class="icon bg-blue/25 aspect-square shrink-0">
         2
        </div>
        <div class="self-center">
          <p>
            {{ t('item2') }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<i18n lang="json">
  {
    "val": {
      "item1": "Dret a rebre assistència gratuïta a l'aeroport, a l'embarcar i desembarcar.",
      "item2": "Transport gratuït d'equips de mobilitat (com cadires de rodes)."
    },
    "cas": {
      "item1": "Derecho a recibir asistencia gratuita en el aeropuerto, al embarcar y al desembarcar.",
      "item2": "Transporte gratuito de equipos de movilidad (sillas de ruedas, por ejemplo)."
    },
    "eng": {
      "item1": "Right to free assistance at the airport, during boarding, and disembarking.",
      "item2": "Free transport of mobility equipment (e.g., wheelchairs)."
    }
  }
</i18n>

<style lang="scss" scoped>
.line {
  display: flex;
  gap: var(--spacer-4);

  .icon {
    border-radius: .5rem;
    padding: var(--spacer-4);
    font-size: 2rem;
    display: flex;
    align-items: center;
    color: var(--color);
    justify-content: center;
    line-height: 2em;
    width: 2em;
    height: 2em;
  }

  ul {
    list-style-type: disc;
    margin-left: 2rem;
  }
}
</style>