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

function divide(a: number, b: number): number {
  return a / b;
}

// Anonymous functions assigned to variables
const multiply = function (a: number, b: number): number {
  return a * b;
};

// void
const logger = (message: string): void => {
  console.log(message);
};

// never - means we will never reach the end of the function completely - however very rare usage of never.
const throwError = (message: string): never => {
  throw new Error(message);
};

/**
 * object desctructing with function argument that has type annotation.
 * in function parameter list, left hand side uses object destructuring to destruct
 * the values needed, and left hand side has the type annotation for the function args.
 **/
const forecast = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
};

// Objects

const profile = {
  name: "ali",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

/**
 * if we want to add type annotation for a destructed object, it
 * will only be possible if the expected structure is denoted as type annotation
 * for what is being destructured.
 * Ex:
 * the destructed age property below is of type number, however its not
 * enough to only write ": number" as a type annotation after it,
 * we have to specify the exact structure as shown below.
 */
const { age }: { age: number } = profile;

// indeed very nasty syntax
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
