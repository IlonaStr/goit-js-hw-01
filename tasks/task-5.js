'use strict';

const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;
const deliveryCountry = prompt ('Укажите страну доставки');

if(deliveryCountry === null) {
    alert('Отменено пользователем!');
} else {
    switch(deliveryCountry.toUpperCase()) {
        case 'КИТАЙ':
            alert(`Доставка в ${deliveryCountry} будет стоить ${priceChina} кредитов`);
            break;

        case 'ЧИЛИ':
            alert(`Доставка в ${deliveryCountry} будет стоить ${priceChile} кредитов`);
            break;

        case 'АВСТРАЛИЯ':
            alert(`Доставка в ${deliveryCountry} будет стоить ${priceAustralia} кредитов`);
            break;
            
        case 'ИНДИЯ':
            alert(`Доставка в ${deliveryCountry} будет стоить ${priceIndia} кредитов`);
            break;

        case 'ЯМАЙКА':
            alert(`Доставка в ${deliveryCountry} будет стоить ${priceJamaica} кредитов`);
            break;
    }
}