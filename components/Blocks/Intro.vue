<script setup>

</script>

<template>
  <div class="intro pt-10 container mx-auto p-site">
    <LegosCard class="max-w-[800px] text-base">      
      <div v-if="$i18n.locale === 'val'">
        <h2 class="intro-title">
          ¿Sabías que como pasajero en la Unión Europea ya tienes derechos claros y protegidos por ley?
        </h2>
        <p>Las aerolíneas ganan millones ignorando tus derechos. Retrasos, cancelaciones y abusos son parte de su modelo de negocio, mientras tú pierdes. No se trata solo de hacer cumplir las normas, sino de ampliarlas para proteger mejor a los pasajeros. ¡Es hora de poner fin a este abuso y luchar por derechos más fuertes y justos!</p>
      </div>
      <div v-if="$i18n.locale === 'cas'">
        <h2 class="intro-title">
          ¿Sabías que como pasajero en la Unión Europea ya tienes derechos claros y protegidos por ley?
        </h2>
        <p>Las aerolíneas ganan millones ignorando tus derechos. Retrasos, cancelaciones y abusos son parte de su modelo de negocio, mientras tú pierdes. No se trata solo de hacer cumplir las normas, sino de ampliarlas para proteger mejor a los pasajeros. ¡Es hora de poner fin a este abuso y luchar por derechos más fuertes y justos!</p>
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
    font-size: var(--text-md);
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