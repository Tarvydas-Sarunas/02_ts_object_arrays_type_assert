console.log('Hello from Aap.ts');

import { PeapleArr, people } from './data/persons.js';

console.table(people);

const tikVyrai = (arr: PeapleArr[]) => {
  return arr.filter((pObj: PeapleArr) => pObj.sex === 'male');
};
const tikMen = tikVyrai(people);
console.table(tikMen);

const tikMoterys = (arr: PeapleArr[]) => {
  return arr.filter((pObj: PeapleArr) => pObj.sex === 'female');
};
const tikWomen = tikMoterys(people);
console.table(tikWomen);

const tikBobosJaunos = (arr: PeapleArr[]) => {
  return arr.filter(
    (pObj: PeapleArr) => pObj.sex === 'female' && pObj.age < 35
  );
};
const tikJaunos = tikBobosJaunos(people);
console.table(tikJaunos);

const tikJaunesiVisi = (arr: PeapleArr[]) => {
  return arr
    .filter((pObj: PeapleArr) => pObj.age < 35)
    .map((pObj) => ({
      name: pObj.name,
      surname: pObj.surname,
    }));
};
const tikVisiJauni = tikJaunesiVisi(people);
console.table(tikVisiJauni);

function printNames(arr: PeapleArr[]): void {
  const namesArr: string[] = arr.map((pObj) => pObj.name);
}
printNames(people);

function sortByIncome(arr: PeapleArr[]): PeapleArr[] {
  const sorted: PeapleArr[] = arr.sort((a, b) => a.income - b.income);
  return sorted;
}
const rikiutas = sortByIncome(people);
console.table(rikiutas);

// parasyti funkcija kuri isrikiuos masyva pagal income ir grazins ji
// argumentu paduoti stulpeli kuris gali buti tik age arba income

const enum NumberCol {
  age = 'age',
  income = 'income',
}

function sortByNumberValue(
  arr: PeapleArr[],
  sortBy: 'age' | 'income'
): PeapleArr[] {
  const sorted: PeapleArr[] = arr.sort((a, b) => a[sortBy] - b[sortBy]);
  return sorted;
}
const rikiutasPagal = sortByNumberValue(people, 'age');
console.table(rikiutasPagal);
const rikiutasPagal2 = sortByNumberValue(people, NumberCol.age);
console.table(rikiutasPagal);

const enum StringCol {
  name = 'name',
  surname = 'surname',
  sex = 'sex',
}

function sortByStringValue(arr: PeapleArr[], sortBy: StringCol): PeapleArr[] {
  const sorted: PeapleArr[] = arr.sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );
  return sorted;
}
const rikiutasPagaStringa = sortByStringValue(people, StringCol.name);
console.table(rikiutasPagaStringa);
