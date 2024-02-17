// tuple

type UserArr = [string, number, boolean];

// tuple kai pasakau kokioje vietoi array yra kas daugiau vietomis nieko negaliu pakeisti
const user: [string, number, boolean] = ['James', 25, true];

const user2: UserArr = ['Jane', 30, false];

user[0] = 5;
user[0] = '5';
