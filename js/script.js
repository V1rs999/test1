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


// function findUser(initialObject) {
// 	const result = [];
// 	Object.entries(initialObject).forEach(([key, value]) => {
// 		if (value.age >= 18 && value.city === "London") {
// 			result.push(key);
// 		}
// 	});
// 	console.log(result)
// }
// findUser({ Max: { age: 23, city: "London" }, Mike: { age: 20, city: "NY" }, Roma: { age: 18, city: 'London' } })

const removeObj = (a, key, value) => {
	const pred = (e) => e[key] === value;
	let first = a.findIndex(pred);
	if (first !== -1) {
		for (let i = first; i != a.length; ++i) {
			if (!pred(a[i])) {
				a[first++] = a[i];
			}
		}
		a.splice(first, a.length - first);
	}
}

const object = [{ age: 3 }, { age: 3 }, { age: 1 }, { age: 1 }, { age: 1 }, { age: 2 }, { year: 2 }];

removeObj(object, "age", 3);
removeObj(object, "age", 2);
removeObj(object, "year", 2);
console.log(object)