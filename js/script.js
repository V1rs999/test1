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
//? isEvenArray([3, 3, 4, 6, 6])//! NO
//? isEvenArray([2, 4, 8, 6]) //* Yes

function filterArray(initialArray) {
  let i = initialArray.filter(element => typeof element === typeof 'string');
  console.log(i);
}
//? filterArray([2, 'string', 3, , , 'test'])

function betterThanAverage(classPopins, yourPopins) {
  console.log(
    classPoints.reduce((a, b) => a + b) / classPoints.length > yourPoints
      ? false
      : true
  );
}
//? betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)

function maps(x) {
  console.log(x.reduce((m, i) => m.concat([i + i]), []));
}
//? maps([1, 2, 3]);

function isValidIP(str) {
  let temp = str.split('.');
  console.log(
    temp.filter(
      el =>
        parseInt(el).toString() == el &&
        parseInt(el) >= 0 &&
        parseInt(+el) <= 255
    ).length === 4
  );
  console.log(temp.lenght);
}
//? isValidIP("0.0.0.255")
//? isValidIP('')

function pigIt(str) {
  console.log(
    str
      .split(' ')
      .map(x => (/[a-zA-Z]+/.test(x) ? x.slice(1) + x[0] + 'ay' : x))
      .join(' ')
  );
}
//? pigIt('Pig latin is cool');
// !
function switchItUp(number) {
  let map = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  };
  return number.toString().replace(/[1234567890]/gi, function (x) {
    return map[x];
  });
}
//? console.log(switchItUp(3));

function stray(numbers) {
  return numbers
    .toString()
    .split('')
    .reverse()
    .map(el => Number(el)); //!.map(Number))
}
//? console.log(stray(35231));

function maps(x) {
  console.log(x.reduce((m, i) => m + i));
}
//? maps([1, 2, 3]);

const summation = num => {
  let result = [];
  for (let i = 0; i <= num; i++) {
    if (i <= num) {
      result.push(i);
    }
  }
  return result.reduce((m, i) => m + i);
};
//? console.log(summation(8));

// Можливо, ви знаєте кілька досить великих ідеальних квадратів. Але як щодо НАСТУПНОГО?

// Завершіть метод findNextSquare, який знаходить наступний інтегральний ідеальний квадрат після переданого як параметра. Пам’ятайте, що цілий повний квадрат — це таке ціле число n, що sqrt(n) також є цілим числом.

// Якщо параметр сам по собі не є ідеальним квадратом, потрібно повернути -1. Ви можете вважати, що параметр невід’ємний.

// Приклади: (Введення -- Виведення)
function findNextSquare(sq) {
  const num = Math.sqrt(sq);
  console.log(num);
  if (num % 1 === 0) return Math.pow(num + 1, 2);
  else return -1;
}
//? console.log(findNextSquare(4489));

// Бакалавр вашого стартапу повідомив маркетингу, що ваш веб-сайт має велику аудиторію в Скандинавії та сусідніх країнах. Маркетинг вважає, що було б чудово вітати відвідувачів на сайті їх рідною мовою. На щастя, ви вже використовуєте API, який визначає місцезнаходження користувача, тому це легка перемога.

// Завдання
// Подумайте про спосіб зберігання мов як бази даних (наприклад, об’єкт). Мови перераховані нижче, щоб ви могли копіювати та вставляти!
// Напишіть функцію «вітання», яка приймає параметр «мова» (завжди рядок) і повертає привітання, якщо воно є у вашій базі даних. За замовчуванням має бути англійська, якщо мови немає в базі даних або у випадку неправильного введення.
// База даних

function greet(language) {
  const lang = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
    IP_ADDRESS_INVALID: 'Welcome',
  };
  return lang[language] || 'Welcome'; //?значення за замовченням;
}
//? console.log(greet('english'));

function solution(str, ending) {
  return str.endsWith(ending);
}
//? console.log(solution('sumo', 'umo'));

function sumMix(x) {
  return x.map(Number).reduce((m, i) => m + i);
}

//? console.log(sumMix([9, 3, '7', '3']));

function duplicateEncode(word) {
  let temp = '';
  word.toLowerCase();
  for (let i in word) {
    let step = word[i].toLowerCase();
    temp += word.indexOf(step) === word.lastIndexOf(step) ? '(' : ')';
  }
  return temp;
}
//? console.log(duplicateEncode('Success')); // )())())

