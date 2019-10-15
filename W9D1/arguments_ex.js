// function sum() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// function sum() {
//   let args = [...arguments];
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(sum(1, 2, 3, 4)) // === 10
// console.log(sum(1, 2, 3, 4, 5)) // === 15

// const x = [(1, 2, 3, 4)]
// console.log(...x)

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// Function.prototype.myBind = function (context) {
//   let that = this;
//   let first = Array.from(arguments).slice(1); // ["meow", "kush"]
//   return function () {
//     let secondHalf = first.concat(Array.from(arguments));
//     return that.apply(context, secondHalf);
//   };
// };

Function.prototype.myBind = function(...theArgs) {
  let that = this;
  let context = theArgs[0];
  let first = theArgs.slice(1);
  return function () {
    // let secondHalf = first.concat(theArgs2);
    let secondHalf = first.concat(Array.from(arguments));
    return that.apply(context, secondHalf);
  };
};

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // const boundFunction = markov.says.myBind(pavlov, "meow")
// // boundFunction("Markov")

// // function Test(x) {
// //   return function(y) {
// //     console.log(x);
// //     console.log(y);
// //   };
// // }
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum(nArgs) {
  nums = [];
  function _curriedSum(num) {
    nums.push(num);
    if (nums.length === nArgs) {
      const numSum = nums => nums.reduce((acc, i) => acc + i, 0);
      return numSum(nums);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56
// console.log(curriedSum(4)(5)(30)(20)(1)); // => 56

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

Function.prototype.curry = function (nArgs) {
  let that = this;
  let cur = [];
  function curried(arg) { 
    cur.push(arg);
    if (cur.length === nArgs) {
      // return that(...cur);
      // return that.apply(null, cur);
      // return that.call(null, ...cur)
      return that.bind()(...cur);
    } else {
      return curried;
    }
  }
  return curried;
};

console.log(sumThree.curry(3)(4)(20)(6)); // == 30