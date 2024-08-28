<script setup lang="ts">
import {UiButton, UiInput} from "../../components";
import {computed, ref} from "vue";
import {PersonData, usePersonData} from "../../stores";
import {storeToRefs} from "pinia";

interface FormState {
  person: PersonData,
  children: PersonData[],
}

const personData = usePersonData()
const {person, children} = storeToRefs(personData)

const initialFormState: FormState = {
  person: {...person.value},
  children: [...children.value],
}

const initialChildState: PersonData = {
  name: '',
  age: null,
}

const formState = ref<FormState>({...initialFormState})

const isFormSaved = ref(false)

const isAddChildBtnDisabled = computed(() => {
  return formState.value.children.length >= 5
})

const handleChildAdd = () => {
  if (formState.value.children.length < 5) {
    formState.value.children.push({...initialChildState})
  }
}

const handleChildRemove = (index: number) => {
  formState.value.children.splice(index, 1)
}

const handleFormSubmit = () => {
  person.value = formState.value.person
  children.value = formState.value.children.filter(child => child.name && child.age)
  isFormSaved.value = true
  setTimeout(() => {
    isFormSaved.value = false
  }, 1000)
}
</script>

<template>
  <form class="form">
    <fieldset class="fieldset__person">
      <legend class="text-big title">
        Персональные данные
      </legend>
      <UiInput
          v-model="formState.person.name"
          type="text"
          label="Имя"
          placeholder="Ваше имя"
      />
      <UiInput
          v-model="formState.person.age"
          type="number"
          label="Возраст"
          placeholder="Ваш возраст"
      />
    </fieldset>

    <fieldset class="fieldset__children">
      <legend class="text-big title title__children">
        <span>Дети (макс. 5)</span>
        <UiButton
            outlined
            @click="handleChildAdd"
            :disabled="isAddChildBtnDisabled"
        >
          <template #icon>
            <img src="../../assets/icons/plus.svg" alt="плюс"/>
          </template>
          Добавить ребенка
        </UiButton>
      </legend>

      <span
          v-if="!formState.children.length"
          class="text-thin no-child-msg"
      >
        Здесь пока что пусто
      </span>

      <fieldset
          v-for="(child, i) in formState.children"
          class="fieldset__child"
      >
        <UiInput
            v-model="child.name"
            label="Имя"
            placeholder="Имя ребенка"
            type="text"
        />
        <UiInput
            v-model="child.age"
            label="Возраст"
            placeholder="Возраст ребенка"
            type="number"
        />
        <button
            class="delete__child_btn"
            @click="handleChildRemove(i)"
        >
          Удалить
        </button>
      </fieldset>

    </fieldset>
    <UiButton
        type="submit"
        style="align-self: flex-start"
        @click.prevent="handleFormSubmit"
    >
      {{ isFormSaved ? 'Сохранено' : 'Сохранить' }}
    </UiButton>
  </form>
</template>


<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.title {
  width: 100%;
  margin-bottom: 1.5rem;
}

.title__children {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fieldset__person {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.fieldset__children {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.fieldset__child {
  display: flex;
  gap: 1rem;
}

.no-child-msg {
  text-align: center;
  padding: 1.5rem 0;
  border-top: 1px solid #F1F1F1;
  border-bottom: 1px solid #F1F1F1;
}

.delete__child_btn {
  background: transparent;
  color: var(--color-blue);
}
</style>