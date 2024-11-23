<script setup>

</script>

<template>
  <LegosCard>
    <h2>{{ $t('intro.heading') }}</h2>
    <div v-if="$i18n.locale === 'val'">
      <p>
        <p>VALLa Normativa EC 261/2004 garantiza compensaciones y asistenciacuando tu vuelo</p>

        <p>El problema no es la falta de normas: es que las aerolíneas las ignoran impunemente.</p>
 
        <p>Cada día, miles de pasajeros ven vulnerados sus derechos porque las aerolíneas priorizan sus beneficios por encima de sus obligaciones. El resultado: un sistema donde las aerolíneas e intermediarios (Kayak, Vueling, etc.) salen ganando y tú pierdes. Esto tiene que cambiar.</p>
        
        <p>&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</p>
      </p>
    </div>
    <div v-if="$i18n.locale === 'cas'">
      <p>
        <p>La Normativa EC 261/2004 garantiza compensaciones y asistenciacuando tu vuelo</p>

        <p>El problema no es la falta de normas: es que las aerolíneas las ignoran impunemente.</p>
 
        <p>Cada día, miles de pasajeros ven vulnerados sus derechos porque las aerolíneas priorizan sus beneficios por encima de sus obligaciones. El resultado: un sistema donde las aerolíneas e intermediarios (Kayak, Vueling, etc.) salen ganando y tú pierdes. Esto tiene que cambiar.</p>
        
        <p>&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</p>
      </p>
    </div>
  </LegosCard>
</template>

<style lang="scss" scoped>

</style>