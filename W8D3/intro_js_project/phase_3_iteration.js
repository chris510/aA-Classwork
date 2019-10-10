Array.prototype.bubblesort = function () {
  let sorted = false;

  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return this;
};

// console.log([4,3,2,1].bubblesort())

String.prototype.substrings = function () {
  const subs = [];
  
  for (let i = 0; i <= this.length - 1; i++) {
    for (let j = 0; j <= this.length - 1; j++) {
      if (this.slice(i, j + 1) != "") {
        subs.push(this.slice(i,j + 1));
      }
    }
  }
  return subs;
};

// "abc".substrings();

