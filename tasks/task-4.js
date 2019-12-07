'use script';

const credits = '23580';
const pricePerDroid = '3000';
const desiredQuantity = prompt('Сколько дронов желаете приобрести?');

if(desiredQuantity === null) {
    alert('Отменено пользователем!');
} else {
    const totalPrice = desiredQuantity * pricePerDroid;
    if(totalPrice > credits) {
        alert('Недостаточно средств на счету!');
    } else {
        alert(`Вы купили ${desiredQuantity} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
    }
}