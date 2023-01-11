// const text = document.querySelector('[data-cart-empty]')

// if (text.textContent = Math.random() >= 0.5) {
// 	document.getElementById('h1').innerHTML = 'Орел'
// } else {
// 	document.getElementById('h1').innerHTML = 'Решка'
// }

// function isEvenArray(initialArray) {
// 	if (initialArray.every(element => element % 2 === 0)) {
// 		console.log('Yes')
// 	} else {
// 		console.log('No')
// 	}
// }
// // let i = [2, 4, 6, 8].every(isEvenArray);
// // console.log(i)
// isEvenArray([3, 3, 4, 6, 6])//! NO
// isEvenArray([2, 4, 8, 6]) //* Yes

// function filterArray(initialArray) {
// 	let i = initialArray.filter(element => typeof (element) === typeof ('string'))
// 	console.log(i)
// }
// filterArray([2, 'string', 3, , , 'test'])


// function betterThanAverage(classPopins, yourPopins) {
// 	console.log((classPoints.reduce((a, b) => (a + b)) / classPoints.length) > yourPoints ? false : true)
// }
// betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)

// function maps(x) {
// 	console.log(x.reduce((m, i) => m.concat([i + i]), []))
// }
// maps([1, 2, 3])

// function isValidIP(str) {
// 	let temp = str.split('.')
// 	console.log(temp.filter(el => parseInt(el).toString() == el && parseInt(el) >= 0 && parseInt(+el) <= 255).length === 4)
// 	console.log(temp.lenght)
// }
// isValidIP("0.0.0.255")
// isValidIP('')


// function pigIt(str) {
// 	console.log(str.split(' ').map(x => /[a-zA-Z]+/.test(x) ? x.slice(1) + x[0] + 'ay' : x).join(' '))
// }
// pigIt('Pig latin is cool')

//                                                           !                                                                                   

// const calcTips = money => money >= 50 && money <= 300 ? money * 0.15 : money * 0.2

// const money = [125, 555, 44]
// const tips = [calcTips(money[0]), calcTips(money[1]), calcTips(money[2])]
// const total = [money[0] + tips[0], money[1] + tips[1], money[2] + tips[2]]

// console.log(money, '\n', tips, '\n', total)

const roman = {
	firstName: 'roman',
	lastName: 'draguca',
	age: 18,
	city: 'berezivka'
}
console.log(roman)
const nameKey = 'Name';
console.log(roman['first' + nameKey])
console.log(roman['last' + nameKey])


