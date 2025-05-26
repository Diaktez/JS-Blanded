//задача 1
// Дан массив чисел [1, 2, 3, 4, 5]. Создайте новый массив, содержащий
// квадраты каждого элемента входного массива.
// Ожидаемый результат: [1, 4, 9, 16, 25].
// const numbers = [1, 2, 3, 4, 5];
// let holes = [];
// for (const hole of numbers) {
//   holes.push(hole * hole);
//  }
// console.log(holes);
// +++++++++++++++or
// const total = numbers.map((hole) => hole * hole);
// console.log(total);
//++++++++++++++++or
// const total = numbers.reduce((hole, num) => {
//   hole.push(num * num);
//   return hole;
// }, []);
// console.log(total);
// ==============================================================
// Задание 2:
// Дан массив объектов. Создайте новый массив, содержащий все значения
// из массивов values ​​каждого объекта, сохраненных в одном массиве.
// Ожидаемый результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].
// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];
// const newData = data.flatMap((hole) => hole.values);
// console.log(newData);

//+++++++++++++++++=or
// const newData = data.reduce((inHole, hole) => {
//   return inHole.concat(hole.values);
// }, []);
// console.log(newData);
//+++++++++++++++=or
// const newData = data.reduce((inHole, hole) => {
//   return [...inHole, ...hole.values];
// }, []);
// console.log(newData);
//==============================================================
// Задание 3:
// Дан массив объектов.
// Проверьте, есть ли хотя бы один объект в возрасте менее 20 лет.
// Ожидаемый результат: true .
// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];
// const age = people.some((hole) => hole.age < 20);
// console.log(age);
//=====================================================================
// // Задание 4:
// // Дан массив чисел [2, 4, 6, 8, 10].
// // Проверьте, есть ли каждый элемент массива четным. Ожидаемый результат: true .
// const numbers = [2, 4, 6, 8, 10];
// const allTrue = numbers.every((hole) => hole % 2 === 0);
// console.log(allTrue);
//+++++++++++++++++++==or
// const allNumbers = numbers.filter((hole) => hole % 2 === 0);
// const allTrue = allNumbers.length === numbers.length;
// console.log(allTrue);
//++++++++++++++++++++or
// const allTrue = numbers.reduce(
//   (inHole, hole) => inHole && hole % 2 === 0,
//   true
// );
// console.log(allTrue);
//++++++++++++++++++++++++++ or
// const allTrue = true;
// numbers.forEach((hole) => {
//   if (hole % 2 !== 0) {
//     allTrue = false;
//   }
// });
// console.log(allTrue);
//++++++++++++++++++++++ or
// const allTrue = true;
// for (const hole of numbers) {
//   if (hole % 2 !== 0) {
//     allTrue = false;
//     break;
//   }
// }
// console.log(allTrue);
//====================================================================
// Задание 5:
// Найдите первое нечетное число
// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const num = numbers.find((hole) => hole % 2 !== 0);
// console.log(num);
//++++++++++ or
// let result;
// numbers.forEach((hole) => {
//   if (hole % 2 !== 0 && result === undefined) {
//     result = hole;
//   }
// });
// console.log(result);
//+++++or
// const num = numbers.reduce((inHole, hole) => {
//   if (inHole === undefined && hole % 2 !== 0) {
//     return hole;
//   }
//   return inHole;
// }, undefined);
// console.log(num);
// +++ or
// let result;
// for (const hole of numbers) {
//   if (hole % 2 !== 0) {
//     result = hole;
//     break;
//   }
// }
// console.log(result);
//=====================================
// Задание 6:
// Отсортируйте массив чисел [ 4 , 2 , 5 , 1 , 3 ]
// в порядке возрастания. Ожидаемый результат: [ 1 , 2 , 3 , 4 , 5 ].
// const numbersArray = [4, 2, 5, 1, 3];
// const sort = numbersArray.toSorted();
// console.log(sort);
//=====================================
//Задание 7:
// Отсортируйте массив строк [ "banana" , "orange" , "apple" , "pear" ]
//в порядке алфавита.
// Ожидаемый результат: [ "apple" , "banana" , "orange" , "pear" ].
// const stringArray = ["banana", "orange", "apple", "pear"];
// const sort = stringArray.toSorted();
// console.log(sort);
//========================================
//Задание 8:
//Отсортируйте массив объектов по возрасту в порядке возрастания.
// Ожидаемый результат: [{ name:  "Bob" , age:  19 }, { name:  "John" , age:  27 }, { name:  "Jane" , age:  31 }].
// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];
// const sort = users.toSorted((x, y) => x.age - y.age);
// console.log(sort);
//======================================================
//Задание 9:
// Дан массив объектов.
// Создайте новый массив, содержащий только объекты, в которых
// возраст больше 20 лет.
// Ожидаемый результат: [{ name:  "John" , age:  27 }, { name:  "Jane" , age:  31 }]
// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];
// const hiAge = user.reduce((inHole, hole) => {
//   if (hole.age > 20) {
//     inHole.push(hole);
//   }
//   return inHole;
// }, []);
// console.log(hiAge);
//or
// const hiAge = user.filter((hole) => hole.age > 20);
// console.log(hiAge);
//=========================================================
// // Задание 10:
// // Дан массив чисел [1, 2, 3, 4, 5].
// // Используйте метод для вычисления суммы элементов массива.
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((inHole, hole) => inHole + hole, 0);
// console.log(sum);
//==========================================================
//Задание 11:
// Розроби клас Calculator, який дозволяє виконувати арифметичні
//операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
// Вимоги до класу Calculator
//- Метод number(value) Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, – метод getResult, возвращает текущий результат всех операций..Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// Приклад використання:
// const calc = new Calculator();
// const result = calc
//.number(10)// Встановлюємо початкове значення 10
//.add(5)// Додаємо 5 (10 + 5 = 15)
//.subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//.multiply(4) // Множимо на 4 (12 * 4 = 48)
//.divide(2)// Ділимо на 2 (48 / 2 = 24)
//.getResult(); // Отримуємо результат: 24
//console.log(result); // 24
// class Calculator {
//   constructor() {
//     this.value = 0;
//   }
//   getResult() {
//     return this.value;
//   }
//   number(value) {
//     this.value = value;
//     return this;
//   }
//   add(value) {
//     this.value += value;
//     return this;
//   }
//   subtract(value) {
//     this.value -= value;
//     return this;
//   }
//   divide(value) {
//     if (value === 0) {
//       throw new Error("Division by zero is not allowed");
//       // throw — ключевое слово, которое останавливает выполнение программы и выбрасывает ошибку.
//       // new Error("...") — создаёт объект ошибки с вашим сообщением.
//     } else {
//       this.value /= value;
//     }
//     return this;
//   }
//   multiply(value) {
//     this.value *= value;
//     return this;
//   }
// }

// const calc = new Calculator();
// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24
// console.log(result); // 24
// ========================================================
//Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email
// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const user = new Client("reyHardcore", "rey@gethub.com");
// console.log(user.login);
// user.login = "ReySoftcore";
// console.log(user.login);
// console.log(user.email);
//============================================================
//Завдання 13:
// //  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.
// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.
//Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//- salary - зарплата співробітника;
//- department - відділ, в якому працює співробітник.
//Крім того, клас `Employee` має мати метод `getEmployeeDetails()`,
//який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.
// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }
// class Employee extends Person {
//   constructor(name, age, gender, email, salary, department) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//   }
//   getEmployeeDetails() {
//     return {
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }
// const emp = new Employee(
//   "Оля",
//   25,
//   "female",
//   "olya@example.com",
//   3000,
//   "Production"
// );

// console.log(emp.getDetails()); // из мамочки
// console.log(emp.getEmployeeDetails()); // из дочери
