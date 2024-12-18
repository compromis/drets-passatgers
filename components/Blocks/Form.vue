<script setup>
const config = useRuntimeConfig()
const { t, locale } = useI18n()

const incidentOptions = [
  { value: 'Lost luggage', text: t('form.incidents.0') },
  { value: 'Damaged luggage', text: t('form.incidents.1') },
  { value: 'Excessive baggage charges', text: t('form.incidents.2') },
  { value: 'Accessibility', text: t('form.incidents.3') },
  { value: 'Flight cancellation', text: t('form.incidents.4') },
  { value: 'Flight delay', text: t('form.incidents.5') },
  { value: 'Denied boarding', text: t('form.incidents.6') },
  { value: 'Other', text: t('form.incidents.7') },
]

const form = reactive({
  incident: '',
  name: '',
  email: '',
  airline: '',
  flight: '',
  description: '',
  privacy: false,
  lang: locale.value
})

const submitting = ref(false)
const submitted = ref(false)
const errors = ref(null)

async function submit () {
  submitting.value = true

  try {
    await $fetch(config.public.apiBase + 'submit', {
      method: 'POST',
      body: form
    })
    submitted.value = true
  } catch (e) {
    errors.value = e
  } finally {
    submitting.value = false
  }
}

function reset () {
  submitted.value = false
  form.incident = ''
  form.name = ''
  form.email = ''
  form.airline = ''
  form.flight = ''
  form.description = ''
  form.privacy = false
}
</script>

<template>
  <section id="form" class="form container mx-auto mt-6 md:-mt-24 mb-16 relative z-[20] p-site pb-10 text-base">
    <LegosCard class="max-w-[800px] ms-auto overflow-clip" edge animate>
      <h2 class="flex px-6 py-2 gap-4 font-bold font-headline uppercase border-b-2 text-lg">
        <img src="../../assets/images/triangle.svg" alt="" />
        {{ $t('form.heading') }}
      </h2>
      <form v-if="!submitted" @submit.prevent="submit" class="grid gap-[2px] grid-cols-2 bg-black">
        <InputsSelect
          name="incident"
          :label="$t('form.fields.incident')"
          :options="incidentOptions"
          v-model="form.incident"
          required
          :errors="errors"
          class="col-span-2"
        />
        <InputsText
          name="name"
          :label="$t('form.fields.name')"
          v-model="form.name"
          required
          :errors="errors"
          class="col-span-2 md:col-span-1"
        />
        <InputsText
          name="email"
          type="email"
          :label="$t('form.fields.email')"
          v-model="form.email"
          required
          :errors="errors"
          class="col-span-2 md:col-span-1"
        />
        <InputsText
          name="airline"
          :label="$t('form.fields.airline')"
          v-model="form.airline"
          required
          :errors="errors"
          class="col-span-2 md:col-span-1"
        />
        <InputsText
          name="flight"
          :label="$t('form.fields.flight')"
          v-model="form.flight"
          required
          :errors="errors"
          class="col-span-2 md:col-span-1"
        />
        <InputsTextarea
          name="description"
          :label="$t('form.fields.description')"
          v-model="form.description"
          :errors="errors"
          class="col-span-2"
        />
        <div class="col-span-2 bg-white flex flex-col md:flex-row p-4 md:items-center gap-4">
          <InputsCheckbox
            v-model="form.privacy"
            required
          >
            <div v-if="$i18n.locale === 'val'">
              Accepte la <a href="https://compromis.net/avis-legal" target="_blank">Política de privacitat</a>
            </div>
            <div v-if="$i18n.locale === 'cas'">
              Acepto la <a href="https://compromis.net/avis-legal" target="_blank">Política de privacidad</a>
            </div>
            <div v-if="$i18n.locale === 'eng'">
              I accept the <a href="https://compromis.net/avis-legal" target="_blank">Privacy Policy</a>
            </div>
          </InputsCheckbox>
          <InputsButton type="submit" :loading="submitting" icon="wpf:paper-plane" class="ms-auto">
            {{ $t('form.submit') }}

            <template #loading>
              {{ $t('form.submitting') }}
            </template>
          </InputsButton>
        </div>
      </form>
      <div v-else class="p-8 text-center">
        <div class="text-3xl py-4">
          <Icon name="line-md:circle-to-confirm-circle-transition" />
        </div>
        <p class="text-lg mb-4">
          {{ $t('form.submitted') }}
        </p>
        <p class="text-base mb-8">
          {{ $t('form.submitted_text') }}
        </p>
        <p class="flex justify-center">
          <InputsButton type="submit" icon="wpf:paper-plane" @click="reset">
            {{ $t('form.new') }}
          </InputsButton>
        </p>
      </div>
    </LegosCard>
  </section>
</template>

<style lang="scss" scoped>

</style>