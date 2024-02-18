"use strict";
// tuple
// tuple kai pasakau kokioje vietoi array yra kas daugiau vietomis nieko negaliu pakeisti
const user = ['James', 25, true];
const user2 = ['Jane', 30, false];
// user[0] = 5;
user[0] = '5';
// tuple bugas kai mes i ji kazka ipuchiname jis nepyksta
user.push(50);
console.log('user ===', user);
const users = [
    [1, 'james@mail.com'],
    [2, 'mike@mail.com'],
    [3, 'Jill@mail.com'],
    [4, 'Jill@mail.com'],
];
//# sourceMappingURL=tuple.js.map