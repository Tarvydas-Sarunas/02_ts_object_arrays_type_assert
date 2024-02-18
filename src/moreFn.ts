// more about function

// bet pati funkcija irgi gali tureti tipa
// aprasome ji su interface

interface MathFunction {
  (num1: number, num2: number): number;
}

const sum: MathFunction = function (x: number, y: number): number {
  const rez = x + y;
  console.log('rez ===', rez);
  return rez;
};

const minus: MathFunction = function (x, y) {
  const rez = x - y;
  console.log('rez ===', rez);
  return rez;
};
