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
      "item1": "Reembolso completo del billete en un plazo de 7 días.",
      "item2": "Transporte alternativo hasta tu destino.",
      "item3": "Compensación Económica: Igual que en los retrasos (250-600 €), salvo que:",
      "item31": "Te hayan avisado con más de 14 días de antelación.",
      "item32": "Ofrezcan un vuelo alternativo con horarios similares.",
      "item4": "Derecho a Asistencia: Comidas, bebidas y alojamiento si la cancelación implica espera prolongada."
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