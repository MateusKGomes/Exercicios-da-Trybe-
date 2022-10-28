const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(arrays) {
    return arrays.reduce((acc, cur) => acc.concat(cur), []);
}
// console.log(flatten(arrays));
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
  
  // Adicione o código do exercício aqui:

  
  function flatten() {
    // escreva seu código aqui
  }


function reduceNames() {
 return books.reduce((acc, book) => `${acc} ${book.author.name}.`, '' );
}
// console.log(reduceNames()); 


const avarageAge = () => {
  const numberOfBooks = books.length;
  const avarageAge = books.reduce((acc, book) => (
   acc + (book.releaseYear - book.author.birthYear)
  ), 0)
  return avarageAge / numberOfBooks
}
// console.log(avarageAge());

function longestNamedBook() {
 return books.reduce((acc, book) => {
  if(book.length > acc.name.length){
    return book
}
return acc

  });
}
// console.log(longestNamedBook()); 


const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// const expectedResult = 20;

function containsA() {
    let count = 0;
    names.forEach((name) => {
      const lettersFromName = name.split('');  
    count += lettersFromName.reduce((acc, cur) => {
      if(cur.toLowerCase() === 'a'){
       return  acc + 1;
       
     }
     return acc;

   }, 0)
  })
  return count;
 }
// console.log(containsA());


const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
 return nameAndAverage = students.map((student, index) => ({
  name: student,
  avarege: grades[index].reduce((acc, cur) => acc + cur, 0) / grades[index].length,
 }))
 
}
// console.log(studentAverage());


const data = require('../data/data')

const mapCities = () => {
  return data.cities.reduce((acc, city) => {
    if(!acc[city.region]) {
      acc[city.region] = [];
    }

    const findState = data.states.find((state) => state.short === city.state);

    const obj = {
      city: city[cityName], 
      state: findState.name,
    };
    acc[city.region].push(obj);
    return acc;
  }, {});
}

console.log(mapCities());


