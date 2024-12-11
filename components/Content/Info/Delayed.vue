<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <div class="p-6 pt-0 flex flex-col gap-6 text-md">
    <div class="flex gap-6 items-center">
      <div class="bg-orange/25 font-bold p-4 rounded-lg shrink-0 w-fit flex items-center text-brown">
        {{ t('over2.tag') }}
      </div>
      <div class="w-full">
        <h4 class="font-bold">{{ t('over2.title') }}</h4>
        <p>{{ t('over2.text') }}</p>
      </div>
    </div>
    <div class="flex gap-6">
      <div class="bg-orange/25 font-bold p-4 rounded-lg flex items-center shrink-0 w-fit text-brown">
        {{ t('over3.tag') }}
      </div>
      <div class="w-full">
        <h4 class="font-bold">{{ t('over3.title') }}</h4>
        <div class="grid grid-cols-2 lg:grid-cols-6 gap-4 mt-4">
          <div class="bg-gray-light p-4 rounded-lg text-gray-dark text-lg text-center">
            250€
          </div>
          <div class="text-[1rem] leading-tight">
            {{ t('over3.250') }}
          </div>
          <div class="bg-gray-light p-4 rounded-lg text-gray-dark text-lg text-center">
            400€
          </div>
          <div class="text-[1rem] leading-tight">
            {{ t('over3.400') }}
          </div>
          <div class="bg-gray-light p-4 rounded-lg text-gray-dark text-lg text-center">
            600€
          </div>
          <div class="text-[1rem] leading-tight">
            {{ t('over3.600') }}
          </div>
        </div>
      </div>
    </div>
    <div class="text-gray-dark text-base">
      {{ t('exceptions') }}
    </div>
  </div>
</template>

<i18n lang="json">
  {
    "val": {
      "over2": {
        "tag": "+2 horas",
        "title": "Derecho a Asistencia:",
        "text": "🍔 Comida, 🧃bebidas, 🏨 alojamiento y 💺transporte"
      },
      "over3": {
        "tag": "+3 horas",
        "title": "Derecho a Compensación Económica 💶",
        "250": "Vuelos de hasta 1.500km",
        "400": "Vuelos dentro de la UE de +1.500km y otros de 1.500-3.500km",
        "600": "Vuelos de más de 3.500km"
      },
      "exceptions": "Excepciones: No se aplica si el retraso es por circunstancias extraordinarias (mal clima, riesgos de seguridad, etc.)"
    }
  }
</i18n>
