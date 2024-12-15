<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <ul class="p-6 pt-0 flex flex-col gap-6 text-base">
    <li class="line">
      <div class="icon bg-black/25">
        <Icon name="solar:banknote-2-linear" />
      </div>
      <p class="self-center">
        {{ t('item1') }}
      </p>
    </li>
    <li class="line">
      <div class="icon bg-black/25">
        <Icon name="lucide:plane-takeoff" />
      </div>
      <div class="self-center">
        <p>
          {{ t('item2') }}
        </p>
        <ul>
          <li>
            {{ t('item21') }}
          </li>
          <li>
            {{ t('item22') }}
          </li>
        </ul>
      </div>
    </li>
    <li class="line">
      <div class="icon bg-black/25">
        <Icon name="fluent:food-16-regular" />
      </div>
      <p class="self-center">
        {{ t('item3') }}
      </p>
    </li>
  </ul>
</template>

<i18n lang="json">
  {
    "val": {
      "item1": "Compensació Automàtica: Entre 250 i 600 €, segons la distància del vol.",
      "item2": "Reubicació o Reembossament:",
      "item21": "Un vol alternatiu com més prompte millor.",
      "item22": "O el reembossament complet del bitllet.",
      "item3": "Assistència Obligatòria: Menjars, allotjament i transport, si cal."
    },
    "cas": {
      "item1": "Compensación Automática: Entre 250 y 600 €, según la distancia del vuelo.",
      "item2": "Reubicación o Reembolso:",
      "item21": "Un vuelo alternativo lo antes posible.",
      "item22": "O el reembolso completo del billete.",
      "item3": "Asistencia Obligatoria: Comidas, alojamiento y transporte, si es necesario."
    },
    "eng": {
      "item1": "Automatic Compensation: Between €250 and €600, depending on the flight distance.",
      "item2": "Rebooking or Refund:",
      "item21": "An alternative flight as soon as possible.",
      "item22": "Or a full refund of the ticket.",
      "item3": "Mandatory Assistance: Meals, accommodation, and transport, if necessary."
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
  }

  ul {
    list-style-type: disc;
    margin-left: 2rem;
  }
}
</style>