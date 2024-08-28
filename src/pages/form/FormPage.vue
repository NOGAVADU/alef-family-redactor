<script setup lang="ts">
import {UiButton, UiInput} from "../../components";
import {ref} from "vue";

interface PersonData {
  name: string;
  age: number | null;
}

interface FormState {
  person: PersonData,
  children: PersonData[],
}

const initialFormState: FormState = {
  person: {
    name: "Мосолов Даниил",
    age: 21,
  },
  children: []
}

const initialChildState: PersonData = {
  name: '',
  age: null,
}

const formState = ref<FormState>({...initialFormState})

const handleChildAdd = () => {
  if (formState.value.children.length < 5) {
    formState.value.children.push({...initialChildState})
  }
}

const handleChildRemove = (index: number) => {
  formState.value.children.splice(index, 1)
}

const handleFormSubmit = () => {
  console.log(formState.value)
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
        >
          <template #icon>
            <img src="../../assets/icons/plus.svg" alt="плюс"/>
          </template>
          Добавить ребенка
        </UiButton>
      </legend>

      <div
          v-if="!formState.children.length"
          class="text-thin no-child-msg"
      >
        Здесь пока что пусто
      </div>

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
            class="button__delete"
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
      Сохранить
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

.button__delete {
  background: transparent;
  color: var(--color-blue);
}
</style>