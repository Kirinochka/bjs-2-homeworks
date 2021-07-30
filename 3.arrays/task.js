function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  if(arr1.length != arr2.length) return false;
  result = arr1.every((val, i) => val == arr2[i])

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter(val => val > 0)
    .filter(val => val % 3 == 0)
    .map(val => val * 10);

  return resultArr; // array
}
