// Array representation of a Tuple
const ArrayLikeTuple: [string,boolean,number] = ["pepsi", true, 40];

// Tuple representation using Type aliases
type drink = [string, boolean, number];

const pepsi: drink = ["brown", true, 40];
const sprite: drink = ["clear", true, 40];