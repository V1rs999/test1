// const text = document.querySelector('[data-cart-empty]')

// if (text.textContent = Math.random() >= 0.5) {
// 	document.getElementById('h1').innerHTML = 'Орел'
// } else {
// 	document.getElementById('h1').innerHTML = 'Решка'
// }

function isEvenArray(initialArray) {
	let result = initialArray.every(initialArray => (initialArray % 2))
	if (result === 0) {
		console.log('yes')
	} else {
		console.log('no')
	}

}
isEvenArray([1, 2, 3, 9])//! NO
isEvenArray([2, 4, 6])//* Yes