// У цій ката ви створите функцію, яка приймає список невід’ємних
// цілих чисел і рядків і повертає новий список із відфільтрованими рядками.

function filter_list(l) {
  return l.filter(el => typeof el === 'number');
}
//? console.log(filter_list([1, 2, 'a', 'b']));

function filter(l) {
  let num = l.map(el => typeof el === 'number');
  return num;
}
//? console.log(filter([1, 2, 'a', 'b']));

// Ваше завдання в цій ката — реалізувати функцію, яка обчислює суму цілих чисел у рядку. Наприклад, у рядку 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog' сума цілих чисел дорівнює 3635.

// Примітка: перевірятимуться лише додатні цілі числа.

function sumOfIntegersInString(s) {
  return s.split(/\D/).reduce((m, i) => Number(m) + Number(i));
  //TODO: [0-9] не завжди еквівалентно \d. У python3 [0-9]відповідає лише 0123456789символам, тоді як \d відповідає [0-9]іншим символам цифр, наприклад східноарабським цифрам ٠١٢٣٤٥٦٧٨٩.
}
//? console.log(sumOfIntegersInString('12.4'));

// Напишіть програму, яка виводить n верхніх елементів зі списку.

function largest(n, array) {
  return array.sort((a, b) => a - b).slice(array.length - n);
  2;
}
// ? console.log(largest(2, [7, 6, 5, 4, 3, 2, 1]));

// Вам дається рядок. Ви повинні замінити будь-яке виникнення покриття послідовності на covfefe, однак, якщо ви не знайдете слова coverage у рядку, ви повинні додати covfefe в кінці рядка з пробілом на початку.

// Для мов, де рядок не є незмінним (наприклад, ruby), не змінюйте заданий рядок, інакше це порушить тестові випадки.
('use strict');
function covfefe(str) {
  const temp = str.replace(/coverage/gi, 'covfefe');
  return temp === str ? str + ' covfefe' : temp;
}
//? console.log(covfefe('coverage'));

// Багато хто знає, що компанія Apple використовує букву «i» практично у всіх своїх пристроях, щоб підкреслити свою індивідуальність.

// І тому Джону, програмісту Apple, дали завдання створити програму, яка б додавала цю букву до кожного слова. Давайте допоможемо і йому це зробити.

// завдання:
// Ваше завдання — створити функцію, яка приймає значення word і повертає його з «i» на початку слова. Наприклад, ми отримуємо слово 'Phone', тому ми повинні повернути 'iPhone'. Але у нас є кілька правил:

// Слово не повинно починатися на букву «Я», наприклад Inspire.
// Кількість голосних не повинна перевищувати чи дорівнювати кількості приголосних, наприклад, Схід або Мир. ('у' вважається приголосним)
// Перша літера не повинна бути малою, наприклад дорога.
// Якщо слово не відповідає правилам, ми повертаємо «Недійсне слово».

function i(word) {
  if (
    word.length === 0 ||
    word[0].toLowerCase() === 'i' ||
    word[0] === word[0].toLowerCase() ||
    word.replace(/[^aeiou]/gi, '').length >=
      word.replace(/[aeiou]/gi, '').length
  ) {
    return 'Invalid word';
  }
  return 'i' + word;
}
//? console.log(i(''));

// Налагодити функцію getSumOfDigits, яка приймає додатне ціле число для обчислення суми його цифр. Припустимо, що аргумент є цілим числом.

const getSumOfDigits = integer => {
  return integer
    .toString()
    .split('')
    .map(el => Number(el))
    .reduce((i, x) => i + x);
};

//? console.log(getSumOfDigits(123));

