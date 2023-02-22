`use strict`;
//! Three method create funck
//TODO const isMilleial = function () {};
//TODO const isMilleial = ()=>{}
//TODO function isMilleial (){}
// !
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const text = document.querySelector('[data-cart-empty]');

// if ((text.textContent = Math.random() >= 0.5)) {
//   document.getElementById('h1').innerHTML = 'Орел';
// } else {
//   document.getElementById('h1').innerHTML = 'Решка';
// }
const calcTips = money =>
  money >= 50 && money <= 300 ? money * 0.15 : money * 0.2;

const money = [125, 555, 44];
const tips = [calcTips(money[0]), calcTips(money[1]), calcTips(money[2])];
const total = [money[0] + tips[0], money[1] + tips[1], money[2] + tips[2]];

//? console.log(money, '\n', tips, '\n', total);

const person = {
  firstName: 'roman',
  lastName: 'draguca',
  yearBirhtDate: 2003,
  age: 18,
  city: 'berezivka',
  friend: ['Michael', 'Peter', 'Steven'],
  funck: function (yearBirhtDate) {
    return 2023 - yearBirhtDate;
  },
};
// ? console.log(`${roman.firstName} has ${roman.friend.length}, and his best friend is called ${roman.friend[0]} `);

// ? console.log(roman.funck(roman.yearBirhtDate));
const BMI = (mass, height) => {
  return mass / Math.pow(height, 2);
};
const MarkMiller = {
  firstname: 'Mark',
  mass: 78,
  height: 1.69,
};
const JohnSmith = {
  firstname: 'John',
  mass: 92,
  height: 1.95,
};
const calcBMI = () => {
  const Mark = BMI(MarkMiller.mass, MarkMiller.height);
  const John = BMI(JohnSmith.mass, JohnSmith.height);
  if (Mark >= John) {
    return `Mark Miller BMI ${Mark} is higher than John Smith ${John}!`;
  } else {
    return `John Smith BMI ${John} is higher than Mark Miller ${Mark}!`;
  }
};
// ? console.log(calcBMI());

for (let i = 0; i < bills.length; i++) {
  const tip = calcTips(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
//? console.log(bills, '\n', tips, '\n', total);

const calcAverage = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
//? console.log(calcAverage([2, 3, 7]));
//? console.log(calcAverage(total));
//? console.log(calcAverage(tips));

const calcAmplitude = temperatures => {
  const temp = temperatures.filter(type => typeof type === 'number');
  return Math.max(...temp) - Math.min(...temp);
};

//? console.log(calcAmplitude(temperatures));

const printForecast = arr => {
  let sum = '';
  for (let i = 0; i < arr.length; i++) {
    if (sum === '') {
      sum += `...${arr[i]}ºC за ${i + 1} день `;
    } else {
      sum += `...${arr[i]}ºC за ${i + 1} дні `;
    }
  }
  return sum;
};
//? console.log(printForecast([17, 21, 23]));
//? console.log(printForecast([12, 5, -5, 0, 4]));

const calcAge = birthYear => {
  const age = 2023 - birthYear;
  return age;
};
//? calcAge(1991);

// var firstName = 'Matilda'; //* var will be do property for global scope  'Window'
const roman = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
  firstName: 'roman',
  greet: () => console.log(`hey ${this.firstName}`), //TODO arrow funck use global scrope(Window)PS...output will be undefined(but if you use var undefined will be equal "Matilda")
};
// roman.greet();
// roman.calcAge();
// console.log(this);

const test = () => {
  console.log(arguments);
  return a + b;
};
const test1 = function () {
  console.log(arguments);
  //   return a + b;
};

function test2() {
  console.log(arguments);
  //   return a + b;
}
// test(1, 322, 3, 22); Error arrow fucnk don't have keyword
// test1(12, 3, 23, 232, 32);
// test2(11323, 232, 4243, 432);

//* Destructuring arr
const [i = 1, j = 1, k = 1] = arr; //TODO 'char=1' default value
//? console.log(i, j, k);

const del = (...a) => {
  return a.reduce((a, b) => a + b);
};
//? console.log(del(...arr));

//! AND operator '&&' return first fallsy value
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log(7 && 'Jonas' && undefined && 9);
//! OR Ps. oprerator '||' return first true value
// console.log(0 || 'Jonas');
// console.log(7 || 'Jonas');
// console.log(7 || 'Jonas' || null || 9);
//! Nullish operator '??':null or undefiend (Not 0 or '')
let guessCorrect = roman.year ?? 10;
roman.year = 0;
// console.log(guessCorrect);
guessCorrect = roman.year ?? 10;
// console.log(guessCorrect);
//! Assignment Operators'||='
roman.year = 0;
// console.log((roman.year ||= 10));
//! Nullish assignment operator '??='
roman.year = 0;
// console.log((roman.year ??= 10));

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const player3 = ([players1, players2] = game.players);
const goalKeeper = ([gk, ...other] = players1);
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const gameodd = ({ team1, x: draw, team2 } = game.odds);

//TODO const gameodd = (odds { team1, x: draw, team2 } = game);
const printGoals = function (players) {
  console.log(players);
  return players + ` ${players.length} goals`;
};
//? console.log(printGoals(game.scored));
const win = (team1, team2) => {
  return (
    (team1 < team2 && 'Team 1 is more likely to win') ||
    (team1 > team2 && 'Team 2 is more likely to win')
  );
};
//? console.log(win(team1, team2));

// ?for (const item of allPlayers) console.log(item);

for (const [i, el] of allPlayers.entries()) {
  //*Destructuring in for of
  //?   console.log(`${i + 1}: ${el}`);
}
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 12 + 12,
  },
};
const restaurant = {
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Rissotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? ''; //TODO [day] for varible
  const close = restaurant.openingHours[day]?.close ?? "don't work";
  //?  console.log(
  //?   `On ${day}, we ${open === '' ? 'close' : 'open at'} ${open}`,
  //?  open === '' ? '' : `and close at ${close}`
  //?);
}
//? console.log(restaurant.order?.(0, 1) ?? 'Method does not exit'); //TODO '?.'check order !=null or undefined
//? console.log(restaurant.orderPizza?.(0, 1) ?? 'Method does not exit');

const users = [{ name: 'Jonas', email: 'romadraguca@gmail.com' }];
//? console.log(users[0].name ?? 'User array empty');

for (const [day, { open, close }] of Object.entries(openingHours)) {
  //?   console.log(`On ${day} we open at ${open} and close at ${close}`);
}
//challeng #2
for (const [goal, player] of game?.scored?.entries()) {
  //?   console.log(`Гол ${goal + 1}: ${player}`);
}
for (const [team, score] of Object.entries(game.odds)) {
  //?   console.log(
  //?  `Коефіцієнт ${game[team] ? 'перемоги ' + game[team] : 'нічії'} ${score}`
  //?   );
}
let temp = Object.values(game.odds);
let sum = 0;
for (const odd of temp) {
  sum += odd;
}
//? console.log((sum /= temp.length));
//? console.log(sum);
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
//? console.log(scorers);

const week = new Set([1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9, 0]); //TODO DELETE ALL Duplicate
console.log(new Set('Roman Draguca'));
console.log(week);
console.log(week.size);
console.log(week.has(5)); //TODO Check for includes 'value' in obj P.s return true or false ;
console.log(week.has(50));

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

const rest = new Map();
rest.set('name', 'italeano');
rest.set(1, 'Italy');
rest.set(2, 'Portugal');
console.log(...rest);
console.log(rest.get('name'));
