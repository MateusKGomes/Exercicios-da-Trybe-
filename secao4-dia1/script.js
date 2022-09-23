// let marina = 23;
// let silvia = 26;
// let iza = 20;

// if (marina < silvia && marina < iza)  {
//     console.log('Marina é a mais jovem, ela possui' + marina + 'anos')
// } else if (silvia < marina && silvia < iza) {
//     console.log('Silvia é a mais jovem, ela tem ' + silvia + ' anos.')
// } else {
//     console.log('iza é a mais jovem, ela tem '  +  iza +  ' anos.') 
// }

 // let a = 16;
// let b = 89;
// let c = 90;

// if (Number[a + b + c == 180]) {
//     console.log('Você tem um triângulo perfeito.')
// } else {
//     console.log('Você não tem um triângulo.')
// }

// let lotteryNumber = [];

// for (let index = 0; index < 6; index += 1); {
//     lotteryNumber.push(Math.ceil(Math.random() * 60)) 
// }

// let firstGame = [13, 26, 11, 38, 53, 41];
// let numberOfHits = 0;
// let hits = [];

// for (let indexlottery = 0; indexlottery < lotteryNumber.length; indexlottery += 1) {
//     for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
// if (lotteryNumber[indexlottery] === firstGame[indexGame]) {
// numberOfHits.push += 1;
//  hits.push(lotteryNumber[indexlottery])
//         }
//     }
// }
// console.log('Numeros sorteados',  lotteryNumber);
// console.log('Numeros apostados', firstGame);
// console.log('Numeros acertados', numberOfHits);
// console.log('Quantidade de acertos', hits);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
// let result = 0;
// let avarage = [];
// for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) { 
// result += (numbers[indexNumbers]) 
// }
// avarage = result / numbers.length;
// console.log(avarage);



// let avarage = result / numbers.length;
// if (avarage > 20){
//     console.log('Seu número é maior que 20.')
// } else {
//     'Seu número é menor que 20'
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
// let result = 0;
// for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema, vamos iniciar a variável com o primeiro valor do array. Dessa forma, podemos pular a posição 0 e iniciar com index = 1

//     let higherNumber = numbers[0];

//     for (let index = 1; index < numbers.length; index += 1) {
//         if (numbers[index] > higherNumber) {
//             higherNumber = numbers[index];
//         }
//     }

//     console.log(higherNumber)

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let oddNumbers = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if(numbers[index] % 2 !== 0) { 
//         oddNumbers += 1;
//     } 
// }
// if(oddNumbers === 0) {
//     console.log ('Nenhum número ímpar foi encotnrado');
// } else {
//     console.log(oddNumbers);
// }