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
      "title": "Perquè els teus drets no són negociables. És hora d'exigir més!",
      "text": "Els drets actuals no són suficients i volem anar més enllà. Aquestes són les 10 accions que exigirem a Europa per ampliar els teus drets com a passatger:",
      "proposals": [
        {
          "title": "Reembossaments ràpids i automàtics",
          "text": "Quan el teu vol és cancel·lat o retardat, no hauries de lluitar pels teus diners. Volem que els reembossaments siguen automàtics i sense paperassa innecessària.",
          "icon": "receipt_1f9fe.png"
        },
        {
          "title": "Informació clara i en temps real",
          "text": "Si hi ha retards o problemes amb el teu vol, et mereixes saber-ho en menys de 30 minuts. Volem obligar les aerolínies a informar-te per missatge o correu de qualsevol canvi.",
          "icon": "information_2139-fe0f.png"
        },
        {
          "title": "Que els intermediaris es facen responsables",
          "text": "Les plataformes de reserves i agències online no poden llavar-se les mans. Si cobren pel teu vol, també han de reembossar-te els diners o compensar-te quan alguna cosa falle.",
          "icon": "world-map_1f5fa-fe0f.png"
        },
        {
          "title": "Multes exemplars per abusos",
          "text": "No més excuses. Les aerolínies que incompleixen les normes han de pagar multes proporcionals als seus beneficis per evitar que els resulte econòmicament barat ignorar els teus drets.",
          "icon": "judge_1f9d1-200d-2696-fe0f.png"
        },
        {
          "title": "Protecció contra insolvències",
          "text": "Si una aerolínia entra en fallida, no hauria de deixar-te tirat. Proposarem un fons obligatori que garantisca el teu reembossament i repatriació en aquests casos.",
          "icon": "chart-decreasing_1f4c9.png"
        },
        {
          "title": "Accessibilitat per a tothom",
          "text": "Viatjar hauria de ser un dret per a tots. Exigim millores reals per als passatgers amb mobilitat reduïda: assistència completa en aeroports i avions sense excuses.",
          "icon": "wheelchair-symbol_267f.png"
        },
        {
          "title": "Un sistema de compensació universal",
          "text": "Volem un sistema harmonitzat que faça que les compensacions siguen més fàcils i ràpides. Si el teu vol té problemes, les aerolínies han de processar la teua compensació en pocs dies, no en setmanes o mesos.",
          "icon": "euro-banknote_1f4b6.png"
        },
        {
          "title": "Més control i transparència en la indústria",
          "text": "Les agències estatals de control han de tenir més poder per auditar i sancionar les aerolínies i intermediaris que no complisquen. Volem informes públics i freqüents sobre les seues pràctiques.",
          "icon": "magnifying-glass-tilted-right_1f50e.png"
        },
        {
          "title": "Dret a cancel·lar sense excuses",
          "text": "En situacions de crisi, tots els passatgers haurien de tindre el dret a cancel·lar els seus bitllets sense penalitzacions. Prou d'aprofitar-se de la incertesa per no tornar-te el que és teu.",
          "icon": "cross-mark_274c.png"
        },
        {
          "title": "Drets en tots els transports, no només en vols",
          "text": "Els teus drets com a passatger han de ser els mateixos en vols, trens, autobusos i qualsevol altre mitjà de transport. Lluitarem per normes que et protegisquen en tots els transports.",
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
          "title": "Derechos en todos los transportes no solo en vuelos",
          "text": "Tu derecho como pasajero debe ser el mismo en vuelos, trenes, autobuses y cualquier otro transporte. Vamos a luchar por normas que te protejan en todos los medios de transporte.",
          "icon": "high-speed-train_1f684.png"
        }
      ]
    },
    "eng": {
      "title": "Because your rights are non-negotiable. It’s time to demand more!",
      "text": "Current rights are not enough, and we want to push for more. Here are the 10 actions we will demand in Europe to expand your rights as a passenger:",
      "proposals": [
        {
          "title": "Quick and automatic refunds",
          "text": "When your flight is cancelled or delayed, you shouldn’t have to fight for your money. We want refunds to be automatic and without unnecessary paperwork.",
          "icon": "receipt_1f9fe.png"
        },
        {
          "title": "Clear and real-time information",
          "text": "If there are delays or problems with your flight, you deserve to know within 30 minutes. We want airlines to be required to inform you by message or email of any changes.",
          "icon": "information_2139-fe0f.png"
        },
        {
          "title": "Hold intermediaries accountable",
          "text": "Booking platforms and online agencies cannot wash their hands of responsibility. If they charge you for the flight, they must also refund you or compensate you when something goes wrong.",
          "icon": "world-map_1f5fa-fe0f.png"
        },
        {
          "title": "Exemplary fines for abuse",
          "text": "No more excuses. Airlines that break the rules should face fines proportional to their earnings, so it’s not cheaper for them to ignore your rights.",
          "icon": "judge_1f9d1-200d-2696-fe0f.png"
        },
        {
          "title": "Protection against insolvencies",
          "text": "If an airline goes bankrupt, they shouldn’t leave you stranded. We will propose a mandatory fund to guarantee your refund and repatriation in such cases.",
          "icon": "chart-decreasing_1f4c9.png"
        },
        {
          "title": "Accessibility for all",
          "text": "Travel should be a right for everyone. We demand real improvements for passengers with reduced mobility: full assistance in airports and planes without excuses.",
          "icon": "wheelchair-symbol_267f.png"
        },
        {
          "title": "A universal compensation system",
          "text": "We want a harmonised system to make compensation easier and quicker. If your flight has issues, airlines must process your compensation within days, not weeks or months.",
          "icon": "euro-banknote_1f4b6.png"
        },
        {
          "title": "More control and transparency in the industry",
          "text": "National regulatory agencies must have more power to audit and penalise airlines and intermediaries that don’t comply. We want public and frequent reports on their practices.",
          "icon": "magnifying-glass-tilted-right_1f50e.png"
        },
        {
          "title": "Right to cancel without excuses",
          "text": "In times of crisis, all passengers should have the right to cancel their tickets without penalties. No more taking advantage of uncertainty to withhold what’s rightfully yours.",
          "icon": "cross-mark_274c.png"
        },
        {
          "title": "Rights across all transport, not just flights",
          "text": "Your rights as a passenger should be the same on flights, trains, buses, and any other mode of transport. We will fight for rules that protect you across all transportation.",
          "icon": "high-speed-train_1f684.png"
        }
      ]
    }
  }

</i18n>
