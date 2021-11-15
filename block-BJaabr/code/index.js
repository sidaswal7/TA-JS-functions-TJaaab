// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n){
  Number(n);
  return n+1;
};
// - Write a Function Expression
let addOne = function (n){
  Number(n);
  return n+1;
};
// - Write an Arrow Function without curly brackets(if possible)
let addOne = (n) => Number(n)+1;
// - Write an Arrow Function with curly brackets
let addOne = (n) => {
  return Number(n)+1;
};
// - Execute the function
addOne(5);
// - Execute the function and store the return value in a variable.
let addOneNum = addOne(5);
// - What is the typeof returnValue
// Typeof return value is "Number"
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subtractOne(n){
  Number(n);
  return n-1;
};
// - Write a Function Expression
let subtractOne = function (n){
  Number(n);
  return n-1;
};
// - Write an Arrow Function without curly brackets(if possible)
let subtractOne = (n) => Number(n)-1;
// - Write an Arrow Function with curly brackets
let subtractOne = (n) =>{
  return Number(n)-1;
}; 
// - Execute the function
subtractOne(5);
// - Execute the function and store the return value in a variable.
let subtractOneNum = subtractOne(6);
// - What is the typeof returnValue
// Typeof return value is "Number"
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(a,b){
  Number(a,b);
  return a+b;
};
// - Write a Function Expression
let sum = function (a,b){
  Number(a,b);
  return a+b;
};
// - Write an Arrow Function without curly brackets(if possible)
let sum = (a,b) => a+b;
// - Write an Arrow Function with curly brackets
let sum = (a,b) => {
  return a+b;
};
// - Execute the function
sum(6,8);
// - Execute the function and store the return value in a variable
let sumNum = sum(7,9);
// - What is the typeof returnValue
// Typeof return value is "Number"
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(n){
  Number(n);
  return n*n;
};
// - Write a Function Expression
let square = function(n){
  Number(n);
  return n*n;
};
// - Write an Arrow Function without curly brackets(if possible)
let square = (n) => n*n;
// - Write an Arrow Function with curly brackets
let square = (n) => {
  Number(n);
  return n*n;
};
// - Execute the function
square(6);
// - Execute the function and store the return value in a variable
let squareNum = square(9);
// - What is the typeof returnValue
// Typeof return value is "Number"
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y){
  if(x>y){
    return true;
  } else{
    return false;
  }
};
// - Write a Function Expression
let isGreater = function (x,y){
  if(x>y){
    return true;
  } else{
    return false;
  }
};
// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x,y) => {
  if(x>y){
    return true;
  } else{
    return false;
  }
};
// - Write an Arrow Function with curly brackets
let isGreater = (x,y) => {
  if(x>y){
    return true;
  } else{
    return false;
  }
};
// - Execute the function
isGreater(6,9);
// - Execute the function and store the return value in a variable
let isGreaterNum = isGreater(6,9);
// - What is the typeof returnValue
// Typeof return value is "boolean"
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddorEven(num){
  Number(num);
  if(num%2 == 0){
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
};
// - Write an anonymous Function Expression
let oddorEven = function (num){
  Number(num);
  if(num%2 == 0){
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
};
// - Write an named Function Expression
let oddorEven = function (num){
  if(num%2 == 0){
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
};
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddorEven = (num) => num%2 == 0 ? `Number is even`:`Number is odd`;
// - Write an Arrow Function with curly brackets
let oddorEven = (num) => {
  if(num%2 == 0){
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
};
// - Execute the function
oddorEven(6);
// - Execute the function and store the return value in a variable
let oddOrEvenNum = oddorEven(9);
// - What is the typeof returnValue
// Typeof return value is "String"