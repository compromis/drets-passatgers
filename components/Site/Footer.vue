<template>
  <footer class="footer relative z-[5] bg-gradient-to-b from-blue/0 to-blue pt-24">
    <div class="p-site md:mx-auto min-h-[7rem] flex flex-col md:flex-row md:items-end gap-4 text-white">
      <div class="text-balance">
        <div class="flex gap-4 items-center mb-4">
          <a href="https://compromis.net" aria-label="Compromís" class="logo compromis">
            <SiteLogo class="h-[1.25rem]" />
          </a>
          <a href="https://greens-efa.eu" aria-label="Greens/EFA in the European Parliament" class="logo greensefa">
            <SiteGreensEFA class="h-[1.75rem]"  />
          </a>
          <a href="https://europarl.compromis.net" aria-label="Oficina Vicent Marzà" class="logo marza">
            <SiteVicentMarza class="h-[1.75rem]"  />
          </a>
        </div>
        <p v-if="$i18n.locale === 'val'">
          <strong>PasajerosConDerechos.com</strong> és una campanya de <strong>Verds/ALE</strong> en coordinació amb l'<strong>Oficina Parlamentària de Vicent Marzà al Parlamento Europeo</strong>
        </p>
        <p v-if="$i18n.locale === 'cas'">
          <strong>PasajerosConDerechos.com</strong> es una campaña de <strong>Greens/EFA</strong> en coordinación con la <strong>Oficina Parlamentaria de Vicent Marzà en el Parlamento Europeo</strong>
        </p>
        <p v-if="$i18n.locale === 'eng'">
          <strong>PasajerosConDerechos.com</strong> is a campaign by <strong>Greens/EFA</strong> in coordination with the <strong>Parliamentary Office of Vicent Marzà in the European Parliament</strong>
        </p>
      </div>
      <div class="text-nowrap flex gap-4">
        <a href="mailto:euparl@compromis.net">euparl@compromis.net</a>
        <a href="https://compromis.net">{{ $t('global.privacy_policy') }}</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &-logo {
    height: 1.5rem;
  }

  p {
    margin: 0;
    margin-right: auto;
  }

  a {
    color: var(--white);

    &:hover {
      opacity: .75;
    }
  }
}

@include media('<md') {
  .footer {
    .container {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
}
</style>