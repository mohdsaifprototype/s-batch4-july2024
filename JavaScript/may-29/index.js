/* 
  Topic: JavaScript Variables and Datatypes part-2 (Datatypes)
*/

/*
1. Number: is basically is a numeric value.
However there are some special values as well such as
infinity, -infinity, NaN
*/
// let age = 23;
// console.log("Age is:", age);

// let output;
// output = isNaN(age);
/* 
  isNaN return a boolean value.
  true means not a number
  false means a number
*/
// console.log("Output:", output);

// output = -(2 / 0);
// output = 2 / 0;
// console.log("Output:", output);

/* 
2. BigInt: is a bigger number as compared to a normal no.
*/

// let num = 9007199254740991n;
// console.log("The value of num is:", num);

// num = num + 9007199254740991n;
// console.log("The value of num is:", num);

/* 
3. String: is a collection of more than one character.
*/

// let str = "Greetings";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;

// console.log("String:", str);
// console.log("String:", str2);
// console.log("String:", phrase);

/* 
4. Boolean: is a logical value.
*/

// let result = (2 != 5);
// console.log("Result:", result);

/* 
5. null: is a null value.
*/

// let user = null;
// console.log("User:", user);

/* 
6. undefined: is an undefined value.
*/
// let user;
// console.log("User:", user);

/* 
7. 8. Object and Symbols they are non-primitive datatypes.
*/

console.log("Typeof null:", typeof null);