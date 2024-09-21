/*
    1. Array Destructuring
        Example 1: Basic Array Destructuring
            Example 2: Skipping Elements
                Example 3: Default Values in Array Destructuring

    2. Object Destructuring
        Example 1: Basic Object Destructuring
            Example 2: Assigning to New Variable Names
                Example 3: Default Values in Object Destructuring

    3. Destructuring in Function Parameters
        Example 1: Array Destructuring in Function Parameters
            Example 2: Object Destructuring in Function Parameters

    4. Nested Destructuring
*/

/* ************************************************* */

// Example 1: Basic Array Destructuring
const numbers = [10, 20, 30];
const [first, second, third] = numbers;

console.log(first); // 10
console.log(second); // 20
console.log(third); // 30

// Example 2: Skipping Elements
const numbers2 = [10, 20, 30, 40];
const [first2, , third2] = numbers;

console.log(first2); // 10
console.log(third2); // 30

// Example 3: Default Values in Array Destructuring
const numbers3 = [10, 20];
const [first3, second3, third3 = 30] = numbers;

console.log(first3); // 10
console.log(second3); // 20
console.log(third3); // 30 (default value)

/* ************************************************* */

// Example 1: Basic Object Destructuring
const person = { name: "John", age: 25 };
const { name, age } = person;

console.log(name); // "John"
console.log(age); // 25

// Example 2: Assigning to New Variable Names
const person2 = { name2: "John", age2: 25 };
const { name2: fullName, age2: years } = person2;

console.log(fullName); // "John"
console.log(years); // 25

// Example 3: Default Values in Object Destructuring
const person3 = { name: "John" };
const { name3, age3 = 30 } = person3;

console.log(name3); // "John"
console.log(age3); // 30 (default value)

/* ************************************************* */

// Example 1: Array Destructuring in Function Parameters
function sum([a, b]) {
  return a + b;
}

console.log(sum([10, 20])); // 30

// Example 2: Object Destructuring in Function Parameters
function greet({ name4, age4 }) {
  return `Hello, ${name4}. You are ${age4} years old.`;
}

const person4 = { name4: "John", age4: 25 };
console.log(greet(person4)); // "Hello, John. You are 25 years old."

/* ************************************************* */

// Example: Nested Destructuring
const user = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001",
  },
};

const {
  name5,
  address: { city, zip },
} = user;

console.log(name5); // "John"
console.log(city); // "New York"
console.log(zip); // "10001"
