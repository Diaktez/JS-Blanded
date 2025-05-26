// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

// const body = document.querySelector("body");
// console.log(body);

// const title = document.querySelector("#title");
// console.log(title);

// const list = document.querySelector(".list");
// console.log(list);

// const dataTopic = document.querySelectorAll("[data-topic]");
// console.log(dataTopic);
// console.log(dataTopic[0]);

// const lastDataTopic = dataTopic[dataTopic.length - 1];
// console.log(lastDataTopic);

// const h1 = document.querySelector("h1");
// const nextElement = h1.nextElementSibling;
// console.log(nextElement);

// const h3 = document.querySelectorAll("h3");
// console.log(h3);
// h3.forEach((hole) => hole.classList.add("active"));

// listHole = document.querySelector("li[data-topic='navigation']");
// console.log(listHole);
// listHole.style.backgroundColor = "yellow";

// holeP = document.querySelector("li[data-topic='navigation'] p");
// holeP.textContent = "Я змінив тут текст!";

// const currentTopic = "manipulation";
// const currentTopicHole = document.querySelector(
//   `[data-topic ='${currentTopic}']`
// );

// console.log(currentTopicHole);
// currentTopicHole.style.backgroundColor = "blue";

// const titleHole = document.querySelector(".completed");
// console.log(titleHole);

// const liToRemove = titleHole.closest("li");
// liToRemove.remove();

// const h1Hole = document.querySelector("h1");
// h1Hole.insertAdjacentHTML(
//   "afterend",
//   "<p>Об'єктна модель документа (Document Object Model)</p>"
// );

// list.insertAdjacentHTML(
//   "beforeend",
//   `<li>
//     <h3>Властивість innerHTML</h3>
//     <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//   </li>`
// );

// list.innerHTML = "";

//======================================================================
//Завдання 2:

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const numbers = document.querySelector(".number-container");

for (let hole = 0; hole < 100; hole++) {
  const num = randomNumber();

  const divHole = document.createElement("div");
  divHole.classList.add("number");
  divHole.textContent = num;

  if (num % 2 === 0) {
    divHole.classList.add("even");
  } else {
    divHole.classList.add("odd");
  }

  numbers.append(divHole);
}
//==================================================================

// Завдання 3:

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const inputHole = document.querySelector(
  ".contact-form-input.js-username-input"
);
const formSubmit = document.querySelector(".contact-form.js-contact-form");
const checkBox = document.querySelector(
  ".contact-form-checkbox.js-policy-checkbox"
);
const spanOutput = document.querySelector(".js-username-output");

inputHole.addEventListener("input", (hole) => {
  const value = hole.target.value.trim();

  // Добавление класса success/error
  if (value.length >= 6) {
    hole.target.classList.add("success");
    hole.target.classList.remove("error");
  } else {
    hole.target.classList.add("error");
    hole.target.classList.remove("success");
  }

  // Обновление span
  spanOutput.textContent = value || "Anonymous";
});

inputHole.addEventListener("focus", (hole) => {
  const value = hole.target.value.trim();
  hole.target.style.outline =
    value === "" ? "3px solid red" : "3px solid green";
});

inputHole.addEventListener("blur", (hole) => {
  const value = hole.target.value.trim();
  hole.target.style.outline = value === "" ? "3px solid red" : "3px solid lime";
});

// Обработка submit
formSubmit.addEventListener("submit", (hole) => {
  hole.preventDefault();

  const userName = inputHole.value.trim();
  const isAccepted = checkBox.checked;

  if (userName !== "" && isAccepted) {
    const user = { userName };
    console.log("User data:", user);
  } else {
    console.log("Заповніть ім’я і погодьтесь з політикою!");
    return; // Не продолжаем, если данные некорректны
  }

  // Очистка после отправки
  inputHole.value = "";
  checkBox.checked = false;
  spanOutput.textContent = "Anonymous";
  inputHole.classList.remove("success", "error");
  inputHole.style.outline = "none";
});
//=================================================
//Завдання 4:

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
const coob = document.querySelector(".box");
const buttonUp = document.querySelector("#increase");
const buttonDown = document.querySelector("#decrease");

buttonUp.addEventListener("click", () => {
  coob.style.width = coob.offsetWidth + 20 + "px";
  coob.style.height = coob.offsetHeight + 20 + "px";
});

buttonDown.addEventListener("click", () => {
  coob.style.width = coob.offsetWidth - 20 + "px";
  coob.style.height = coob.offsetHeight - 20 + "px";
});
