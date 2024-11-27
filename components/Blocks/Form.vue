<script setup>
const config = useRuntimeConfig()
const { t, locale } = useI18n()

const incidentOptions = [
  { value: 'LostLuggage', text: t('form.incidents.0') },
  { value: 'Delayed', text: t('form.incidents.1') },
  { value: 'DeniedBoarding', text: t('form.incidents.2') },
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
</script>

<template>
  <div class="form container mx-auto -mt-28 mb-16 relative z-[20] p-site pb-10">
    <LegosCard class="max-w-[800px] ms-auto">
      <h2>{{ $t('form.heading') }}</h2>
      <form v-if="!submitted" @submit.prevent="submit" class="grid grid-cols-2">
        <InputsSelect
          name="incident"
          :label="$t('form.fields.incident')"
          :options="incidentOptions"
          v-model="form.incident"
          required
          :errors="errors"
        />
        <InputsText
          name="name"
          :label="$t('form.fields.name')"
          v-model="form.name"
          required
          :errors="errors"
        />
        <InputsText
          name="email"
          type="email"
          :label="$t('form.fields.email')"
          v-model="form.email"
          required
          :errors="errors"
        />
        <InputsText
          name="airline"
          :label="$t('form.fields.airline')"
          v-model="form.airline"
          required
          :errors="errors"
        />
        <InputsText
          name="flight"
          :label="$t('form.fields.flight')"
          v-model="form.flight"
          required
          :errors="errors"
        />
        <InputsTextarea
          name="description"
          :label="$t('form.fields.description')"
          v-model="form.description"
          :errors="errors"
        />
        <div>
          <InputsCheckbox
            v-model="form.privacy"
            required
          >
            {{ $t('form.privacy') }}
          </InputsCheckbox>
          <InputsButton type="submit" :disable="submitting">
            {{ submitting ? $t('form.submitting') : $t('form.submit') }}
          </InputsButton>
        </div>
      </form>
      <div v-else>
        Submitted
      </div>
    </LegosCard>
  </div>
</template>

<style lang="scss" scoped>

</style>