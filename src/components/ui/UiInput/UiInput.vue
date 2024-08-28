<script setup lang="ts">
defineProps<{
  label: string;
  placeholder: string;
  type: 'text' | 'number';
}>()

</script>

<template>
  <label class="text-thin label">
    {{ label }}
    <input
        :type="type"
        required
        :placeholder="placeholder"
        class="input"
    />
  </label>
</template>

<style scoped>
.label {
  flex-grow: 1;
  padding: 0.5rem 1rem;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
}

.input {
  font-size: 14px;
  margin-top: 0.5rem;
}
</style>