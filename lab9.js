function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок';
}

function clickMe2(button) {
    if(button.innerHTML == 'Копылов')
        button.innerHTML = 'Кирилл';
    else
        button.innerHTML = 'Копылов';
}

function clickMe3(button)
{ 
    if(button.innerHTML == 'Нажми меня') 
        button.innerHTML = 'Ещё раз нажми';
    else if (button.innerHTML == 'Ещё раз нажми')
        button.innerHTML = 'Ещё';
        else if (button.innerHTML == 'Ещё')
        button.innerHTML = 'Начать сначала';
    else
        button.innerHTML = 'Нажми меня';
}

function showCoords(event) {
    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY + ' ' + 
    (event.ctrlKey? '<b>Ctrl</b>': '<s>Ctrl</s>') + ' ' + (event.shiftKey? '<b>Shift</b>': '<s>Shift</s>') + ' ' + (event.altKey? '<b>Alt</b>': '<s>Alt</s>');
}

window.addEventListener('DOMContentLoaded', function() {
    let coords = document.querySelector('#coords');
    coords.addEventListener('mousemove', showCoords);
})
function showFocus(event) {
    event.target.style.color = 'blue';
}
window.addEventListener('DOMContentLoaded', function() {
    let texts = document.querySelectorAll('input[type="text"]');
    texts[0].addEventListener('focus', showFocus);
    texts[1].addEventListener('focus', showFocus);
    texts[2].addEventListener('focus', showFocus);
});
function showBlur(event) {
    event.target.style.color = 'black';
} 
window.addEventListener('DOMContentLoaded', function() {
let texts = document.querySelectorAll('input[type="text"]'); 
texts[0].addEventListener('blur', showBlur);
texts[1].addEventListener('blur', showBlur);
texts[2].addEventListener('blur', showBlur);
});

function showOutput(event){
    document.getElementById('output').innerHTML = event.target.value;
}
window.addEventListener('DOMContentLoaded', function() {
let texts = document.querySelectorAll('input[type="text"]');
    texts[0].addEventListener('change', showOutput);
    texts[1].addEventListener('change', showOutput);
    texts[2].addEventListener('change', showOutput);
});
