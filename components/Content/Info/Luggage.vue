<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <div class="p-6 pt-0 flex flex-col gap-6 text-md">
    <p>{{ t('item0') }}</p>
    <ul class="flex flex-col gap-6">
      <li class="line">
        <div class="icon bg-brown/25">
          <Icon name="tabler:receipt-refund" />
        </div>
        <p class="self-center">
          {{ t('item1') }}
        </p>
      </li>
      <li class="line">
        <div class="icon bg-brown/25">
          <Icon name="solar:banknote-2-linear" />
        </div>
        <div class="self-center">
          <p>
            {{ t('item2') }}
          </p>
        </div>
      </li>
    </ul>
    <p>{{ t('item3') }}</p>
    <ul class="flex flex-col gap-6">
      <li class="line">
        <div class="icon bg-brown/25">
          <Icon name="fluent-mdl2:repair" />
        </div>
        <p class="self-center">
          {{ t('item4') }}
        </p>
      </li>
    </ul>
  </div>
</template>

<i18n lang="json">
  {
    "val": {
      "item0": "Tanto en pérdida como en demora:",
      "item1": "Reembolso de gastos esenciales (ropa, artículos de aseo, etc.).",
      "item2": "Compensación de hasta 1.300 €, según el Convenio de Montreal.",
      "item3": "En caso de equipaje dañado:",
      "item4": "Derecho a reparación o compensación económica, siempre que denuncies el daño antes de 7 días. "
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