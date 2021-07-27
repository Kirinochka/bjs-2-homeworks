// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  max = arr[0];
  min = arr[0];
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
    sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  max = arrOfArr[0][0];

  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
    max = sum > max ? sum : max;
  }

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код

  let min = Math.abs(arr[0]);
  let max = Math.abs(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.abs(arr[i]);
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
  }

  return max - min;
}
