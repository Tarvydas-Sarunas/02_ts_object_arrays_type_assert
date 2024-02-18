// addName({}, "Brutus", 300) => {Brutus: 300}

function addName(obj: {}, str: string, val: number) {
  // obj[str] = val;
  const newObj = {
    ...obj,
    [str]: 300,
  };
  return obj;
}
addName({}, 'Brutus', 300);
