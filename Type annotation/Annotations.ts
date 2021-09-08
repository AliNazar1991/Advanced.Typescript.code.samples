// type inference is basically typescript guessing what type a variable/function/object is

// variables
const numberOrBoolean: number | boolean = 5;

// functions
/**
 *
 * Function declaration with type annotation
 * everything at the left hand side of the equal sign is us telling typescript what
 * the type is for the different function parameter, and the return type.
 * At the right hand side of the equal sign, we have the actual function implementation.
 *
 * @param i
 */
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// type annotation for the function return type will be added right after the
// function parameter list.
const add = (a: number, b: number): number => {
  return a + b;
};

