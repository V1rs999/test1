// const calcTips = money => money >= 50 && money <= 300 ? money * 0.15 : money * 0.2

// const money = [125, 555, 44]
// const tips = [calcTips(money[0]), calcTips(money[1]), calcTips(money[2])]
// const total = [money[0] + tips[0], money[1] + tips[1], money[2] + tips[2]]

// console.log(money, '\n', tips, '\n', total)

// const roman = {
// 	firstName: 'roman',
// 	lastName: 'draguca',
// 	yearBirhtDate: 2003,
// 	age: 18,
// 	city: 'berezivka',
// 	friend: ['Michael', 'Peter', 'Steven'],
// 	funck: function (yearBirhtDate) {
// 		return 2023 - yearBirhtDate;
// 	}
// }
// console.log(`${roman.firstName} has ${roman.friend.length}, and his best friend is called ${roman.friend[0]} `);

// console.log(roman.funck(roman.yearBirhtDate));
// const BMI = (mass, height) => {
// 	return mass / Math.pow(height, 2)
// }
// const MarkMiller = {
// 	firstname: 'Mark',
// 	mass: 78,
// 	height: 1.69
// }
// const JohnSmith = {
// 	firstname: 'John',
// 	mass: 92,
// 	height: 1.95
// }
// const calcBMI = () => {
// 	const Mark = BMI(MarkMiller.mass, MarkMiller.height)
// 	const John = BMI(JohnSmith.mass, JohnSmith.height)
// 	if (Mark >= John) {
// 		return `Mark Miller BMI ${Mark} is higher than John Smith ${John}!`
// 	} else {
// 		return `John Smith BMI ${John} is higher than Mark Miller ${Mark}!`
// 	}
// }
// console.log(calcBMI());

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];
// const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const calcTips = money =>
//   money >= 50 && money <= 300 ? money * 0.15 : money * 0.2;

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTips(bills[i]);
//   tips.push(tip);
//   total.push(tip + bills[i]);
// }
// console.log(bills, '\n', tips, '\n', total);

// const calcAverage = arr => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(total));
// console.log(calcAverage(tips));

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcAmplitude = temperatures => {
  const temp = temperatures.filter(type => typeof type === 'number');
  return [Math.max(...temp) - Math.min(...temp)];
};

console.log(calcAmplitude(temperatures));

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
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));

const Volt = currentVolt => {
  let Volt;
  if (currentVolt > 13) {
    Volt = currentVolt - (currentVolt - 13);
  } else if (currentVolt < 13) {
    Volt = currentVolt + (currentVolt - 13);
  }
  return Volt;
};
// console.log(Volt(14.4));
