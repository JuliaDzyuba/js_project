'use strict';
let money, time;

function start () {
  money = +prompt ("Ваш бюджет на месяц?");
  time = prompt ("Введите дату в формате YYYY-MM-DD");

  if ( isNaN(money) || money == '' || money == null) {
    money = +prompt ("Ваш бюджет на месяц?");
  };
};
start ();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income : [],
  savings: true
};


function chooseExpenses (){
  for ( let i = 0; i < 2; i++) {
    let a = prompt ('Введите обязательную статью расходов в этом месяце'),
        b = +prompt ('Во сколько обойдется?');
  
    if( typeof a === 'string' && typeof a != null && typeof b != null && a!= '' && b!= '' && a.length < 50){
      appData.expenses[a] = b;
    } else {
      i--;
    };
  
  };
}
chooseExpenses ();

function detectDayBudget(){
  appData.moneyPerDay = + (appData.budget / 30).toFixed(); //метод вернет строку, а не число

  alert ('Ваш ежедневный бюджет: ' + appData.moneyPerDay);
};

detectDayBudget();

function detectLevel(){
  if (appData.moneyPerDay < 100) {
    console.log('Доход минимальный');
  } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000) {
    console.log('Уровень дохода средний');
  } else {
    console.log('Уровень дохода выше среднего');
  };
};

function chooseOptExpenses (){
  let optional ;
  for (let i = 1; i<4; i++) {
    optional = prompt('Укажите статью необязательных расходов');
    if( typeof optional != 'string' || typeof optional == null || optional == '' || optional.length > 50){
      optional = prompt('Укажите статью необязательных расходов');
    };
    appData.optionalExpenses[i] = optional;
  };
};
chooseOptExpenses ();

function checkSavings (){
  if(appData.savings == true){
    let save = +prompt('Какова сумма Ваших накоплений?'),
        percent = +prompt('Под какой процент у Вас депозит?');

    appData.monthIncome  = + (save/100/12*percent).toFixed(2) ; 
    alert('Ваш ежемесячный доход от депозита: ' + appData.monthIncome);
  };
};
checkSavings();
console.log(appData);