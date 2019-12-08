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
    switch(deliveryCountry.toLowerCase()) {
        case 'китай':
            alert(`Доставка в ${deliveryCountry} будет стоить ${priceChina} кредитов`);
            break;

        case 'чили':
            alert(`Доставка в ${deliveryCountry} будет стоить ${priceChile} кредитов`);
            break;

        case 'австралия':
            alert(`Доставка в ${deliveryCountry} будет стоить ${priceAustralia} кредитов`);
            break;
            
        case 'индия':
            alert(`Доставка в ${deliveryCountry} будет стоить ${priceIndia} кредитов`);
            break;

        case 'ямайка':
            alert(`Доставка в ${deliveryCountry} будет стоить ${priceJamaica} кредитов`);
            break;
    }
}