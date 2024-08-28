export function getFormatAge(age: number | null) {
    if (!age) return '';

    if (age % 10 === 1 && age !== 11) {
        return age + " год";
    } else if (age % 10 >= 2 && age % 10 <= 4 && age !== 12 && age !== 13 && age !== 14) {
        return age + " года";
    } else {
        return age + " лет";
    }
}