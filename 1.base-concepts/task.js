"use strict";
function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  a = parseInt(a)
  b = parseInt(b)
  c = parseInt(c)

  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    let x = -b / (2 * a);
    arr = [x];
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  percent = parseInt(percent);
  contribution = parseInt(contribution);
  amount = parseInt(amount);

  const today = new Date();
  let month = (date.getFullYear() - today.getFullYear()) * 12;
  month -= today.getMonth() + 1;
  month += date.getMonth() + 1;

  const body = amount - contribution;
  const p = percent / 100 / 12;

  const paymentPerMonth = body * (p + p / (((1 + p) ** month) - 1));
  totalAmount = +(paymentPerMonth * month).toFixed(2);
  console.log(totalAmount);

  return totalAmount;
}
