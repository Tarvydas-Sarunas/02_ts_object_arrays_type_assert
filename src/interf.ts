// types

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

type Address = {
  street: string;
  houseNr: number;
  town: string;
};

// prideti litus typus ir dar papildomai viena nauja typa
type UserWithAddress = User &
  Address & {
    posteCode: number;
  };

const user1: UserWithAddress = {
  id: 1,
  name: 'Jane',
  isAdmin: false,
  street: 'dariaus',
  houseNr: 5,
  town: 'Paris',
  posteCode: 55555,
};

// interface

interface UserInterface {
  id: number;
  name: string;
  isAdmin: boolean;
}

interface AddressInterface {
  street: string;
  houseNr: number;
  town: string;
}

// prideti viena interface

// grubiai jei noreciau tei net nereiktu daryti extends o tik is naujo reopeninti UserInterface ir prideti tas reiksmes
// ir nebereiktu kurti Abu liktu tik UserInterface ir jau su adresu su viskuom
interface Abu extends UserInterface {
  street: string;
  houseNr: number;
  town: string;
}

// i ta interface ideti dar viena reopening interface su typu toks neveikia
interface Abu {
  posteCode: number;
}

const user5: Abu = {
  id: 1,
  name: 'Jane',
  isAdmin: false,
  street: 'dariaus',
  houseNr: 5,
  town: 'Paris',
  posteCode: 55555,
};
