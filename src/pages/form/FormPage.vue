<script setup lang="ts">
import {UiButton, UiInput} from "../../components";

</script>

<template>
  <form class="form">
    <fieldset class="fieldset__person">
      <legend class="text-big title">
        Персональные данные
      </legend>
      <UiInput
          type="text"
          label="Имя"
          placeholder="Ваше имя"
      />
      <UiInput
          type="number"
          label="Возраст"
          placeholder="Ваш возраст"
      />
    </fieldset>

    <fieldset class="fieldset__children">
      <legend class="text-big title title__children">
        <span>Дети (макс. 5)</span>
        <UiButton outlined>
          <template #icon>
            <img src="../../assets/icons/plus.svg" alt="плюс"/>
          </template>
          Добавить ребенка
        </UiButton>
      </legend>

      <fieldset class="fieldset__child">
        <UiInput label="Имя" placeholder="Имя ребенка" type="text"/>
        <UiInput label="Возраст" placeholder="Возраст ребенка" type="number"/>
        <button class="button__delete">Удалить</button>
      </fieldset>
      <fieldset class="fieldset__child">
        <UiInput label="Имя" placeholder="Имя ребенка" type="text"/>
        <UiInput label="Возраст" placeholder="Возраст ребенка" type="number"/>
        <button class="button__delete">Удалить</button>
      </fieldset>
    </fieldset>
    <UiButton
        type="submit"
        style="align-self: flex-start"
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

.button__delete {
  background: transparent;
  color: var(--color-blue);
}
</style>