import _ from 'lodash';

let cars = ['Palio', 'Uno', 'Gol', 'Classic', 'HB20'];
//retorna o primeiro e último elemento
console.log(_.first(cars));
console.log(_.last(cars));
// retorna o nht (posição) elemento do array
console.log(_.nth(cars, 3));