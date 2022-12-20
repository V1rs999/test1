// const text = document.querySelector('[data-cart-empty]')

// if (text.textContent = Math.random() >= 0.5) {
// 	document.getElementById('h1').innerHTML = 'Орел'
// } else {
// 	document.getElementById('h1').innerHTML = 'Решка'
// }

function isEvenArray(initialArray) {
	if (initialArray.every(element => element % 2 === 0)) {
		console.log('Yes')
	} else {
		console.log('No')
	}
}
// let i = [2, 4, 6, 8].every(isEvenArray);
// console.log(i)
isEvenArray([3, 3, 4, 6, 6])//! NO
isEvenArray([2, 4, 8, 6]) //* Yes
