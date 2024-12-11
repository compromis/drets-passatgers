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
    <div v-for="(item, i) in items" :key="i" :class="['accordion-item', `color-${item.color}`, 'border-b-2 border-b-black', { open: openItem === i }]">
      <h4 class="accordion-title">
        <button
          type="button"
          :aria-expanded="openItem === i ? 'true' : 'false'"
          class="flex gap-4 p-4 w-full items-center"
          :aria-controls="`${id}-item-${i}`"
          :id="`${id}-button-${i}`"
          @click="setItem(i)"
        >
          <Icon v-if="item.icon" :name="item.icon" class="accordion-icon" />
          <span class="accordion-title-text">
            {{ item.title }}
          </span>
          <span class="accordion-handle ms-auto text-black">
            <Icon name="lucide:chevron-down" />
          </span>
        </button>
      </h4>
      <Transition name="reveal">
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

<style lang="scss" scoped>
.accordion {
  &-title {
    display: flex;
    font-family: var(--font-headline);
    text-transform: uppercase;
    font-size: var(--text-xl);
    justify-content: space-between;
    color: var(--color);
    font-weight: bold;
  }

  &-handle {
    display: flex;
    align-items: center;
    transition: .25s ease;
  }

  [aria-expanded='true'] .accordion-handle {
    transform: scaleY(-1);
    transform-origin: center;
  }

  &-item:not(.open):hover {
    background-color: var(--light-gray);
  }

  &-item.color-orange.open {
    background: linear-gradient(to bottom, #df5e2251, #df5e2200 10rem);
  }

  &-item.color-red.open {
    background: linear-gradient(to bottom, #f2430e5b, #f2430e00 10rem);
  }

  &-item.color-black.open {
    background: linear-gradient(to bottom, #02111b42, #02111b00 10rem);
  }

  &-item.color-brown.open {
    background: linear-gradient(to bottom, #6c41163e, #6C411600 10rem);
  }

  &-item.color-blue.open {
    background: linear-gradient(to bottom, #1968a94d, #1968a900 10rem);
  }
}

.reveal-enter-active,
.reveal-leave-active {
  transition: .5s ease;
  overflow: hidden;
  max-height: 100vh;
}

.reveal-enter-from,
.reveal-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}
</style>