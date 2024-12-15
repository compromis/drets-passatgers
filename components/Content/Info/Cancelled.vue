<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <ul class="p-6 pt-0 flex flex-col gap-6 text-base">
    <li class="line">
      <div class="icon bg-red/25">
        <Icon name="tabler:receipt-refund" />
      </div>
      <p class="self-center">
        {{ t('item1') }}
      </p>
    </li>
    <li class="line">
      <div class="icon bg-red/25">
        <Icon name="carbon:train-speed" />
      </div>
      <p class="self-center">
        {{ t('item2') }}
      </p>
    </li>
    <li class="line">
      <div class="icon bg-red/25">
        <Icon name="solar:banknote-2-linear" />
      </div>
      <div class="self-center">
        <p>
          {{ t('item3') }}
        </p>
        <ul>
          <li>
            {{ t('item31') }}
          </li>
          <li>
            {{ t('item32') }}
          </li>
        </ul>
      </div>
    </li>
    <li class="line">
      <div class="icon bg-red/25">
        <Icon name="fluent:food-16-regular" />
      </div>
      <p class="self-center">
        {{ t('item4') }}
      </p>
    </li>
  </ul>
</template>

<i18n lang="json">
  {
    "val": {
      "item1": "Reembossament complet del bitllet en un termini de 7 dies.",
      "item2": "Transport alternatiu fins a la teua destinació.",
      "item3": "Compensació Econòmica: Igual que en els retards (250-600 €), excepte si:",
      "item31": "T'han avisat amb més de 14 dies d'antelació.",
      "item32": "T'ofereixen un vol alternatiu amb horaris similars.",
      "item4": "Dret a Assistència: Menjars, begudes i allotjament si la cancel·lació implica una espera prolongada."
    },
    "cas": {
      "item1": "Reembolso completo del billete en un plazo de 7 días.",
      "item2": "Transporte alternativo hasta tu destino.",
      "item3": "Compensación Económica: Igual que en los retrasos (250-600 €), salvo que:",
      "item31": "Te hayan avisado con más de 14 días de antelación.",
      "item32": "Ofrezcan un vuelo alternativo con horarios similares.",
      "item4": "Derecho a Asistencia: Comidas, bebidas y alojamiento si la cancelación implica espera prolongada."
    },
    "eng": {
      "item1": "Full ticket refund within 7 days.",
      "item2": "Alternative transport to your destination.",
      "item3": "Financial Compensation: Same as delays (€250-€600), unless:",
      "item31": "You were informed more than 14 days in advance.",
      "item32": "An alternative flight is offered with similar timings.",
      "item4": "Right to Assistance: Meals, drinks, and accommodation if the cancellation results in a prolonged wait."
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
  }

  ul {
    list-style-type: disc;
    margin-left: 2rem;
  }
}
</style>