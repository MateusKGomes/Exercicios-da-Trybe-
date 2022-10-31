// REST 
const sum = (...numbers) => {
    return numbers.reduce((acc, number) => {
        return acc + number;
    }, )
}
// console.log(sum(3, 10, 1));

//SPREAD
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
//   console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});


const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
      // bornIn: nascido em
  ];

  
const filterPeople = () => {
    return people.filter(({nationality, bornIn}) => {
      return nationality === 'Australian' && bornIn > 1900 & bornIn <= 2000;
    });
};

console.log(filterPeople());     
