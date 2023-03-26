const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
input.addEventListener('input', onchangeSizeOfText);

function onchangeSizeOfText(event) {
   span.style.fontSize = event.currentTarget.value;
}

