function range(start, end) {
  
  if (start === end) return [start];
  
  // const arr = [];
  // arr.push(start);
  // debugger
  return [start].concat(range((start + 1), end));
  // return arr;
}

// console.log(range(1,8));

function sumRec(arr) {
  if (arr.length === 1) return arr;

  return arr[0] + sumRec(arr.slice(1));
}

console.log(sumRec([1, 2, 3])) // 6
