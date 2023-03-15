  /*
  1)  
  // Сумма свойств объекта
  У нас есть объект, в котором хранятся зарплаты нашей команды.
  Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
  Если объект salaries пуст, то результат должен быть 0.
*/

const Salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const salariesSumm = (ObjSalaries) => {
  let resultSum = 0;
  for (key in ObjSalaries) {
    resultSum += ObjSalaries[key];
  }
  return resultSum;
}

let sum = salariesSumm(Salaries);
console.log(`Задача 1 \nСумма зарплат: ${sum}`);



/*
  2) 
  Умножаем все числовые свойства на 2
  Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
  Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
  P.S. Используйте typeof для проверки, что значение свойства числовое.
*/

const Menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = function(InputObject) {
  for (key in InputObject) {
    if (typeof InputObject[key] === "number") 
      InputObject[key] *= 2;
  }
}

multiplyNumeric(Menu);

console.log(`\nЗадача 2`);
console.log(Menu);