// Ваша функція має повернути 'Naughty!' або 'Гарно!' залежно від загальної кількості подій у певному році (залежно від того, що більше). Якщо обидва рівні, поверніть 'Чудово!'
function naughtyOrNice(data) {
  let count = {
    Nice: 0,
    Naughty: 0,
  };
  for (let mouth in data) {
    for (let day in data[mouth]) {
      count[data[mouth][day]]++;
    }
  }
  return count['Naughty'] > count['Nice'] ? 'Naughty!' : 'Nice!';
}
//? console.log(
/*  naughtyOrNice({
    January: {
      1: 'Naughty',
      2: 'Naughty',
      3: 'Nice',
      4: 'Naughty',
      5: 'Nice',
      6: 'Nice',
      7: 'Nice',
      8: 'Naughty',
      9: 'Nice',
      10: 'Nice',
      11: 'Nice',
      12: 'Nice',
      13: 'Naughty',
      14: 'Naughty',
      15: 'Nice',
      16: 'Naughty',
      17: 'Nice',
      18: 'Nice',
      19: 'Nice',
      20: 'Nice',
      21: 'Nice',
      22: 'Nice',
      23: 'Naughty',
      24: 'Naughty',
      25: 'Nice',
      26: 'Nice',
      27: 'Nice',
      28: 'Naughty',
      29: 'Nice',
      30: 'Nice',
      31: 'Nice',
    },
  })
);
*/

function findShort(s) {
  return Math.min(...s.split(' ').map(el => el.split('').length));
}
//? console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

let countSheep = function (num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    if (num === 0) {
      return '';
    } else {
      result += `${i}sheep...`;
    }
  }
  return result;
};
//? console.log(countSheep(3));

function nearestSq(n) {
  console.log(Math.round(Math.sqrt(n)), 2);
  return Math.pow(Math.round(Math.sqrt(n)), 2);
}
//? console.log(nearestSq(10));

// Візьміть 2 рядки s1 і s2, що містять лише літери від a до z. Повертає новий відсортований рядок, найдовший із можливих, що містить різні літери
// (кожна взята лише один раз) із s1 або s2.

function longest(s1, s2) {
  return [...s1.split(''), ...s2.split('')]
    .sort()
    .filter(function (item, pos, ary) {
      return !pos || item != ary[pos - 1]; //* не понятна умова
    })
    .join('');
}
//? console.log(longest('aretheyhere', 'yestheyarehere'));

// Вам буде надано масив a і значення x. Все, що вам потрібно зробити, це перевірити, чи наданий масив містить значення.

// Масив може містити числа або рядки. X може бути будь-яким.

// Повертає true, якщо масив містить значення, і false, якщо ні.

function check(a, x) {
  return a.includes(x);
}
//? console.log(check([66, 101], 66));

// Напишіть функцію для перетворення імені в ініціали. Ця ката містить два слова з одним пробілом між ними.

// На виході має бути дві великі літери з крапкою.

// Це має виглядати так:

// Сем Харріс = S.H

// Патрік Фіні = P.F

function abbrevName(name) {
  return name
    .split(' ')
    .map(el => el.split('').shift().toUpperCase())
    .join('.');
}
//? console.log(abbrevName('Sam Harris'));

// Якщо ви вже виконали цю ката і бажаєте більшого випробування, ось 3D-версія

// Бобу нудно на уроках фізики, тому він зробив собі ящик для іграшок, щоб згаяти час. Ящик особливий тим, що має можливість змінювати силу тяжіння.

// У коробці є кілька колонок іграшкових кубиків, розташованих в лінію. В i-му стовпчику a_i кубиків. Спочатку сила тяжіння в ящику тягне кубики вниз. Коли Боб перемикає гравітацію, він починає тягнути всі кубики до певної сторони коробки, d, яка може бути або «L», або «R» (ліворуч або праворуч). Нижче наведено приклад того, як може виглядати коробка з кубиками до і після зміни сили тяжіння.
// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+
// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

// Examples (input -> output:
//  'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
//  'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

const flip = (d, a) => {
  if (d === 'R') {
    return a.sort((a, b) => (a > b ? 1 : -1)); //* не понятна умова
  } else if (d === 'L') {
    return a.sort((a, b) => (a < b ? 1 : -1)); //* не понятна умова
  }
};
//? console.log(flip('R', [3, 2, 1, 2]));
//? console.log(flip('L', [3, 2, 1, 2]));

// Дано масив цілих чисел, вилучіть найменше значення. Не змінюйте оригінальний масив/список. Якщо є кілька елементів з однаковим значенням, видаліть той із нижчим індексом. Якщо ви отримуєте порожній масив/список, поверніть порожній масив/список.

// Не змінюйте порядок елементів, які залишилися.

// Приклади
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  return numbers.find(el => el === 5);
}

console.log(removeSmallest([2, 4, 5, 3, 5, 1]));
