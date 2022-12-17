function ShowDate(params) {
let out = document.getElementById('today'); 
let today = new Date ();
out.innerHTML = today.toLocaleDateString ();
}

function showDaysCount(parasm) {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date (inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    let result = document.getElementById('result');
    daysCount = Math.floor(daysCount); // округляем в меньшую сторону
    result.innerHTML = 'С даты рождения прошло дней:' + daysCount;   
}

window.addEventListener('load', ShowDate);
 
function showTime() {
    let outTime = document.getElementById('time');
    let currentTime = new Date();
    outTime.innerHTML = currentTime.toLocaleTimeString('ru');
}

window.addEventListener('load', showTime);
setInterval(showTime, 1000); 


function ShowDate(params) {
    let out = document.getElementById('today'); 
    let today = new Date ();
    out.innerHTML = today.toLocaleDateString ();
    }


function Showdays(params) {
     let out = document.getElementById('segonnya'); 
     let segonnya = new Date ();
    out.innerHTML = segonnya.toLocaleDateString ();
    }

function showDayssCoun(parasm) {
        let segonnya = new Date();
        let inputDate = document.querySelector('input[type=number]');
        let kolichestvodney = new Date (inputDate.value);
        let daysCount = (segonnya + kolichestvodney)    ;
        let result1 = document.getElementById('result1');
        daysCount = Math.floor(daysCount); // округляем в меньшую сторону
        result1.innerHTML = 'Круглая дата будет через: ' + daysCount;   
    }

    window.addEventListener('load', ShowDate);
