const counterValue = document.querySelector('#value');
const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');

btnInc.addEventListener('click',onIncrementValue)
btnDec.addEventListener('click',onDecrementValue)


let count = 0;
function onIncrementValue(){
   count += 1;
   counterValue.textContent = count;

}
function onDecrementValue() {
   count -= 1;
   counterValue.textContent = count;
  
}
