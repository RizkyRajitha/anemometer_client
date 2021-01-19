export function arrayAdd(array, nextVal) {
  let tempArr = [];

  for (let index = 0; index < array.length - 1; index++) {
    const element = array[index + 1];
    tempArr.push(element);
  }

  tempArr.push(nextVal);

  console.log(tempArr);
  return tempArr;
}

// let a = arrayAdd([1, 5, 6, 9], 15);
// let b = arrayAdd(a, 16);
// let c = arrayAdd(b, 17);
// // arrayAdd([1, 5, 6, 9], 18);
