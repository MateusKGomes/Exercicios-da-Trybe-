// let person = {
//     name: 'Mateus', 
//     lastName: 'Kulik',
// }

// person.age = 22;


// for(let key in person) {
//     console.log(person[key]);
// }
// person.favoriteHobbies = 'Praia' 


// console.log(person);


// function sum (num1, num2) {
//     if(num1 > num2){
//         return 'O maior valor é: ' + num1;
//     }else if(num1 === num2) {
//         return 'Empate'
//     }else {
//         return 'O maior valor é: ' + num2;
//     }
// }
// console.log(sum(10, 5));
// console.log(sum(1555, 848125));

// function verificaPalindrome (word1, word2){
//     if(word1 === word1) {
//         return 'Você é uma palindrome'
//     }else if(word2 === word2.reverse){
//         return 'Você é uma palindrome'
//     }else {
//         return 'Você nao é uma palindrome.'
//     };
// }   
// console.log(verificaPalindrome('arara', 'desenvolvimento'));
 //=============================================================
//==============================================================
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   info.recorrente = 'Sim';
// for(let key in info){   
//     console.log(info[key])
// }


//==============================================================


// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

// leitor.livrosFavoritos.push({
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor:  'JK Rowling',
//     editora:  'Rocco',
// });
// console.log(leitor);

//   console.log('O livro favorito de ' + leitor.nome + ' ' +leitor.sobrenome + ' se chama '+ leitor.livrosFavoritos[0].autor); 

// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');


//==============================================================

// function indiceDoMaior(numeros) {
//   let indiceMaior = 0;
//   for (let index = 0; index < numeros.length; index += 1) {
//     if (numeros[indiceMaior] < numeros[index]) {
//       indiceMaior = index;
//     }
//   }

//   return indiceMaior;
// }

// console.log(indiceDoMaior([2, 3, 6, 7])); //4

//==============================================================

// function sumFunctions(numbers) {
// let sumResult =  0;
// for (let index = 0; index < numbers.length; index += 1){
//   sumResult += numbers[index];
//   }
//   return sumResult;
// } 

// console.log(sumFunctions([0, 24, 12, 13, 5]));
