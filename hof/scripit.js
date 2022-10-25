// const newEmployees = (employeeGenerator) => {
//   const employees = {
//     id1: employeeGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: employeeGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: employeeGenerator('Carla Paiva'),  // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   };
//   return employees;
// };

//   const employeeGenerator = (fullName) => {
//     const email = fullName.toLowerCase().split(' ').join('_');
//     return { fullName, email: `${email}@trybe.com`}
//   };

// console.log(newEmployees(employeeGenerator)); 
// const checkNumbers = (myNumber, number) => myNumber === number; 
// const randomNumber = (myNumber, callBack ) => {
//   const number = Math.floor((Math.random() * 5) + 1);
//   return callBack(myNumber, number) ? 'You won!' : `Try again, drawn number is ${number}`;
// };
// console.log(randomNumber(3, checkNumbers));

// const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const studantAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const compareAnswers = (rightAnswers, studantAnswers) => {
//       if (rightAnswers === studantAnswers) {
//         return  1;
//       } else if (studantAnswers === 'N.A') {
//         return  0;
//       } else if (rightAnswers !== studantAnswers) {
//         return -1;
//       };
//       };

//     const countPoints = (rightAnswers, studentAnswers, action) => {
//       let counter = 0;
//       for (let index = 0; index < rightAnswers.length; index += 1) {
//         const actionReturn = action(rightAnswers[index], studentAnswers[index]);
//         counter += actionReturn;
//       }
//       return `Resultado final: ${counter} pontos`;
//     };
    
// console.log(countPoints(rightAnswers, studantAnswers, compareAnswers));

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  const authorBornIn1947 = (number) => {
    return books.find((book) => book.author.birthYear === 1947).author.name
  };
  console.log(authorBornIn1947());