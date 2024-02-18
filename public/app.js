console.log('Hello from Aap.ts');
import { people } from './data/persons.js';
console.table(people);
const tikVyrai = (arr) => {
    return arr.filter((pObj) => pObj.sex === 'male');
};
const tikMen = tikVyrai(people);
console.table(tikMen);
const tikMoterys = (arr) => {
    return arr.filter((pObj) => pObj.sex === 'female');
};
const tikWomen = tikMoterys(people);
console.table(tikWomen);
const tikBobosJaunos = (arr) => {
    return arr.filter((pObj) => pObj.sex === 'female' && pObj.age < 35);
};
const tikJaunos = tikBobosJaunos(people);
console.table(tikJaunos);
const tikJaunesiVisi = (arr) => {
    return arr
        .filter((pObj) => pObj.age < 35)
        .map((pObj) => ({
        name: pObj.name,
        surname: pObj.surname,
    }));
};
const tikVisiJauni = tikJaunesiVisi(people);
console.table(tikVisiJauni);
function printNames(arr) {
    const namesArr = arr.map((pObj) => pObj.name);
}
printNames(people);
function sortByIncome(arr) {
    const sorted = arr.sort((a, b) => a.income - b.income);
    return sorted;
}
const rikiutas = sortByIncome(people);
console.table(rikiutas);
// parasyti funkcija kuri isrikiuos masyva pagal income ir grazins ji
// argumentu paduoti stulpeli kuris gali buti tik age arba income
function sortByNumberValue(arr, sortBy) {
    const sorted = arr.sort((a, b) => a[sortBy] - b[sortBy]);
    return sorted;
}
const rikiutasPagal = sortByNumberValue(people, 'age');
console.table(rikiutasPagal);
//# sourceMappingURL=app.js.map