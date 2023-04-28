
const buttonColorPicker = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

buttonColorPicker.addEventListener('click', onChangeBodyColor)

function onChangeBodyColor() {
  
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = document.body.style.backgroundColor;
    
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}