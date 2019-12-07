'use strict';

let input;
let totalNumbers = 0;

do {
    input = prompt('Введите число');
    if(Number.isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        totalNumbers += Number(input);
    }
} while (input !== null)
alert (`Общая сумма чисел равна ${totalNumbers}`);