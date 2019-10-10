Array.prototype.uniq = function () {
  const uniqArr = [];
  this.forEach( function (el) {
    if (uniqArr.includes(el) === false) {
      uniqArr.push(el);
    }
  } );
  return uniqArr;
};

Array.prototype.twoSum = function () {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] + this[i + 1] === 0) {
      arr.push([i, i + 1]);
    }
  }
  return arr;
};

// [1, 2, -2, 1, 3].twoSum

Array.prototype.transpose = function() {
  const trans = [];
  for (let i = 0; i < this.length; i++) {
    const subTrans = [this[i]];
    for (let j = 0; j < this.length; j ++) {
      subTrans.push(this[j][i]);
    }
    trans.push(subTrans);
  }
  return trans;
};

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose() // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]