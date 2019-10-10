Array.prototype.myEach = function (cb) {
  // const arr = [];
  for (let i = 0; i < this.length; i++) {
    // console.log(this[i]);
    cb(this[i]);
  }
};

// function cb(name) {
//   console.log(name);
// }

// [1,2,3,4].myEach(cb);

Array.prototype.myMap = function(cb) {
  const arr = [];
  this.myEach(function(el) {
    arr.push(cb(el));
  } );
  return arr;
};

// function cb(el) {
//   return (el * 2);
// }

// [1, 2, 3, 4].myMap(cb)

Array.prototype.myReduce = function (cb, initialValue = 0) {
  let sum = initialValue;
  this.myEach(function (el) {
    sum = cb(sum, el);
  });
  return sum;
};

function cb(value, ele) {
  return value + ele;
}

// [1,2,3].myReduce(cb, 1);