<script setup>

</script>

<template>
  <div class="intro pt-10 container mx-auto p-site">
    <LegosCard class="max-w-[800px] text-base">
      <div v-if="$i18n.locale === 'val'">
        <h2 class="intro-title">
          ¿Sabías que como pasajero en la Unión Europea ya tienes derechos claros y protegidos por ley?
        </h2>
        <p>
          La Normativa <a href="">EC 261/2004</a> garantiza compensaciones y asistencia cuando tu vuelo
          <span class="pill delay">
            <Icon name="meteor-icons:clock" class="icon" />
            se retrasa
          </span>,
          <span class="pill cancelled">
            <Icon name="ri:close-large-fill" class="icon" />
            se cancela
          </span>, o
          <span class="pill denied">
            <Icon name="ri:hand" class="icon" />
            te deniegan el emarque
          </span>
        </p>
        <p>El problema no es la falta de normas: es que las aerolíneas las ignoran impunemente.</p>
        <p>Cada día, miles de pasajeros ven vulnerados sus derechos porque las aerolíneas priorizan sus beneficios por encima de sus obligaciones. El resultado: un sistema donde las aerolíneas e intermediarios (Kayak, Vueling, etc.) salen ganando y tú pierdes. Esto tiene que cambiar.</p>      
      </div>
      <div v-if="$i18n.locale === 'cas'">
        <h2 class="intro-title">
          ¿Sabías que como pasajero en la Unión Europea ya tienes derechos claros y protegidos por ley?
        </h2>
        <p>La Normativa EC 261/2004 garantiza compensaciones y asistenciacuando tu vuelo</p>
        <p>El problema no es la falta de normas: es que las aerolíneas las ignoran impunemente.</p>
        <p>Cada día, miles de pasajeros ven vulnerados sus derechos porque las aerolíneas priorizan sus beneficios por encima de sus obligaciones. El resultado: un sistema donde las aerolíneas e intermediarios (Kayak, Vueling, etc.) salen ganando y tú pierdes. Esto tiene que cambiar.</p>
      </div>
      <div class="text-gray whitespace-nowrap overflow-clip text-md leading-none mt-8" aria-hidden="true">
        <span v-for="i in 40" :key="i" class="mx-1">&gt;</span>
      </div>
    </LegosCard>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  p {
    margin-bottom: var(--spacer-4);
    line-height: 1.6;
  }

  a {
    color: var(--gray);
    text-decoration: dotted;
  }

  &-title {
    font-size: var(--text-lg);
    line-height: 1.25;
    margin-block-end: var(--spacer-8);
  }

  .pill {
    color: var(--white);
    border-radius: 2em;
    padding: .25em .5em;
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    gap: .25em;

    &.delay {
      background-color: var(--yellow);
    }

    &.cancelled {
      background-color: var(--red);
    }

    &.denied {
      background-color: var(--black);
    }
  }
}
</style>