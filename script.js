/*
  1) Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

  То есть дефисы удаляются, а все слова после них получают заглавную букву.

  Примеры:
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
    P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
*/

let comelise = str => {
  let strArray = str.split('');
  strArray.forEach(
    function(item, index, array) {
      if (item === '-') {
        array[index + 1] = array[index + 1].toUpperCase();
        array.splice(index, 1);
      };
    }
  );
  return strArray.join("");
};

console.log("ЗАДАЧА 1");
console.log(comelise("background-color"));
console.log(comelise("list-style-image"));
console.log(comelise("-webkit-transition"));


/*
  2)
    Задача: написать функцию, принимающую массив чисел
    и возвращающую сумму всех его положительных элементов и отрицательных 
    чисел отдельно в виде нового массива

    например функция принимает как аргумент следующий массив
    arr = [1, -2, 3, 4, -9]

    и должна вернуть [8, -11]
    Сохраняйте вызов этой функции через деструктурирующее присваивание
*/

let sumPlusMinus = arrayOfNumbers => {
  let sumResult = [0, 0];
  arrayOfNumbers.forEach (function(element) {
      element > 0 
        ? sumResult[0] += element
        : sumResult[1] += element;
  })
  return sumResult;
}

console.log("\nЗАДАЧА 2");
let arr = [1, -2, 3, 4, -9];
let [positiveSum, negativeSum] = sumPlusMinus(arr);
console.log(`${positiveSum}, ${negativeSum}`);









