/**
 * The difference between a tuple and an array is the strict order of type of elements passed
 * into an array.
 * If it has a strict order, then it will be regarded as a tuple, otherwise an array.
**/

//Array representation of a Tuple
const ArrayLikeTuple: [string, boolean, number] = ["pepsi", true, 40];

// Tuple representation using drink Type alias
type drink = [string, boolean, number];

const pepsi: drink = ["brown", true, 40];
const sprite: drink = ["clear", true, 40];
