'use strict';

let money = prompt ("Ваш бюджет на месяц?");
let time = prompt ("Введите дату в формате YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income : [],
  savings: false
};

let expenseItem1 = prompt ('Введите обязательную статью расходов в этом месяце');
let expenseAmount1 = prompt ('Во сколько обойдется?');

let expenseItem2 = prompt ('Введите обязательную статью расходов в этом месяце');
let expenseAmount2 = prompt ('Во сколько обойдется?');

appData.expenses.expenseItem1 = expenseAmount1;
appData.expenses.expenseItem2 = expenseAmount2;
alert (appData.budget / 30);

console.log();