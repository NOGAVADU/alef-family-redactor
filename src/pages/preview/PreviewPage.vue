<script setup lang="ts">
import {usePersonData} from "../../stores";
import {storeToRefs} from "pinia";

const personData = usePersonData()
const {person, children} = storeToRefs(personData)
</script>

<template>
  <div class="person__info">
    <div class="text-big title">Персональные данные</div>
    <div
        class="text-big-bold"
    >
      {{ person.name }}, {{ person.age }} лет
    </div>
  </div>

  <div>
    <div class="text-big title">Дети</div>
    <div class="children_container">
    <span
        v-for="child in children"
        class="text-big-bold child__info"
    >
      {{ child.name }}, {{ child.age }} лет
    </span>
    </div>
  </div>
</template>

<style scoped>
.person__info {
  margin-bottom: 4rem;
}

.title {
  margin-bottom: 1rem;
}

.children_container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.child__info {
  padding: 1rem;
  margin-bottom: 1rem;
  background: #F1F1F1;
}
</style>