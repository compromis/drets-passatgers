<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <div class="p-6 pt-0 flex flex-col gap-6 text-base">
    <p class="font-bold">{{ t('item0') }}</p>
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
    <p class="font-bold">{{ t('item3') }}</p>
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
      "item0": "Pèrdua o demora de l'equipatge:",
      "item1": "Reembossament de despeses essencials (roba, articles d'higiene, etc.).",
      "item2": "Compensació fins a 1.300 €, segons el Conveni de Montreal.",
      "item3": "En cas d'equipatge danyat:",
      "item4": "Dret a reparació o compensació econòmica, sempre que denuncies el dany abans de 7 dies."
    },
    "cas": {
      "item0": "Tanto en pérdida como en demora:",
      "item1": "Reembolso de gastos esenciales (ropa, artículos de aseo, etc.).",
      "item2": "Compensación de hasta 1.300 €, según el Convenio de Montreal.",
      "item3": "En caso de equipaje dañado:",
      "item4": "Derecho a reparación o compensación económica, siempre que denuncies el daño antes de 7 días. "
    },
    "eng": {
      "item0": "Lost or delayed baggage:",
      "item1": "Reimbursement for essential expenses (clothes, toiletries, etc.).",
      "item2": "Compensation up to €1,300, according to the Montreal Convention.",
      "item3": "In case of damaged baggage:",
      "item4": "Right to repair or financial compensation, provided you report the damage within 7 days."
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