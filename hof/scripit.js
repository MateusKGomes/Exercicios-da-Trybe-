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
const checkNumbers = (myNumber, number) => myNumber === number; 
const randomNumber = (myNumber, callBack ) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callBack(myNumber, number) ? 'You won!' : `Try again, drawn number is ${number}`;
};
console.log(randomNumber(3, checkNumbers));