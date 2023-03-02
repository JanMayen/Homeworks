/*1) Выведите чётные числа
	При помощи цикла for выведите чётные числа от 2 до 10.
	Для проверки на чётность используйте оператор получения остатка от деления % - if (i % 2 == 0) */

/*
console.log("Задача 1.1");
for (let i = 2; i <= 10; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}
*/

/*1.1) Перепишите код, заменив цикл for на while, без изменения поведения цикла.*/
/*
console.log("\nЗадача 1.2");
let i = 0;
while (i < 3) {
	console.log(`number ${i}!`);
	i++;
}
*/


/*2) Перепишите код в двух синтаксисах (одну можно закомментировать) Function Expression и стрелочной функцией
Сейчас в функцию ask передаются анонимные каллбек функции, дайте им имена и передавайте как каллбек через переменную описания.*/
 
console.log("\nЗадача 2");
//Реализация способом 2
let ask = function (question, answer, yes, no) {
  question();
  if (answer) yes();
  else no();
}

let question = function() {console.log("Вы согласны?")};
let yes = function() {console.log("Вы согласились.")};
let no = function() {console.log("Вы отказались.")};

console.log("Реазлизация 1");
ask(question, true, yes, no);



//Реализация способом 2

let ask = (question, answer, yes, no) => {
  let outputString = `${question}\n`;
  if (answer) {
    outputString += yes;
  } else {
    outputString += no;
  } 
  return outputString;
}

let question = () => "Вы согласны?";
let yes = () => "Вы согласились.";
let no = () => "Вы отказались.";

console.log("\nРеализация способом 2");
console.log(ask(question(), true, yes(), no()));













