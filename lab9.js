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
    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY;
}

window.addEventListener('DOMContentLoaded', function() {
    let coords = document.querySelector('#coords');
    coords.addEventListener('mousemove', showCoords);
});
