'use strict';

const display = document.querySelector('.display');

const getTimeNow = dateNow => {
    dateNow = new Date();
    const timeNow = dateNow.toLocaleTimeString('hu');
    display.textContent = timeNow;
}

setInterval(getTimeNow, 1000);