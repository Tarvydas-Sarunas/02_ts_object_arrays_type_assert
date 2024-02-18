// tuple

type UserArr = [string, number, boolean];

// tuple kai pasakau kokioje vietoi array yra kas daugiau vietomis nieko negaliu pakeisti
const user: [string, number, boolean] = ['James', 25, true];

const user2: UserArr = ['Jane', 30, false];

// user[0] = 5;
user[0] = '5';

// tuple bugas kai mes i ji kazka ipuchiname jis nepyksta
user.push(50);
console.log('user ===', user);

const users: [number, string][] = [
  [1, 'james@mail.com'],
  [2, 'mike@mail.com'],
  [3, 'Jill@mail.com'],
  [4, 'Jill@mail.com'],
];
