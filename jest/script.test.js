// const techList = require("./script.js");

// describe('Teste a funcao sum', () => {
//     it('Ao somar 2 + 4 o resultado deve ser igual a 6', () => {
//         expect(sum(2, 4)).toBe(6);
//     })
//     it('Erro ao disparar uma string', () => {
//         expect(() => (sum(2, '4')).toThrowError());
//     })
// })

// const myRemove = require("./script.js");

// describe('Teste a funcao myRemove', () => {
//     it('Ao colocar um item retorna array sem numero do item', () => {
//         expect(myRemove([1,2,3,4,5,6], 3)).toEqual([1,2,4,5,6]);
//     })
//     it('Ao colocar um item retorna array com o numero do item', () => {
//         expect(myRemove([1,2,3,4,5,6], 3)).not.toEqual([1,2,3,4,5,6]);
//     })
// });

const techList = require('./script.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});
module.exports = techList;

