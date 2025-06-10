/* 
  In JavaScript we have keywords that are reserved for the language.
  These keywords are used to define the structure and behavior of the code.

  e.g.:
  - var
  - let
  - const
  - function
  - if
  - else
  - for
  - while
  - switch
  - case
  - break
  - default
  - return
  - try
  - catch
  - throw
  - class
  - extends

  Every time we finish a statement we need to end it with a semicolon. However, JavaScript has a feature called Automatic Semicolon Insertion (ASI) that allows us to omit semicolons in certain situations. This means that JavaScript will automatically insert semicolons for us when it thinks we need them. However, it's still a good practice to use semicolons to avoid any potential issues with ASI. 
*/

// let name = "Alex",
//   age = 25

// console.log(name,
//   "is a JavaScript developer."
// )

/* This code will throw an error if we remove all the semicolons */
/* let a = 5;
let b = 10;
let c = a + b;
let result = c;
[1, 2, 3].forEach((num) => {
  console.log(num);
}); */

/* Variable in JavaScript */
// userName = "Alex";        // or we can use var
// var userName = "Alex";
console.log(userName); // Alex