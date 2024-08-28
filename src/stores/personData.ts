import {defineStore} from "pinia";
import {ref} from "vue";

export interface PersonData {
    name: string;
    age: number | null;
}


export const usePersonData = defineStore('personData', () => {
    const person = ref<PersonData>({
        name: 'Даниил',
        age: 21,
    })
    const children = ref<PersonData[]>([])


    return {person, children}
})