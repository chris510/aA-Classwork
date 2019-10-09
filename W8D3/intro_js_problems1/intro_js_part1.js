function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}

// mysteryScoping1(); // we call x within the block after creating a variable and then calling the console.log outside the scope of the function.
// mysteryScoping2(); // syntax error as we the const variables will exist throughout the whole block and doesn't look into scope.
// mysteryScoping3(); // works 'in block, out block' because we return the variable through different scopes.
// mysteryScoping4(); // 'in block, out of block' returns the variable within the inner scope and then calls the variable again o the outer scope.
// mysteryScoping5(); // we can return the variable on the inner scope but we are not allowed to redefine the outer scope 'let x =...' because theyre not objects...?

// madLib
// Write a function that takes three strings - a verb, an adjective, and a noun - uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN".Use ES6 template literals.

// For example,

function madLib(verb, adj, noun) {
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`;
}

// console.log(madLib('make', 'best', 'guac')) // "We shall MAKE the BEST GUAC."

// isSubstring
// Input

// 1) A String, called searchString.
// 2) A String, called subString.
//   Output: A Boolean.true if the subString is a part of the searchString.

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

// console.log(isSubstring("time to program", "time")) // true
// console.log(isSubstring("Jump for joy", "joys")) //false

// fizzBuzz
// 3 and 5 are magic numbers.

// Define a function fizzBuzz(array) that takes an array and returns a new array of every number in the array that is divisible by either 3 or 5, but not both.

function fizzBuzz(array) {
  const arr = [];

  array.forEach(el => {
    if ((el % 3 === 0) ^ (el % 5 === 0)) {
      fizzBuzzArr.push(el);
    }
  });
  return arr;
}

// isPrime
// Define a function isPrime(number) that returns true if number is prime.Otherwise, false.Assume number is a positive integer.

function isPrime(n) {
  if (n < 2) { 
    return false;
  } 
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true
}

// console.log(isPrime(2)) // true
// console.log(isPrime(10)) // false
// console.log(isPrime(15485863)) // true
// console.log(isPrime(3548563)) // false

// sumOfNPrimes
// Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the first n prime numbers.Hint: use isPrime as a helper method.

function sumOfNPrimes(n) {
  let sum = 0
  let count = 0
  let i = 2

  while (count < n) {
    if (isPrime(i)) {
      sum += i; count++;
    }
  i++;
  }
  return sum;
}

// console.log(sumOfNPrimes(0)) // 0
// console.log(sumOfNPrimes(1)) // 2
// console.log(sumOfNPrimes(4)) // 17





