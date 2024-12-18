<script setup>

</script>

<template>
  <div class="intro pt-10 container mx-auto p-site">
    <LegosCard class="max-w-[800px] text-base">      
      <div v-if="$i18n.locale === 'val'">
        <p>Hi ha aerolínies que guanyen milionades incomplint els teus drets: retards, cancel·lacions i abusos pareixen part del seu model de negoci mentre tu perds temps i diners.</p>
        <p>Ací t'ajudem a defensar els teus drets: a fer-los complir les normes i a anar més enllà per protegir els passatgers.</p>
        <p><strong>Denúncia, reclama i lluitem conjuntament per ampliar els nostres drets!</strong></p>
      </div>
      <div v-if="$i18n.locale === 'cas'">
        <p>Hay aerolíneas que ganan millonadas incumpliendo tus derechos: retrasos, cancelaciones y abusos parecen parte de su modelo de negocio mientras pierdes tiempo y dinero.</p>
        <p>Aquí te ayudamos a defender tus derechos: a hacerles cumplir las normas ya ir más allá para proteger a los pasajeros.</p>
        <p><strong>¡Denuncia, reclama y luchamos conjuntamente para ampliar nuestros derechos!</strong></p>
      </div>
      <div v-if="$i18n.locale === 'eng'">
        <p>There are airlines that make millions by violating your rights: delays, cancellations and abuses seem to be part of their business model while you lose time and money.</p>
        <p>Here we help you to defend your rights: to enforce the rules and to go further to protect passengers.</p>
        <p><strong>Report, claim and fight together to expand our rights!</strong></p>
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