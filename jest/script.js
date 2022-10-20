// function sum(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//       throw new Error('parameters must be numbers');
//     }
  
//     return a + b;
//   }
//   function myRemove(arr, item) {
//     let newArr = [];
//     for (let index = 0; index < arr.length; index += 1) {
//       if (item !== arr[index]) {
//         newArr.push(arr[index]);
//       }
//     }
//     return newArr;
//   }
  
// module.exports = myRemove; 

// const techList = (arr, name) => {
//     if(arr.length === 0)
//         return 'Vazio!';
    
//     const arrayTech = arr.sort();
//     const nameTech = [];
//     for(let index = 0; index < arr.length; index += 1){
//         nameTech.push({
//             tech: arrayTech[index],
//             name,
//         });
//     }
//     return nameTech;
// }

// module.exports = techList;

// hydrate.js

const hydrate = (string) => {
    const splitString = string.split('');
    let glassesOfWater = 0;
  
    for (let index = 0; index < splitString.length; index += 1) {
      const parsedCharacter = parseInt(splitString[index]);
  
      if (parsedCharacter) {
        glassesOfWater += parsedCharacter;
      }
    }
  
    let glass = 'copo';
  
    if (glassesOfWater > 1) {
      glass = 'copos';
    }
  
    return `${glassesOfWater} ${glass} de água`;
  };
  
  module.exports = hydrate;