<template>
  <footer class="footer relative z-[5] pb-24 bg-blue">
    <div class="p-site mx-auto min-h-[7rem] flex items-end gap-4">
      <SiteLogo class="footer-logo" />
      <p>
        <strong>Passatgers amb Drets</strong>
        {{ $t('footer.campaign_by') }}
        <strong>Compromís</strong>.
      </p>
      <a href="mailto:euparl@compromis.net">euparl@compromis.net</a>
      <a href="https://compromis.net">{{ $t('global.privacy_policy') }}</a>
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