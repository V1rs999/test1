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

const BMI = (mass, height) => {
	return mass.length / Math.pow(height, 2)
}
const MarkMiller = {
	firstname: 'Mark',
	mass: 78,
	height: 1.69
}
const JohnSmith = {
	firstname: 'John',
	mass: 92,
	height: 1.95
}
const calcBMI = () => {
	const Mark = BMI(MarkMiller.mass, MarkMiller.height)
	const John = BMI(JohnSmith.mass, JohnSmith.height)
	let higher = Mark - John
	return Mark >= John ? `Mark Miller BMI ${higher} is higher than John Smith ${John}!` : `John Smith BMI ${-1 * higher} is higher than Mark Miller ${Mark}!`

}
console.log(calcBMI());

