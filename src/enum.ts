// ENUM

const enum AlignItems {
  start = 'start',
  center = 'center',
  end = 'end',
  strech = 'strech',
}

// type union literal

type AlignType = 'start' | 'center' | 'end' | 'strech';

const stre: AlignType = 'strech';

function alignFlex(prop: string, align: AlignType): void {
  console.log(`Item: ${prop} is aligned ${align}`);
}

alignFlex('h1', AlignItems.end);
alignFlex('h1', stre);
