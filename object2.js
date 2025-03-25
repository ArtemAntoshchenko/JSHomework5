let sumrub=+prompt('Введите сумму в рублях')
let currency=prompt('Введите валюту для конверции',"Доллар, Евро")
let currencyValue= {
    'Доллар':83,
    'Евро':91,
}
function transfer(sumrub, currency) {
    if(sumrub>0) {
        return currencyValue[currency]/sumrub
    }
   else {
        return 'Неверная сумма, введите положительное значение'
    }
}
console.log(transfer(sumrub,currency))