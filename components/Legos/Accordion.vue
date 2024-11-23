<script lang="ts" setup>
defineProps({
  id: { type: String, required: true },
  items: { type: Array, required: true }
})

const openItem = ref(null)

function setItem(id) {
  openItem.value = (openItem.value === id) ? null : id
}
</script>

<template>
  <div :id="id" class="accordion">
    <div v-for="(item, i) in items" :key="i" class="accordion-item">
      <h4 class="accordion-title">
        <button
          type="button"
          :aria-expanded="openItem === i ? 'true' : 'false'"
          class="accordion-trigger"
          :aria-controls="`${id}-item-${i}`"
          :id="`${id}-button-${i}`"
          @click="setItem(i)"
        >
          <Icon v-if="item.icon" :icon="item.icon" class="accordion-icon" />
          <span class="accordion-title-text">{{ item.title }}</span>
          <span class="accordion-icon">
            <Icon name="lucide:chevron-down" />
          </span>
        </button>
      </h4>
      <Transition name="curtain">
        <Component
          v-if="openItem === i"
          :id="`${id}-item-${i}`"
          role="region"
          :aria-labelledby="`${id}-button-${i}`"
          class="accordion-panel"
          :is="item.component"
        />
      </Transition>
    </div>
  </div>
</template>

<style>

</style>