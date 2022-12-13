const text = document.querySelector('[data-cart-empty]')

if (text.textContent = Math.random() >= 0.5) {
	document.getElementById('h1').innerHTML = 'Орел'
} else {
	document.getElementById('h1').innerHTML = 'Решка'
}

function calculateSumOfArray() {
	const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
	let sum = 0;
	console.log(initialArray)
	for (let i = 0; i < initialArray.length; i++)
		if (typeof (initialArray[i]) != 'number') {
			console.log("incorrect type")
		} else {
			sum += initialArray[i]
		}
	console.log(sum)
}
calculateSumOfArray();
