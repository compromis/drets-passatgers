<script setup>
const config = useRuntimeConfig()
const { t } = useI18n()

const incidentOptions = [
  { value: 'LostLuggage', text: t('form.incidents.0') },
  { value: 'Delayed', text: t('form.incidents.0') },
  { value: 'DeniedBoarding', text: t('form.incidents.0') },
]

const form = reactive({
  incident: '',
  name: '',
  email: '',
  airline: '',
  flight: '',
  description: '',
  privacy: false
})

const submitting = ref(false)
const submitted = ref(false)
const errors = ref(null)

async function submit () {
  submitting.value = true

  try {
    await $fetch(config.public.apiBase + 'submit', {
      headers: {
          'Content-Type': 'multipart/form-data',
      },
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
  <LegosCard>
    <h2>{{ $t('form.heading') }}</h2>
    <form v-if="!submitted" @submit.prevent="submit" class="grid grid-cols-2">
      <InputsSelect
        :label="$t('form.fields.incident')"
        :options="incidentOptions"
        v-model="form.incident"
        required
      />
      <InputsText
        :label="$t('form.fields.name')"
        v-model="form.name"
        required
      />
      <InputsText
        type="email"
        :label="$t('form.fields.email')"
        v-model="form.email"
        required
      />
      <InputsText
        type="email"
        :label="$t('form.fields.email')"
        v-model="form.email"
        required
      />
      <InputsText
        :label="$t('form.fields.airline')"
        v-model="form.airline"
      />
      <InputsText
        :label="$t('form.fields.flight')"
        v-model="form.flight"
      />
      <InputsTextarea
        :label="$t('form.fields.description')"
        v-model="form.description"
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
</template>

<style lang="scss" scoped>

</style>