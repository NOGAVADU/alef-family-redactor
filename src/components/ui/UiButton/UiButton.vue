<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset',
  outlined?: boolean,
}>()
</script>

<template>
  <button
      :type="type ?? 'button'"
      class="button"
      :class="{
        'outlined': outlined,
        'withIcon': this.$slots.icon
      }"
  >
    <slot name="icon"/>
    <slot/>
  </button>
</template>

<style scoped>
.button {
  padding: 1rem 1.5rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #fff;
  background: var(--color-blue);
}

.outlined {
  color: var(--color-blue);
  background: transparent;
  border: 2px solid var(--color-blue);
}

.withIcon {
  padding: 0.5rem 1.5rem;
}
</style>