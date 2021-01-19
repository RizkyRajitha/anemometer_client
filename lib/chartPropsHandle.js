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

