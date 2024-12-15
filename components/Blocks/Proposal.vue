<script setup lang="ts">
const { t, tm, rt } = useI18n({
  useScope: 'local'
})
</script>

<template>
  <section id="proposal" class="proposal bg-blue pt-8">
    <div class="container p-site text-white mb-8">
      <h2 class="font-extrabold text-xl leading-none mb-4 text-balance">{{ t('title') }}</h2>
      <p class="text-md">{{ t('text') }}</p>
    </div>
    <div class="container container-xl p-site grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <LegosHoverable
        v-for="(proposal, i) in tm('proposals')"
        :key="i"
        :id="i"
        class="flex"
        :icon="rt(proposal.icon)"
      >
        <LegosCard
          :id="`proposal${i}`"
          class="flex flex-col"
          animate
          :delay="i * 0.1"
          trigger="#proposal"
          start="top center"
        >
          <h3 class="font-extrabold text-lg mb-4 text-balance leading-none pr-12">{{ rt(proposal.title) }}</h3>
          <p class="text-base mt-auto">{{ rt(proposal.text) }}</p>
        </LegosCard>
      </LegosHoverable>
    </div>
  </section>
</template>

<i18n lang="json">
  {
    "val": {
      "title": "Porque tus derechos no son negociables. ¡Es hora de exigir más!",
      "text": "Los derechos actuales no son suficientes y nosotros queremos ir a por más. Aquí están las 10 acciones que vamos a exigir en Europa para ampliar tus derechos como pasajero:",
      "proposals": [
        {
          "title": "Reembolsos rápidos y automáticos",
          "text": "Cuando tu vuelo se cancela o se retrasa, no deberías luchar por tu dinero. Queremos que los reembolsos sean automáticos y sin papeleos innecesarios.",
          "icon": "receipt_1f9fe.png"
        },
        {
          "title": "Información clara y en tiempo real",
          "text": " Si hay retrasos o problemas con tu vuelo, te mereces saberlo en menos de 30 minutos. Queremos obligar a las aerolíneas a informarte por mensaje o correo de cualquier cambio.",
          "icon": "information_2139-fe0f.png"
        },
        {
          "title": "Que los intermediarios se hagan responsables",
          "text": "Las plataformas de reservas y agencias online no pueden lavarse las manos. Si cobran por tu vuelo, también deben devolverte el dinero o compensarte cuando algo falla.",
          "icon": "world-map_1f5fa-fe0f.png"
        },
        {
          "title": "Multas ejemplares para los abusos",
          "text": "No más excusas. Las aerolíneas que se salten las normas deben pagar multas proporcionales a sus ganancias para que no les salga barato ignorar tus derechos.",
          "icon": "judge_1f9d1-200d-2696-fe0f.png"
        },
        {
          "title": "Protección contra insolvencias",
          "text": "Si una aerolínea quiebra, no debería dejarte tirado. Propondremos un fondo obligatorio que garantice tu reembolso y repatriación en estos casos.",
          "icon": "chart-decreasing_1f4c9.png"
        },
        {
          "title": "Accesibilidad para todos",
          "text": "Viajar debe ser un derecho para todos. Exigimos mejoras reales para pasajeros con movilidad reducida: asistencia completa en aeropuertos y aviones sin excusas.",
          "icon": "wheelchair-symbol_267f.png"
        },
        {
          "title": "Un sistema de compensación universal",
          "text": "Queremos un sistema armonizado que haga las compensaciones más fáciles y rápidas. Si tu vuelo tiene problemas, las aerolíneas deberán procesar tu compensación en cuestión de días, no semanas o meses.",
          "icon": "euro-banknote_1f4b6.png"
        },
        {
          "title": "Más control y transparencia en la industria",
          "text": "Las agencias nacionales de control deben tener más poder para auditar y sancionar a las aerolíneas e intermediarios que no cumplan. Queremos informes públicos y frecuentes sobre sus prácticas.",
          "icon": "magnifying-glass-tilted-right_1f50e.png"
        },
        {
          "title": "Derecho a cancelar sin excusas",
          "text": "En situaciones de crisis, todos los pasajeros deberían tener el derecho a cancelar sus billetes sin penalizaciones. Basta de aprovecharse de la incertidumbre para no devolverte lo que es tuyo.",
          "icon": "cross-mark_274c.png"
        },
        {
          "title": "Derechos en todos los transportes, no solo en vuelos",
          "text": "Tu derecho como pasajero debe ser el mismo en vuelos, trenes, autobuses y cualquier otro transporte. Vamos a luchar por normas que te protejan en todos los medios de transporte.",
          "icon": "high-speed-train_1f684.png"
        }
      ]
    },
    "cas": {
      "title": "Porque tus derechos no son negociables. ¡Es hora de exigir más!",
      "text": "Los derechos actuales no son suficientes y nosotros queremos ir a por más. Aquí están las 10 acciones que vamos a exigir en Europa para ampliar tus derechos como pasajero:",
      "proposals": [
        {
          "title": "Reembolsos rápidos y automáticos",
          "text": "Cuando tu vuelo se cancela o se retrasa, no deberías luchar por tu dinero. Queremos que los reembolsos sean automáticos y sin papeleos innecesarios.",
          "icon": "icon",
          "highlight": true
        },
        {
          "title": "Información clara y en tiempo real",
          "text": " Si hay retrasos o problemas con tu vuelo, te mereces saberlo en menos de 30 minutos. Queremos obligar a las aerolíneas a informarte por mensaje o correo de cualquier cambio.",
          "icon": "icon"
        },
        {
          "title": "Que los intermediarios se hagan responsables",
          "text": "Las plataformas de reservas y agencias online no pueden lavarse las manos. Si cobran por tu vuelo, también deben devolverte el dinero o compensarte cuando algo falla.",
          "icon": ""
        },
        {
          "title": "Multas ejemplares para los abusos",
          "text": "No más excusas. Las aerolíneas que se salten las normas deben pagar multas proporcionales a sus ganancias para que no les salga barato ignorar tus derechos.",
          "icon": ""
        },
        {
          "title": "Protección contra insolvencias",
          "text": "Si una aerolínea quiebra, no debería dejarte tirado. Propondremos un fondo obligatorio que garantice tu reembolso y repatriación en estos casos.",
          "icon": ""
        },
        {
          "title": "Accesibilidad para todos",
          "text": "Viajar debe ser un derecho para todos. Exigimos mejoras reales para pasajeros con movilidad reducida: asistencia completa en aeropuertos y aviones sin excusas.",
          "icon": "",
          "highlight": true
        },
        {
          "title": "Un sistema de compensación universal",
          "text": "Queremos un sistema armonizado que haga las compensaciones más fáciles y rápidas. Si tu vuelo tiene problemas, las aerolíneas deberán procesar tu compensación en cuestión de días, no semanas o meses.",
          "icon": ""
        },
        {
          "title": "Más control y transparencia en la industria",
          "text": "Las agencias nacionales de control deben tener más poder para auditar y sancionar a las aerolíneas e intermediarios que no cumplan. Queremos informes públicos y frecuentes sobre sus prácticas.",
          "icon": ""
        },
        {
          "title": "Derecho a cancelar sin excusas",
          "text": "En situaciones de crisis, todos los pasajeros deberían tener el derecho a cancelar sus billetes sin penalizaciones. Basta de aprovecharse de la incertidumbre para no devolverte lo que es tuyo.",
          "icon": ""
        },
        {
          "title": "Derechos en todos los transportes no solo en vuelos",
          "text": "Tu derecho como pasajero debe ser el mismo en vuelos, trenes, autobuses y cualquier otro transporte. Vamos a luchar por normas que te protejan en todos los medios de transporte.",
          "icon": ""
        }
      ]
    },
    "eng": {
      "title": "Porque tus derechos no son negociables. ¡Es hora de exigir más!",
      "text": "Los derechos actuales no son suficientes y nosotros queremos ir a por más. Aquí están las 10 acciones que vamos a exigir en Europa para ampliar tus derechos como pasajero:",
      "proposals": [
        {
          "title": "Reembolsos rápidos y automáticos",
          "text": "Cuando tu vuelo se cancela o se retrasa, no deberías luchar por tu dinero. Queremos que los reembolsos sean automáticos y sin papeleos innecesarios.",
          "icon": "icon"
        },
        {
          "title": "Información clara y en tiempo real",
          "text": " Si hay retrasos o problemas con tu vuelo, te mereces saberlo en menos de 30 minutos. Queremos obligar a las aerolíneas a informarte por mensaje o correo de cualquier cambio.",
          "icon": "icon"
        },
        {
          "title": "Que los intermediarios se hagan responsables",
          "text": "Las plataformas de reservas y agencias online no pueden lavarse las manos. Si cobran por tu vuelo, también deben devolverte el dinero o compensarte cuando algo falla.",
          "icon": ""
        },
        {
          "title": "Multas ejemplares para los abusos",
          "text": "No más excusas. Las aerolíneas que se salten las normas deben pagar multas proporcionales a sus ganancias para que no les salga barato ignorar tus derechos.",
          "icon": ""
        },
        {
          "title": "Protección contra insolvencias",
          "text": "Si una aerolínea quiebra, no debería dejarte tirado. Propondremos un fondo obligatorio que garantice tu reembolso y repatriación en estos casos.",
          "icon": ""
        },
        {
          "title": "Accesibilidad para todos",
          "text": "Viajar debe ser un derecho para todos. Exigimos mejoras reales para pasajeros con movilidad reducida: asistencia completa en aeropuertos y aviones sin excusas.",
          "icon": ""
        },
        {
          "title": "Un sistema de compensación universal",
          "text": "Queremos un sistema armonizado que haga las compensaciones más fáciles y rápidas. Si tu vuelo tiene problemas, las aerolíneas deberán procesar tu compensación en cuestión de días, no semanas o meses.",
          "icon": ""
        },
        {
          "title": "Más control y transparencia en la industria",
          "text": "Las agencias nacionales de control deben tener más poder para auditar y sancionar a las aerolíneas e intermediarios que no cumplan. Queremos informes públicos y frecuentes sobre sus prácticas.",
          "icon": ""
        },
        {
          "title": "Derecho a cancelar sin excusas",
          "text": "En situaciones de crisis, todos los pasajeros deberían tener el derecho a cancelar sus billetes sin penalizaciones. Basta de aprovecharse de la incertidumbre para no devolverte lo que es tuyo.",
          "icon": ""
        },
        {
          "title": "Derechos en todos los transportes no solo en vuelos",
          "text": "Tu derecho como pasajero debe ser el mismo en vuelos, trenes, autobuses y cualquier otro transporte. Vamos a luchar por normas que te protejan en todos los medios de transporte.",
          "icon": ""
        }
      ]
    }
  }

</i18n>
