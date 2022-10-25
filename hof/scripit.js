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

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studantAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswers, studantAnswers) => {
      if (rightAnswers === studantAnswers) {
        return  1;
      } else if (studantAnswers === 'N.A') {
        return  0;
      } else if (rightAnswers !== studantAnswers) {
        return -1;
      };
      };

    const countPoints = (rightAnswers, studentAnswers, action) => {
      let counter = 0;
      for (let index = 0; index < rightAnswers.length; index += 1) {
        const actionReturn = action(rightAnswers[index], studentAnswers[index]);
        counter += actionReturn;
      }
      return `Resultado final: ${counter} pontos`;
    };
    
console.log(countPoints(rightAnswers, studantAnswers, compareAnswers));