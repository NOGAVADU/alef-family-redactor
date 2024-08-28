<script setup lang="ts">
import {usePersonData} from "../../stores";
import {storeToRefs} from "pinia";
import {getFormatAge} from "../../utils";

const personData = usePersonData()
const {person, children} = storeToRefs(personData)
</script>

<template>
  <div class="person__info">
    <h2 class="text-big title">Персональные данные</h2>
    <div class="text-big-bold">
      {{ person.name }}, {{ getFormatAge(person.age) }}
    </div>
  </div>

  <div v-if="children.length > 0">
    <h2 class="text-big title">Дети</h2>
    <ul
        class="children_list"
    >
      <li
          v-for="child in children"
          class="text-big-bold child__info"
      >
        {{ child.name }}, {{ getFormatAge(child.age) }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 1rem;
}

.person__info {
  margin-bottom: 4rem;
}

.children_list {
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