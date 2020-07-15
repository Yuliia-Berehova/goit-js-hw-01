let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const droidsAmount = prompt('Введите количество дроидов');

if (droidsAmount === null) {
  console.log('Отменено пользователем!');
} else if (Number.isNaN(Number(droidsAmount))) {
  console.log('Введите число!');
} else {
  totalPrice = pricePerDroid * Number(droidsAmount);
}

if (droidsAmount !== null && !Number.isNaN(Number(droidsAmount))) {
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits = credits - totalPrice;
    console.log(
      `Вы купили ${droidsAmount} дроидов, на счету осталось ${credits} кредитов`,
    );
  }
}
