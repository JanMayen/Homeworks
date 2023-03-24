/*
1)  
  Создайте input type text и три кнопки
  кнопки должны иметь следующий функционал (должны запускать соотвествующие фунции)
  1. Кнопка "Очистить input" (удалять содержимое value тега input)
  2. Кнопка заблокировать инпут (disabled setAttribute)
  3. Кнопка разблокировать инпут (disabled removeAttribute)
  или input.disabled = true/false;
*/

const inputBox = document.querySelector(".input-box");
const buttonClearInput = document.querySelector(".button-clear-input");
const buttonBlockInput = document.querySelector(".button-block-input");
const buttonUnblockInput = document.querySelector(".button-unblock-input");


const clearInput = function(event) {
  inputBox.setAttribute("value", "");
}
buttonClearInput.addEventListener("click", clearInput);


const blockInput = function(event) {
  inputBox.setAttribute("disabled", true);
}
buttonBlockInput.addEventListener("click", blockInput);


const unblockInput = function(event) {
  inputBox.removeAttribute("disabled");
}
buttonUnblockInput.addEventListener("click", unblockInput);



/*
2) 
  Создайте в HTML два текстовых инпута и кнопку
  Напишите функцию, которая будет по нажатию на кнопку
  менять содержимое инпутов (value) местами
*/

const inputBox_1 = document.querySelector(".input-box-1");
const inputBox_2 = document.querySelector(".input-box-2");
const buttonSwap = document.querySelector(".button-swap");

const swap = function(event) {
  let swapVariable = inputBox_2.getAttribute("value");
  inputBox_2.setAttribute("value", inputBox_1.getAttribute("value"));
  inputBox_1.setAttribute("value", swapVariable);
}
buttonSwap.addEventListener("click", swap);



