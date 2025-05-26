// Создайте массив styles с элементами 'jazz' и 'blues'
// Добавьте к концу массива элемент 'rock-n-roll' с помощью соответствующего метода массивов
// Найдите элемент 'blues' в массиве и замените его на 'classic' , используя JavaScript-код

// Напишите функцию logItems(array), которая принимает массив в качестве аргумента
// и выводит в консоль каждый его элемент в формате:
//  "<номер элемента> - <значение элемента>" .
// Используйте цикл for для перебора элементов массива.
// Нумерация элементов должна начинаться с 1 (а не с 0 ).
// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const hole = styles.indexOf("blues");
// if (hole !== -1) {
//   styles[hole] = "classic";
// }
// function logItems(array) {
//   let holeM = 0;
//   for (const hole of array) {
//     holeM++;
//     console.log(`${holeM} - ${hole}`);
//   }
// }
// logItems(styles);
//или типа праавильно
// const styles = ["jaz", "blues"];
// styles.push("rock-n-roll");
// const index = styles.indexOf("blues");
// if (index !== -1) {
//   styles[index] = "classic";
// }
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(styles);
//___________________________________________________
//// Напишите функцию checkLogin (array) , которая:
// Принимает массив логинов в качестве аргумента.
// Запрашивает имя пользователя через prompt.
// Проверяет, есть ли введенное имя в переданном массиве.
// Если имя находится в массиве - выводит сообщение через alert: "Welcome, <name>!"
// Если имя отсутствует - выводит сообщение: "User not found" . //
// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//   let qHole = prompt(" Name ? ");
//   if (array.includes(qHole)) {
//     alert(`Welcome, ${qHole}!`);
//   } else {
//     alert("User not found");
//   }
// }
// checkLogin(logins);
//-------------------------------------------------------------
// Напишите функцию caclculateAverage(),
// которая принимает произвольное количество
// аргументов и возвращает их среднее значение.
// Добавьте проверку, что аргументы – это числа.
// function caclculateAverage() {
//   let totalHole = 0;
//   for (const hole of arguments) {
//     if (isNaN(hole) || typeof hole !== "number") return "Только числа";
//     totalHole += hole;
//   }
//   return totalHole / arguments.length; // если в аргументе не только числа он віведет введите число
// }
// console.log(caclculateAverage(1, 15, 35, 65));
// console.log(caclculateAverage(1, "t", 35));
//---------------------------
// function caclculateAverage(...args) {
//   let totalHole = 0;
//   let calcHole = 0;
//   for (const hole of args) {
//     if (typeof hole === "number") {
//       totalHole += hole;
//       calcHole += 1;
//     }
//   }
//   return totalHole / calcHole;
// }
// console.log(caclculateAverage(1, 15, 35, 65));
// console.log(caclculateAverage(1, "t", 35));
// считает все мегоправильній вариант
//__________________________________________
// Напишите функцию findSmallestNumber(numbers),
// ищущее наименьшее число в массиве.
// Добавьте проверку, что функция получает именно массив, и
// если функция получает массив - верните из функции наименьшее число,
// в противном случае - верните 'Sory, it is not an array!'.
// const number = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (Array.isArray(numbers)) {
//     let hole = Math.min(...numbers);// принимает не масив а все числа(распиливает)
//     return hole;
//   } else {
//     return "Sory, it is not an array!";
//   }
// }
// console.log(findSmallestNumber(number));
///_________________________________________
// Напишите функцию, которая будет слаживать соседние числа
// и будет пушить их в новый массив.
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// уточнение: слаживать необходимо первое число со вторым, затем второе – с третьим,
// третье – с четвертым и так до конца.
// В результате функция должна возвращать массив [33, 45, 39, 17, 25, 27, 29].
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function mazahizm(array) {
//   let blackHol = []; //array.length - 1 — это значит, что последний i, который мы берём — это индекс 6.
//   for (let hole = 0; hole < array.length - 1; hole++) {
//     let sumHole = array[hole] + array[hole + 1]; //берем текущее и следующее число
//     blackHol.push(sumHole); // запихиваем сумму в новый массив
//   }
//   return blackHol;
// }
// console.log(mazahizm(someArr));
//юзая for of
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function mazahizm(array) {
//   let darkHole = [];
//   let blackHole = array[0]; //первое число запоминаем отдельно

//   for (const hole of array.slice(1)) {
//     // бежим со второго элемента
//     darkHole.push(blackHole + hole); // складываем предыдущее и текущее
//     blackHole = hole; // обновляем предыдущее на текущее
//   }
//   return darkHole;
// }
// console.log(mazahizm(someArr));
//____________________________________________
// Напишите функцию findLongestWord(string), которая
// принимает произвольную строку, состоящую из слов, разделенных
// пробелами (параметр string), и будет возвращать самое длинное слово в предложении
// // Воспользуйтесь этим примером вызова функции для проверки ее работы:
//console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
// function findLongestWord(string) {
//   let darkHole = ""; // пустая переменная для хранения самого длинного слова
//   let transformHole = string.split(" "); // превращаем строку в массив слов

//   for (const hole of transformHole) {
//     if (hole.length > darkHole.length) {
//       darkHole = hole;
//     }
//   }
//   return darkHole;
// }
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
//___________________________________________________
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mod = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// for (const hole of Object.keys(user)) {
//   console.log(`${hole}:${user[hole]} `);
// }
//_________________________________________________
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// for (const hole of Object.values(salaries)) {
//   sum += hole;
// }

// console.log(sum);
//______________________________________________
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'
// const calculator = {
//   key1: null,
//   key2: null,

//   read(a, b) {
//     this.key1 = a;
//     this.key2 = b;
//   },

//   exist() {
//     return this.key1 !== null && this.key2 !== null;
//   },

//   sum() {
//     if (this.exist()) {
//       return this.key1 + this.key2;
//     } else {
//       return "No such propeties";
//     }
//   },

//   mult() {
//     if (this.exist()) {
//       return this.key1 * this.key2;
//     } else {
//       return "No such propeties";
//     }
//   },
// };

// calculator.read(10, 5); // здесь вызов read не нужно логировать, он ничего не возвращает
// console.log(calculator.sum()); // 15
// console.log(calculator.mult()); // 50
//_______________________________________________
// Напишите функцию calcTotalPrice(fruits, fruitName),
// принимающую массив объектов (fruits) и строчку с названием фрукта (fruitName)
// Функция считает и возвращает общую стоимость фрукта
// с таким именем, ценой и количеством из объекта.

// Обратите внимание, что в массиве может быть несколько объектов с одинаковым
// названием фрукта, это тоже нужно учесть.
const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];

// calcTotalPrice = (fruits, fruitName) => {
//   let inHole = 0;
//   for (const hole of fruits) {
//     if (hole.name === fruitName) {
//       inHole += hole.price * hole.quantity;
//     }
//   }
//   return `${fruitName} : ${inHole}`;
// };
// console.log(calcTotalPrice(fruits, "Яблуко"));
// console.log(calcTotalPrice(fruits, "Апельсин"));
// console.log(calcTotalPrice(fruits, "Банан"));
// console.log(calcTotalPrice(fruits, "Груша"));
// console.log(calcTotalPrice(fruits, "Виноград"));
// console.log(calcTotalPrice(fruits, "Банан"));
//============================================================
// for (const hole of fruits) {
//   const totalHole = hole.price * hole.quantity;
//   console.log(`${hole.name}: ${totalHole}`);
// }
//============================================================

// const holeCounter = {}; //Это пустой объект, в котором мы будем считать, сколько раз мы уже видели каждый фрукт. Например:
// // fruitCounter["Банан"] = 1 — когда банан встретился в первый раз.
// // fruitCounter["Банан"] = 2 — когда встретился снова.
// for (const hole of fruits) {
//   //Цикл перебирает каждый объект в массиве fruits.
//   if (!holeCounter[hole.name]) {
//     holeCounter[hole.name] = 1;
//   } else {
//     holeCounter[hole.name]++;
//   }
//   //Здесь мы проверяем:
//   // Если такого фрукта ещё не было — записываем 1.
//   // Если уже встречался — прибавляем к счётчику 1.
//   //  Почему !holeCounter[hole.name]?
//   // Потому что если такого ключа ещё нет — возвращается undefined, а !undefined = true.
//   const totalHole = hole.price * hole.quantity; //Просто перемножаем цену и количество — это итоговая
//   // стоимость одного конкретного фрукта (не всех с таким именем, а именно этого экземпляра).
//   let lighToHole = 0;
//   if (holeCounter[hole.name] > 1) {
//     lighToHole = hole.name + " № " + holeCounter[hole.name];
//   } else {
//     lighToHole = hole.name;
//   }
//   // Тут мы решаем, как подписывать фрукт:
//   // Если это первый раз — пишем просто "Банан".
//   // Если это второй, третий и т.д. — добавляем #2, #3 и так далее.
//   console.log(lighToHole + ": " + totalHole);
// }
