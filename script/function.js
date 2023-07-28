 // Функция
 function exampleFunction(){
    let a = 'Javascript';
    let b = ' это ';
    let c = 'адское создание';
    console.log(a+b+c);
}
// вызов функции
// exampleFunction()

// Второй пример
function keepScore(ours, theirs){
    if(ours > theirs) {
        console.log('Выиграли! Счёт ' + ours + ':' + theirs);
    }
    else if(ours === theirs) {
        console.log('Ничья. Счёт ' + ours + ':' + theirs);
    }
    else {
        console.log('Проиграли... Счёт ' + ours + ':' + theirs);
    }
}
// keepScore(5, 3)